import { MouseEventHandler, ReactElement } from 'react';
import ButtonStylesheet from './button.stylesheet';
import { ButtonVariant, ColorVariant, HrefTarget, SizeVariant, TooltipPlacement } from '../../shared/types/component-props-types.model';
import { NavigateFunction } from 'react-router-dom';

export default interface ButtonProps {
    //#region button props
    // button selection
    isIconButton?: boolean; // can use either startIcon or endIcon (startIcon takes precedence)
    isUploadButton?: boolean;
    isLoadingButton?: boolean;
    
    // core
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
    
    //standard, upload, loading, popover
    variant?: ButtonVariant;
    labelText: string;
    
    //popover
    popover?: Array<ButtonProps>;

    // upload
    onUpload?: Function;
    
    // loading
    loadingLabel?: string;
    customLoadingIndicator?: ReactElement;
    doneLoadingLabel?: string;
    doneLoadingIcon?: ReactElement;
}

//#region button type building interfaces
export interface CoreButtonProps {
    id?: string;
    disabled?: boolean;
    hidden?: boolean;
    colorVariant?: ColorVariant;
    sizeVariant?: SizeVariant;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    styles?: ButtonStylesheet;
}

export interface NavigationProps {
    href?: string;
    target?: HrefTarget;
    removeNoreferrer?: boolean;
}

export interface LoadingProps {
    loadingLabel?: string;
    customLoadingIndicator?: ReactElement;
    doneLoadingLabel?: string;
    doneLoadingIcon?: ReactElement;
}

export interface UploadProps {
    onUpload?: Function;
}

export interface PopoverProps {
    popover?: Array<ButtonProps>;
}

export interface AllExcludingIconProps {
    variant?: ButtonVariant;
    labelText?: string;
}

export interface TooltipProps {
    tooltipText?: string;
    tooltipPlacement?: TooltipPlacement;
}

export interface ButtonSelectionProps {
    isIconButton?: boolean;
    isUploadButton?: boolean;
    isLoadingButton?: boolean;
}
//#endregion

type BaseButtonProps = CoreButtonProps & NavigationProps & {
    navigate: NavigateFunction;
};

//#region button types
export type StandardButtonProps = BaseButtonProps & AllExcludingIconProps;

export type LoadingButtonProps = BaseButtonProps & LoadingProps & AllExcludingIconProps;

export type UploadButtonProps = BaseButtonProps & UploadProps & AllExcludingIconProps & {
    isIconButton?: boolean;
};

export type IconButtonProps = BaseButtonProps;
//#endregion
