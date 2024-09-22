import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Buttons from '../buttons/buttons.example';


export default function TestPage() {
  return (
    <>
      <Container>
        <Buttons></Buttons>
        <Box sx={{ my: 2 }}>
          {[...new Array(28)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
            )
            .join('\n')}
        </Box>
        <Box id='test' sx={{
          width: '100%',
          padding: '16px',
          backgroundColor: 'yellow'
        }}>
          Id navigation test
        </Box>
      </Container>
    </>
  );
}
