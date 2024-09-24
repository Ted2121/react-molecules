import { AlignSelf, Size, TextTransform } from "../../shared/types/stylesheet-types.model";

export default interface ButtonStylesheet {
    className?: string;
    minWidth?: Size;
    minHeight?: Size;
    maxWidth?: Size;
    maxHeight?: Size;
    height?: Size;
    width?: Size;
    fontSize?: Size;
    aspectRatio?: number;
    textTransform?: TextTransform;
    alignSelf?: AlignSelf;
    hoverBackgroundColor: string;
}
