import * as React from 'react';
import { Box } from '@mui/material';
import ButtonComponent from '../../button/button.component';
import { getContainedLargeButton, getTextButton } from './button-resolver.example';
import ButtonProps from '../../button/types/button-props.model';

export default function Buttons() {

    const textButtonProps = getTextButton('Text');
    const containedButtonProps = getContainedLargeButton('Contained');
    // showcasing creating the button config locally
    const externalLinkButton : ButtonProps = {
        labelText: 'external',
        variant: 'outlined',
        href: 'https://github.com',
    }

    return (
        <Box sx={{ display: 'flex', gap:2, padding: '10px' }}>
            <ButtonComponent {...textButtonProps} />
            <ButtonComponent {...containedButtonProps} />
            <ButtonComponent {...externalLinkButton} />
        </Box>
    )
}