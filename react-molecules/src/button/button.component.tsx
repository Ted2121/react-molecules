import * as React from 'react';
import Button from '@mui/material/Button';
import { useHandleAnchorClick } from "./hooks/use-handle-anchor-click.hook";
import { NavigateFunction, useNavigate } from "react-router-dom";
import ButtonStylesheet from "./types/button.stylesheet";
import { IconButton, Tooltip } from "@mui/material";
import ButtonProps from './types/button-props.model';
import { ButtonVariant, ColorVariant, HrefTarget, SizeVariant } from '../shared/types/component-props-types.model';

export default function ButtonComponent(props: ButtonProps) {
    //#region props
    const {
        labelText,
        id,
        tooltipText,
        tooltipPlacement,
        disabled,
        hidden,
        variant,
        colorVariant,
        sizeVariant,
        isIconButton,
        startIcon,
        endIcon,
        popover,
        isUploadButton,
        onUpload,
        isLoadingButton,
        loadingLabel,
        customLoadingIndicator,
        doneLoadingLabel,
        doneLoadingIcon,
        onClick,
        href,
        target,
        removeNoreferrer,
        styles,
    } = props;

    const navigate = useNavigate();
    const standardButtonProps = {
        navigate,
        labelText,
        id,
        disabled,
        hidden,
        variant,
        colorVariant,
        sizeVariant,
        onClick,
        href,
        target,
        removeNoreferrer,
        startIcon,
        endIcon,
        styles,
    };
    //#endregion
    const boundingElement = React.useRef<HTMLDivElement>(null);
const [, forceUpdate] = React.useReducer(x => x + 1, 0);
React.useLayoutEffect(() => {
    forceUpdate()
  }, [])

    return (
        <>
            {tooltipText ? (
                <div ref={boundingElement}>

                <Tooltip 
                title={tooltipText} 
                placement={tooltipPlacement ?? undefined}
                PopperProps={{
                    popperOptions: {
                      modifiers: [
                        {
                           name: "preventOverflow",
                           options: {
                             boundary: boundingElement?.current || 'viewport',
                           }
                        }
                      ]
                    }
                  }}>
                    <span> {/* This wrapper ensures the Tooltip works with disabled buttons */}
                        {isIconButton ? (
                            <IconButtonComponent {...standardButtonProps}/>
                        ) : (
                            <StandardButtonComponent {...standardButtonProps} />
                        )}
                    </span>
                </Tooltip>
                </div>
            ) : (
                <StandardButtonComponent {...standardButtonProps} />
            )}
        </>
    )
}

export interface StandardButtonProps {
    navigate: NavigateFunction,
    labelText?: string;
    id?: string;
    disabled?: boolean;
    hidden?: boolean;
    variant?: ButtonVariant;
    colorVariant?: ColorVariant;
    sizeVariant?: SizeVariant;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    href?: string;
    target?: HrefTarget;
    removeNoreferrer?: boolean;
    startIcon?: React.ReactElement;
    endIcon?: React.ReactElement;
    styles?: ButtonStylesheet
}

export function StandardButtonComponent({
    navigate,
    labelText,
    id,
    disabled,
    hidden,
    variant,
    colorVariant,
    sizeVariant,
    onClick,
    href,
    target,
    removeNoreferrer,
    startIcon,
    endIcon,
    styles,
}: StandardButtonProps) {
    const onAnchorClick = href ? useHandleAnchorClick(navigate, href, target, removeNoreferrer) : undefined;
    const buttonSx = {
        aspectRatio: styles?.aspectRatio || undefined,
        minWidth: styles?.minWidth || undefined,
        maxHeight: styles?.maxHeight || 40,
        fontSize: styles?.fontSize || undefined,
        textTransform: styles?.textTransform || undefined,
    };

    return (
        <Button
            id={id}
            className={styles?.className ?? ''}
            disabled={disabled}
            hidden={hidden}
            variant={variant}
            color={colorVariant}
            size={sizeVariant}
            onClick={href ? onAnchorClick : onClick}
            component={href ? 'a' : 'button'}
            href={href || undefined}
            startIcon={startIcon || undefined}
            endIcon={endIcon || undefined}
            sx={buttonSx}
        >
            {labelText}
        </Button>
    )
}

export function IconButtonComponent({
    navigate,
    id,
    disabled,
    hidden,
    colorVariant,
    sizeVariant,
    onClick,
    href,
    target,
    removeNoreferrer,
    startIcon,
    endIcon,
    styles,
}: StandardButtonProps) {
    const onAnchorClick = href ? useHandleAnchorClick(navigate, href, target, removeNoreferrer) : undefined;

    if (!startIcon && !endIcon) return null;
    
    return (
        <IconButton
            id={id}
            disabled={disabled}
            hidden={hidden}
            color={colorVariant}
            size={sizeVariant}
            onClick={href ? onAnchorClick : onClick}
            component={href ? 'a' : 'button'}
            href={href || undefined}
            sx={{
                aspectRatio: styles?.aspectRatio || 1,
                minWidth: styles?.minWidth || undefined,
            }}
        >
            {startIcon || endIcon}
        </IconButton>
    );
}