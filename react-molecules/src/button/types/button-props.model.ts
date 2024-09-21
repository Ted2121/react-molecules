import { MouseEventHandler, ReactElement } from 'react';

export default interface ButtonProps {
    labelText: string;
    tooltipText?: string;
    id?: string;

    disabled?: boolean;
    hidden?: boolean;

    variant?: ButtonVariant;
    colorVariant?: ColorVariant;
    sizeVariant?: SizeVariant;

    isIconButton?: boolean;
    icon?: ReactElement; // Any react component that wraps an svg icon (MUI icons, font awesome icons, custom svg icons wrapped in a react component)

    popover?: Array<ButtonProps>;

    isUploadButton?: boolean;
    onUpload?: Function;

    isLoadingButton?: boolean;
    loadingLabel?: string;
    customLoadingIndicator?: ReactElement;
    doneLoadingLabel?: string;
    doneLoadingIcon?: ReactElement;

    onClick?: MouseEventHandler<HTMLButtonElement>;

    href?: string;
    target?: HrefTarget;
    removeNoreferrer?: boolean;
}

export type ButtonVariant = 'text' | 'contained' | 'outlined';

export type ColorVariant = 'primary' | 'secondary' | 'success' | 'error';

export type SizeVariant = 'small' | 'medium' | 'large';

export type HrefTarget = '_blank' | '_self' | '_parent' | 'top';