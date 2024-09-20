// not tested yet

import * as React from 'react';
import { Box } from '@mui/material';

export default function CustomSvgLoader() {
  return (
    <Box
      component="svg"
      viewBox="0 0 50 50"
      sx={{
        width: '24px',
        height: '24px',
        animation: 'rotate 2s linear infinite',
        '@keyframes rotate': {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
      }}
    >
      <circle
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeDasharray="100, 100"
        strokeDashoffset="0"
        style={{
          animation: 'dash 1.5s ease-in-out infinite',
        }}
      />
      <style>{`
        @keyframes dash {
          0% {
            stroke-dasharray: 1, 150;
            stroke-dashoffset: 0;
          }
          50% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -35;
          }
          100% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -124;
          }
        }
      `}</style>
    </Box>
  );
}