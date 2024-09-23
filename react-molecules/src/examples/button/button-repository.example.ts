import ButtonProps from '../../buttons/types/button-props.model';
import { ChangeEvent } from 'react';

// these functions are just examples - build the buttons you need using the exposed properties on ButtonProps
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

export function getUploadButton(
    labelText: string,
    handleUpload: (event: ChangeEvent<HTMLInputElement>) => void,
    uploadMultiple?: boolean): ButtonProps {
    return {
        labelText: labelText,
        isUploadButton: true,
        onUpload: handleUpload,
        uploadMultiple: uploadMultiple
    }
}


