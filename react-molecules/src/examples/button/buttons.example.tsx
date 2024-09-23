import * as React from 'react';
import { Box } from '@mui/material';
import ButtonComponent from '../../buttons/button.component';
import { getClickActionButton, getContainedLargeButton, getInPageLinkButton, getInternalLinkButton, getTextButton, getUploadButton } from './button-repository.example';
import ButtonProps from '../../buttons/types/button-props.model';
import HomeIcon from '@mui/icons-material/Home';
import LaunchIcon from '@mui/icons-material/Launch';
import { buttonStyles } from './button-stylesheet.example';

export default function Buttons() {
    const textButtonProps = getTextButton('Text');
    const containedButtonProps = getContainedLargeButton('contained');
    // showcasing creating the button config locally
    const externalLinkButton: ButtonProps = {
        labelText: 'external',
        variant: 'outlined',
        href: 'https://github.com',
        endIcon: <LaunchIcon />
    }
    const inPageLinkButton = getInPageLinkButton('in page');
    const internalLinkButton = getInternalLinkButton('internal');
    const homeButton: ButtonProps = {
        labelText: 'home',
        variant: 'contained',
        colorVariant: 'secondary',
        href: '/',
        endIcon: <HomeIcon />, //fontSize must be applied here with sx to modify icon size
        styles: buttonStyles,
        tooltipText: 'Home sweet home',
        tooltipPlacement: 'right',
        isIconButton: true,
    }
    const uploadButton = getUploadButton('Upload', handleFileUpload, true);

    function handleFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
        const files = event.target.files;
        if (files) {
            Array.from(files).forEach((file) => {
                // Handle each file here, e.g., upload it or display its name
                console.log(file.name);
            });
        }
    }

    const clickActionButton = getClickActionButton('Action', handleClick)

    function handleClick() {
        alert('Button was clicked');
    }

    return (
        <Box sx={{ display: 'flex', gap: 2, padding: '10px', height: '100px' }}>
            <ButtonComponent {...homeButton} />
            <ButtonComponent {...textButtonProps} />
            <ButtonComponent {...containedButtonProps} />
            <ButtonComponent {...externalLinkButton} />
            <ButtonComponent {...inPageLinkButton} />
            <ButtonComponent {...internalLinkButton} />
            <ButtonComponent {...uploadButton} />
            <ButtonComponent {...clickActionButton} />
        </Box>
    )
}