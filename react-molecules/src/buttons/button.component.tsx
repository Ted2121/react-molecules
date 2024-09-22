import * as React from 'react';
import Button from '@mui/material/Button';
import { useHandleAnchorClick } from "./hooks/use-handle-anchor-click.hook";
import { useNavigate } from "react-router-dom";
import { IconButton, Tooltip } from "@mui/material";
import ButtonProps, { IconButtonProps, StandardButtonProps } from './types/button-props.model';

export default function ButtonComponent(props: ButtonProps) {
    const navigate = useNavigate();
    const boundingElement = React.useRef<HTMLDivElement>(null);
    const [, forceUpdate] = React.useReducer(x => x + 1, 0);

    React.useLayoutEffect(() => {
        forceUpdate()
    }, [])

    //#region props
    const {
        isUploadButton,
        isLoadingButton,
        isIconButton,
        id,
        labelText,
        tooltipText,
        tooltipPlacement,
        disabled,
        hidden,
        variant,
        colorVariant,
        sizeVariant,
        startIcon,
        endIcon,
        popover,
        onUpload,
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

    const coreProps = {
        navigate,
        id,
        disabled,
        hidden,
        colorVariant,
        sizeVariant,
        startIcon,
        endIcon,
        onClick,
        styles,
    };

    const navigationProps = {
        href,
        target,
        removeNoreferrer
    }

    const allExcludingIconProps = {
        variant,
        labelText
    }

    const popoverProps = {
        popover
    }

    const uploadProps = {
        onUpload
    }

    const loadingProps = {
        loadingLabel,
        customLoadingIndicator,
        doneLoadingLabel,
        doneLoadingIcon
    }
    //#endregion

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
                                <IconButtonComponent {...coreProps} {...navigationProps} {...uploadProps} isUploadButton={isUploadButton}/>
                            ) : (
                                <StandardButtonComponent {...coreProps} />
                            )}
                        </span>
                    </Tooltip>
                </div>
            ) : (
                <StandardButtonComponent {...coreProps} />
            )}
        </>
    )
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
    isUploadButton
}: IconButtonProps) {
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

