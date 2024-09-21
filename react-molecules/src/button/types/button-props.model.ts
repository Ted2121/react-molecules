import { MouseEventHandler, ReactElement } from 'react';
import ButtonStylesheet from './button.stylesheet';

export default interface ButtonProps {
    labelText: string;
    tooltipText?: string;
    id?: string;

    disabled?: boolean;
    hidden?: boolean;

    variant?: ButtonVariant;
    colorVariant?: ColorVariant;
    sizeVariant?: SizeVariant;

    isIconButton?: boolean; // can use either startIcon or endIcon (startIcon takes precedence)
    startIcon?: ReactElement; // Any react component that wraps an svg icon (MUI icons, font awesome icons, custom svg icons wrapped in a react component)
    endIcon?: ReactElement; 

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

    styles?: ButtonStylesheet; 
}

export type ButtonVariant = 'text' | 'contained' | 'outlined';

export type ColorVariant = 'primary' | 'secondary' | 'success' | 'error';

export type SizeVariant = 'small' | 'medium' | 'large';

export type HrefTarget = '_blank' | '_self' | '_parent' | 'top';

export type AutoSize = 'auto';