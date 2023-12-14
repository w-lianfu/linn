import { createTheme } from '@mui/material/styles';

import Color from '@tool/color';
import PaletteConfig from './palette-config';
import TypographyConfig from './typography-config';
import PaperConfig from './paper-config';
import ButtonConfig from './button-config';

const Theme = createTheme({
  palette: PaletteConfig,
  typography: TypographyConfig,
  shape: { borderRadius: 0 },
  components: {
    MuiPaper: PaperConfig,
    MuiButton: ButtonConfig,
    MuiSpeedDial: {
      styleOverrides: {
        root: {
          position: 'fixed',
          bottom: '2.5rem',
          right: '1.5rem',
        },
        fab: {
          width: '5rem',
          height: '5rem',
          lineHeight: 1,
          color: Color.tomato(),
          backgroundColor: Color.grey(),

          '&:hover': { backgroundColor: Color.dim() },
        },
      },
    },
    MuiSpeedDialAction: {
      styleOverrides: {
        fab: {
          width: '4rem',
          height: '4rem',
          margin: '0.6rem',
          fontSize: '1.5rem',
          backgroundColor: Color.grey(),
        },
      },
    },
    MuiSpeedDialIcon: {
      styleOverrides: {
        root: { height: '2.6rem' },
        icon: { fontSize: '2.6rem' },
      },
    },
  },
});

export default Theme;
