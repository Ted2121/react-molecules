import ElevatedAppbarStylesheet from "../../navigation-bars/appbar/types/elevated-appbar-stylesheet.model";

export function elevatedAppBarStyles(): ElevatedAppbarStylesheet {
    return {
        backgroundColor: '#ae93b8',
        height: 80,
        padding: '30px 20px',
        class: 'appbar-bg-color',
        // hasGap: true,
        // gapHeight: 150,
    }
}