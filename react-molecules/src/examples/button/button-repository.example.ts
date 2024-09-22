import { log } from 'console';
import ButtonProps from '../../buttons/types/button-props.model';

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
        tooltipPlacement: 'bottom',
        id: id,
        variant: 'contained',
        colorVariant: 'secondary',
        sizeVariant: 'large',
    }
}

export function getInternalLinkButton(labelText: string, tooltipText?: string, id?: string): ButtonProps {
    return {
        labelText: labelText,
        id: id,
        variant: 'contained',
        href: '/test-contacts'
    }
}

export function getInPageLinkButton(labelText: string, tooltipText?: string, id?: string): ButtonProps {
    return {
        labelText: labelText,
        id: id,
        variant: 'contained',
        href: '#test'
    }
}

export function getUploadButton(labelText: string): ButtonProps {
    // console.log("test 1")
    return {
        labelText: labelText,
        isUploadButton: true,
        onUpload: onUpload
    }
}

function onUpload() {
    console.log("test")
}