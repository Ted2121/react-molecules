import { MouseEventHandler, ReactElement } from 'react';
import ButtonStylesheet from './button.stylesheet';
import { ButtonVariant, ColorVariant, HrefTarget, SizeVariant, TooltipPlacement } from '../../shared/types/component-props-types.model';

export default interface ButtonProps {
    labelText: string;
    id?: string;

    tooltipText?: string;
    tooltipPlacement?: TooltipPlacement;

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
