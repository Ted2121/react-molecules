import * as React from 'react';
import Button from '@mui/material/Button';
import { useHandleAnchorClick } from './hooks/use-handle-anchor-click.hook';
import { useNavigate } from 'react-router-dom';
import { IconButton, styled, Tooltip } from '@mui/material';
import ButtonProps, { IconButtonProps, StandardButtonProps, UploadButtonProps } from './types/button-props.model';
import FileUploadIcon from '@mui/icons-material/FileUpload';

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
        uploadMultiple,
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
        onUpload,
        uploadMultiple,
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
                                        name: 'preventOverflow',
                                        options: {
                                            boundary: boundingElement?.current || 'viewport',
                                        }
                                    }
                                ]
                            }
                        }}>
                        <span> {/* This wrapper ensures the Tooltip works with disabled buttons */}
                            {isUploadButton ? (
                                <UploadButtonComponent {...coreProps} {...uploadProps} {...allExcludingIconProps} isIconButton={isIconButton} />
                            ) : isIconButton ? (
                                <IconButtonComponent {...coreProps} {...navigationProps} />
                            ) : (
                                <StandardButtonComponent {...coreProps} {...navigationProps} {...allExcludingIconProps} {...popoverProps} />
                            )}
                        </span>
                    </Tooltip>
                </div>
            ) : (
                <StandardButtonComponent {...coreProps} {...navigationProps} {...allExcludingIconProps} {...popoverProps} />
            )}
        </>
    )
}

export function StandardButtonComponent({
    navigate,
    labelText,
    variant,
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
    popover,
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
            role={href ? 'link' : 'button'}
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
            role={href ? 'link' : 'button'}
            sx={{
                aspectRatio: styles?.aspectRatio || 1,
                minWidth: styles?.minWidth || undefined,
            }}
        >
            {startIcon || endIcon}
        </IconButton>
    );
}

export function UploadButtonComponent({
    navigate,
    labelText,
    variant,
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
    onUpload,
    uploadMultiple
}: UploadButtonProps) {
    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
      });

    return (
        <Button
            component='label'
            role='button'
            variant= {variant ?? undefined}
            tabIndex={-1}
            startIcon={startIcon ?? undefined}
            endIcon={endIcon ?? undefined}
        >
            {labelText}
            <VisuallyHiddenInput
                type='file'
                onChange={onUpload}
                multiple={uploadMultiple}
            />
        </Button>
    )
}

