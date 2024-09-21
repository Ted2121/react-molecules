import ButtonProps from "../../button/types/button-props.model";

export function getTextButton(labelText: string, tooltipText?: string, id?: string): ButtonProps {
    return {
        labelText: labelText,
        tooltipText: tooltipText,
        id: id,
        variant: 'text',
    }
}

export function getContainedLargeButton(labelText: string, tooltipText?: string, id?: string): ButtonProps {
    return {
        labelText: labelText,
        tooltipText: tooltipText,
        id: id,
        variant: 'contained',
        colorVariant: 'secondary',
        sizeVariant: 'large',
    }
}