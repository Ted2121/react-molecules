import { Size } from "../../../shared/types/stylesheet-types.model";

export default interface ElevatedAppbarStylesheet {
    className?: string;
    position?: string;
    top?: Size;
    zIndex?: number;
    backgroundColor?: string;
    height?: Size;
    padding?: Size;
    hasSpacingBelow?: boolean;
    spacingBelow?: Size;
    gap?: Size;
}

