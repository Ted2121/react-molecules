import { Size, TextTransform } from "../../shared/types/stylesheet-types.model";

export default interface ButtonStylesheet {
    className?: string;
    minWidth?: Size;
    maxHeight?: Size;
    fontSize?: Size;
    aspectRatio?: number;
    textTransform?: TextTransform;
}
