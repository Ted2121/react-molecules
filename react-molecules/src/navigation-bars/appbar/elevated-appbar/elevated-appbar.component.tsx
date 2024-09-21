import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import AppBarProps from '../types/appbar-props.model';

function ElevationScroll(props: AppBarProps) {
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


export default function ElevatedAppBar(props: AppBarProps) {
  const { pinned, styles } = props;

  return (
    <>
      {pinned}
      <ElevationScroll {...props}>
        <AppBar
          className={styles?.class ?? ''}
          sx={{
            position: styles?.position ?? 'sticky',
            top: styles?.top ?? 0,
            zIndex: styles?.zIndex ?? 5000,
            backgroundColor: styles?.backgroundColor ?? 'purple'
          }}>
          <Toolbar sx={{
            height: styles?.height ?? undefined,
            padding: styles?.padding ? styles?.padding + ' !important' : undefined,
            gap: styles?.gap ?? undefined
          }}>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      {/* this Toolbar component is used to make sure the appbar doesn't overlap the content */}
      {styles?.hasSpacingBelow && <Toolbar
        sx={{
          height: styles?.spacingBelow ?? (styles?.height ?? undefined)
        }} />}
    </>
  );
}
