import { MouseEventHandler, ReactElement } from 'react';
import ButtonStylesheet from './button.stylesheet';
import { ButtonVariant, ColorVariant, HrefTarget, SizeVariant, TooltipPlacement } from '../../shared/types/component-props-types.model';

export default interface ButtonProps {
    // button selection props
    isIconButton?: boolean; // can use either startIcon or endIcon (startIcon takes precedence)
    isUploadButton?: boolean;
    isLoadingButton?: boolean;

    
    // core props
    id?: string;
    disabled?: boolean;
    hidden?: boolean;
    colorVariant?: ColorVariant;
    sizeVariant?: SizeVariant;
    startIcon?: ReactElement; // Any react component that wraps an svg icon (MUI icons, font awesome icons, custom svg icons wrapped in a react component)
    endIcon?: ReactElement; 
    onClick?: MouseEventHandler<HTMLButtonElement>;
    styles?: ButtonStylesheet; 
    tooltipText?: string;
    tooltipPlacement?: TooltipPlacement;
    
    //navigation
    href?: string;
    target?: HrefTarget;
    removeNoreferrer?: boolean;
    
    //standard, upload, loading, popover buttons
    variant?: ButtonVariant;
    labelText: string;
    
    //popover button
    popover?: Array<ButtonProps>;

    // upload button
    onUpload?: Function;
    
    // loading button
    loadingLabel?: string;
    customLoadingIndicator?: ReactElement;
    doneLoadingLabel?: string;
    doneLoadingIcon?: ReactElement;



}


