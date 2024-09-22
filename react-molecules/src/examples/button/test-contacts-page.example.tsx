import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Buttons from './buttons.example';


export default function TestContactsPage() {
    return (
        <>
            <Container>
                <Box sx={{ my: 2 }}>
                    This is the contacts page :D
                </Box>
                <Buttons></Buttons>
            </Container>
        </>
    );
}
