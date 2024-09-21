import * as React from 'react';
import { Box } from "@mui/material";
import ButtonComponent from '../../button/button.component';
import { getContainedLargeButton, getTextButton } from './button-resolver.example';

export default function Buttons() {
    const textButtonProps = getTextButton("Text");
    const containedButtonProps = getContainedLargeButton("Contained");

    return (
        <Box sx={{ display: "flex", gap:2, padding: "10px" }}>
            <ButtonComponent {...textButtonProps} />
            <ButtonComponent {...containedButtonProps} />
        </Box>
    )
}