import Color from '@tool/color';

const IconButtonConfig = {
  styleOverrides: {
    root: {},
    colorPrimary: {
      backgroundColor: Color.primary(0.1),

      '&:hover': {
        backgroundColor: Color.primary(0.2),
      },
    },
    colorSecondary: {
      backgroundColor: Color.secondary(0.1),

      '&:hover': {
        backgroundColor: Color.secondary(0.2),
      },
    },
    colorSuccess: {
      backgroundColor: Color.success(0.1),

      '&:hover': {
        backgroundColor: Color.success(0.2),
      },
    },
    colorInfo: {
      backgroundColor: Color.info(0.1),

      '&:hover': {
        backgroundColor: Color.info(0.2),
      },
    },
    colorWarning: {
      backgroundColor: Color.warning(0.1),

      '&:hover': {
        backgroundColor: Color.warning(0.2),
      },
    },
    colorError: {
      backgroundColor: Color.error(0.1),

      '&:hover': {
        backgroundColor: Color.error(0.2),
      },
    },
  },
};

export default IconButtonConfig;
