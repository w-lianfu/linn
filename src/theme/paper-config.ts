import Color from '@tool/color';

const PaperConfig = {
  defaultProps: {
    square: true,
    elevation: 0,
    component: 'section',
  },
  styleOverrides: {
    root: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,

      '& .MuiBox-root': {
        position: 'relative',
        display: 'flex',
        boxSizing: 'border-box',
        margin: 0,
        padding: 0,
      },
    },
  },
};

export default PaperConfig;
