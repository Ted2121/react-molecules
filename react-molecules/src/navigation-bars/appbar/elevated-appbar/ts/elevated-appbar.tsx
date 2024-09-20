import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import ElevatedAppbarStylesheet from './types/elevated-appbar-stylesheet.model';
import ButtonConfig from './types/button-config.model';

interface Props {
  children?: React.ReactElement<any>;
  pinned?: React.ReactElement<any>;
  styles?: ElevatedAppbarStylesheet;
  buttons?: Array<ButtonConfig>
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
  const { pinned, styles } = props;

  return (
    <>
      {pinned}
      <ElevationScroll {...props}>
        <AppBar
          className={styles?.appbar?.class ?? ''}
          sx={{
            position: styles?.appbar?.position ?? 'sticky',
            top: styles?.appbar?.top ?? 0,
            zIndex: styles?.appbar?.zIndex ?? 5000,
            backgroundColor: styles?.appbar?.backgroundColor ?? 'orange'
          }}>
          <Toolbar sx={{
            height: styles?.appbar?.height ?? undefined,
            padding: styles?.appbar?.padding + ' !important' ?? undefined,
          }}>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </>
  );
}
