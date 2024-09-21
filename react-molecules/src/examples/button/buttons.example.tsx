import * as React from 'react';
import { Box } from '@mui/material';
import ButtonComponent from '../../button/button.component';
import { getContainedLargeButton, getInPageLinkButton, getInternalLinkButton, getTextButton } from './button-resolver.example';
import ButtonProps from '../../button/types/button-props.model';
import HomeIcon from '@mui/icons-material/Home';
import LaunchIcon from '@mui/icons-material/Launch';

export default function Buttons() {

    const textButtonProps = getTextButton('Text');
    const containedButtonProps = getContainedLargeButton('contained');
    // showcasing creating the button config locally
    const externalLinkButton : ButtonProps = {
        labelText: 'external',
        variant: 'outlined',
        href: 'https://github.com',
        endIcon: <LaunchIcon/>
    }
    const inPageLinkButton = getInPageLinkButton('in page');
    const internalLinkButton = getInternalLinkButton('internal');
    const homeButton : ButtonProps = {
        labelText: 'home',
        variant: 'contained',
        colorVariant: 'secondary',
        href: '/',
        startIcon: <HomeIcon/>
    }

    return (
        <Box sx={{ display: 'flex', gap:2, padding: '10px' }}>
            <ButtonComponent {...textButtonProps} />
            <ButtonComponent {...containedButtonProps} />
            <ButtonComponent {...externalLinkButton} />
            <ButtonComponent {...inPageLinkButton} />
            <ButtonComponent {...internalLinkButton} />
            <ButtonComponent {...homeButton} />
        </Box>
    )
}