import { AutoSize } from "../../../button/types/button-props.model";

export default interface ElevatedAppbarStylesheet {
    class?: string;
    position?: string;
    top?: number;
    zIndex?: number;
    backgroundColor?: string;
    height?: number | AutoSize;
    padding?: string;
    hasSpacingBelow?: boolean;
    spacingBelow?: number;
    gap?: number;
}

