import * as React from 'react';
import Button from '@mui/material/Button';
import { useHandleAnchorClick } from './hooks/use-handle-anchor-click.hook';
import { useNavigate } from 'react-router-dom';
import { IconButton, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
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
        component,
        tabIndex,
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
        component,
        tabIndex,
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

    const buttonSelection = (
        isUploadButton ? (
            <UploadButtonComponent {...coreProps} {...uploadProps} {...allExcludingIconProps} isIconButton={isIconButton} />
        ) : isIconButton ? (
            <IconButtonComponent {...coreProps} {...navigationProps} />
        ) : (
            <StandardButtonComponent {...coreProps} {...navigationProps} {...allExcludingIconProps} {...popoverProps} />
        )
    )

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
                            {buttonSelection}
                        </span>
                    </Tooltip>
                </div>
            ) : (
                <>
                    {buttonSelection}
                </>
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
    children,
    popover,
    component,
    role,
    tabIndex,
}: StandardButtonProps) {
    const onAnchorClick = href ? useHandleAnchorClick(navigate, href, target, removeNoreferrer) : undefined;
    const buttonSx = {
        aspectRatio: styles?.aspectRatio || undefined,
        minWidth: styles?.minWidth || undefined,
        maxHeight: styles?.maxHeight || 40,
        fontSize: styles?.fontSize || undefined,
        textTransform: styles?.textTransform || undefined,
        '&:hover': {
            backgroundColor: styles?.hoverBackgroundColor || undefined,
        }
    };

    return (
        <Button
            id={id}
            className={styles?.className ?? ''}
            tabIndex={tabIndex}
            disabled={disabled}
            hidden={hidden}
            variant={variant}
            color={colorVariant}
            size={sizeVariant}
            onClick={href ? onAnchorClick : onClick}
            component={href ? 'a' : component || 'button'}
            href={href || undefined}
            role={href ? 'link' : role || 'button'}
            startIcon={startIcon || undefined}
            endIcon={endIcon || undefined}
            sx={buttonSx}
        >
            {labelText}
            {children}
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
    children,
    component,
    role,
    tabIndex,
}: IconButtonProps) {
    const onAnchorClick = href ? useHandleAnchorClick(navigate, href, target, removeNoreferrer) : undefined;

    if (!startIcon && !endIcon) return null;

    const buttonSx = {
        aspectRatio: styles?.aspectRatio || 1,
        minWidth: styles?.minWidth || undefined,
        maxWidth: styles?.maxWidth || undefined,
        height: styles?.height || undefined,
        width: styles?.width || undefined,
        alignSelf: styles?.alignSelf || undefined,
        '&:hover': {
            backgroundColor: styles?.hoverBackgroundColor || undefined,
        }
    }

    return (
        <IconButton
            id={id}
            disabled={disabled}
            hidden={hidden}
            tabIndex={tabIndex}
            color={colorVariant}
            size={sizeVariant}
            onClick={href ? onAnchorClick : onClick}
            component={href ? 'a' : component || 'button'}
            href={href || undefined}
            role={href ? 'link' : role || 'button'}
            sx={buttonSx}
        >
            {startIcon || endIcon}
            {children}
        </IconButton>
    );
}

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


export function UploadButtonComponent({
    navigate,
    labelText,
    variant,
    id,
    disabled,
    hidden,
    colorVariant,
    sizeVariant,
    href,
    target,
    removeNoreferrer,
    startIcon,
    endIcon,
    styles,
    onUpload,
    uploadMultiple,
    isIconButton,
    children,
}: UploadButtonProps) {
    const buttonSx = {
        aspectRatio: styles?.aspectRatio || undefined,
        minWidth: styles?.minWidth || undefined,
        maxHeight: styles?.maxHeight || 40,
        fontSize: styles?.fontSize || undefined,
        textTransform: styles?.textTransform || undefined,
        '&:hover': {
            backgroundColor: styles?.hoverBackgroundColor || undefined,
        }
    };

    return (
        <>
            {isIconButton ? (
                <IconButtonComponent
                    navigate={navigate}
                    id={id}
                    component='label'
                    role='button'
                    tabIndex={-1} // must be -1 so that focus is set on the upload input
                    disabled={disabled}
                    hidden={hidden}
                    colorVariant={colorVariant}
                    sizeVariant={sizeVariant}
                    href={href || undefined}
                    target={target}
                    removeNoreferrer={removeNoreferrer}
                    startIcon={startIcon}
                    endIcon={endIcon}
                    styles={styles}
                >
                    <VisuallyHiddenInput
                        type='file'
                        onChange={onUpload}
                        multiple={uploadMultiple}
                    />
                    {children}
                </IconButtonComponent >
            ) : (
                <Button
                    component='label'
                    role='button'
                    tabIndex={-1} // must be -1 so that focus is set on the upload input
                    variant={variant ?? undefined}
                    startIcon={startIcon ?? undefined}
                    endIcon={endIcon ?? undefined}
                    sx={buttonSx}
                >
                    {labelText}
                    <VisuallyHiddenInput
                        type='file'
                        onChange={onUpload}
                        multiple={uploadMultiple}
                    />
                    {children}
                </Button>
            )}
        </>
    )
}

