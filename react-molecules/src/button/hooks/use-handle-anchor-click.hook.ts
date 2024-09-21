import { NavigateFunction } from "react-router-dom";

export const useHandleAnchorClick = (navigate: NavigateFunction, href: string, target?: string, removeNoreferrer?: boolean) => {

    const options = removeNoreferrer ? 'noopener' : 'noopener,noreferrer';

    const handleAnchorClick = (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();

        if (!href) return;

        let finalHref = href;

        if (href.startsWith('www')) {
            finalHref = `https://${href}`; // Default to https
        }

        if (href.startsWith('http')) {
            // External link - with changed default from _self to _blank
            const finalTarget = target || '_blank';
            window.open(finalHref, finalTarget, options);
        } else {
            // Internal route (using react-router-dom)
            navigate(finalHref);
        }
    };

    return handleAnchorClick;
};