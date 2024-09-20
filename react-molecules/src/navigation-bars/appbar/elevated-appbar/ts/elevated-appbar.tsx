import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';

interface Props {
  children?: React.ReactElement<any>;
  pinned?: React.ReactElement<any>;
}

function ElevationScroll(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return children
    ? React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    })
    : null;
}


export default function ElevatedAppBar(props: Props) {
  const pinned = (props?.pinned);

  return (
    <>
      {pinned}
      <ElevationScroll {...props}>
        <AppBar sx={{
          position: 'sticky',
          top: 0,
          zIndex: 5000,
        }}>
          <Toolbar>
            <Typography>test1</Typography>
            <Typography>test1</Typography>
            <Typography>test1</Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </>
  );
}
