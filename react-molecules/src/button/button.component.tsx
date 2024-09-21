import ButtonProps, { AutoSize, ButtonVariant, ColorVariant, HrefTarget, SizeVariant } from "./types/button-props.model";
import * as React from 'react';
import Button from '@mui/material/Button';
import { useHandleAnchorClick } from "./hooks/use-handle-anchor-click.hook";
import { useNavigate } from "react-router-dom";
import ButtonStylesheet from "./types/button.stylesheet";

export default function ButtonComponent(props: ButtonProps) {
    //#region props
    const {
        labelText,
        tooltipText,
        id,
        disabled,
        hidden,
        variant,
        colorVariant,
        sizeVariant,
        isIconButton,
        startIcon,
        endIcon,
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
    //#endregion

    return (
        <SimpleButton
            labelText={labelText}
            id={id}
            disabled={disabled}
            hidden={hidden}
            variant={variant}
            colorVariant={colorVariant}
            sizeVariant={sizeVariant}
            onClick={onClick}
            href={href}
            target={target}
            removeNoreferrer={removeNoreferrer}
            startIcon={startIcon}
            endIcon={endIcon}
            styles={styles}
        />
    )
}

export interface SimpleButtonProps {
    labelText: string;
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

export function SimpleButton({ 
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
}: SimpleButtonProps) {
    const navigate = useNavigate();
    const onAnchorClick = href ? useHandleAnchorClick(navigate, href, target, removeNoreferrer) : undefined;

    return (
        <Button
            id={id}
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
            sx={{
                minWidth: styles?.minWidth || 100,
            }}
        >
            {labelText}
        </Button>
    )
}