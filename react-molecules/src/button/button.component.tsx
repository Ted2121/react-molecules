import ButtonProps, { ButtonVariant, ColorVariant, HrefTarget, SizeVariant } from "./types/button-props.model";
import * as React from 'react';
import Button from '@mui/material/Button';
import { useHandleAnchorClick } from "./hooks/use-handle-anchor-click.hook";

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
        icon,
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
    removeNoreferrer 
}: SimpleButtonProps) {
    const onAnchorClick = href ? useHandleAnchorClick(href, target, removeNoreferrer) : undefined;

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
        >
            {labelText}
        </Button>
    )
}