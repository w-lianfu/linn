import Color from '@tool/color';

const ButtonConfig = {
  variants: [
    {
      props: {
        variant: 'outlined',
        color: 'black',
      },
      style: { color: Color.white() },
    },
    {
      props: {
        variant: 'outlined',
        color: 'dark',
      },
      style: { color: Color.white() },
    },
    {
      props: {
        variant: 'outlined',
        color: 'grey',
      },
      style: { color: Color.white() },
    },
    {
      props: {
        variant: 'outlined',
        color: 'dim',
      },
      style: { color: Color.white() },
    },
    {
      props: { variant: 'dashed' },
      style: {
        color: Color.primary(),
        border: `0.1rem dashed ${Color.primary()}`,
        '&:hover': { backgroundColor: Color.primary(0.08) },
      },
    },
    {
      props: {
        variant: 'dashed',
        color: 'primary',
      },
      style: {
        color: Color.primary(),
        border: `0.1rem dashed ${Color.primary()}`,
        '&:hover': { backgroundColor: Color.primary(0.08) },
      },
    },
    {
      props: {
        variant: 'dashed',
        color: 'secondary',
      },
      style: {
        color: Color.secondary(),
        border: `0.1rem dashed ${Color.secondary()}`,
        '&:hover': { backgroundColor: Color.secondary(0.08) },
      },
    },
    {
      props: {
        variant: 'dashed',
        color: 'error',
      },
      style: {
        color: Color.error(),
        border: `0.1rem dashed ${Color.error()}`,
        '&:hover': { backgroundColor: Color.error(0.08) },
      },
    },
    {
      props: {
        variant: 'dashed',
        color: 'warning',
      },
      style: {
        color: Color.warning(),
        border: `0.1rem dashed ${Color.warning()}`,
        '&:hover': { backgroundColor: Color.warning(0.08) },
      },
    },
    {
      props: {
        variant: 'dashed',
        color: 'info',
      },
      style: {
        color: Color.info(),
        border: `0.1rem dashed ${Color.info()}`,
        '&:hover': { backgroundColor: Color.info(0.08) },
      },
    },
    {
      props: {
        variant: 'dashed',
        color: 'success',
      },
      style: {
        color: Color.success(),
        border: `0.1rem dashed ${Color.success()}`,
        '&:hover': { backgroundColor: Color.success(0.08) },
      },
    },
    {
      props: {
        variant: 'dashed',
        color: 'tomato',
      },
      style: {
        color: Color.tomato(),
        border: `0.1rem dashed ${Color.tomato()}`,
        '&:hover': { backgroundColor: Color.tomato(0.08) },
      },
    },
    {
      props: {
        variant: 'dashed',
        color: 'oliver',
      },
      style: {
        color: Color.oliver(),
        border: `0.1rem dashed ${Color.oliver()}`,
        '&:hover': { backgroundColor: Color.oliver(0.08) },
      },
    },
    {
      props: {
        variant: 'dashed',
        color: 'magenta',
      },
      style: {
        color: Color.magenta(),
        border: `0.1rem dashed ${Color.magenta()}`,
        '&:hover': { backgroundColor: Color.magenta(0.08) },
      },
    },
    {
      props: {
        variant: 'dashed',
        color: 'purple',
      },
      style: {
        color: Color.purple(),
        border: `0.1rem dashed ${Color.purple()}`,
        '&:hover': { backgroundColor: Color.purple(0.08) },
      },
    },
    {
      props: {
        variant: 'dashed',
        color: 'wheat',
      },
      style: {
        color: Color.wheat(),
        border: `0.1rem dashed ${Color.wheat()}`,
        '&:hover': { backgroundColor: Color.wheat(0.08) },
      },
    },
    {
      props: {
        variant: 'dashed',
        color: 'black',
      },
      style: {
        color: Color.white(),
        border: `0.1rem dashed ${Color.black()}`,
        '&:hover': { backgroundColor: Color.black(0.08) },
      },
    },
    {
      props: {
        variant: 'dashed',
        color: 'dark',
      },
      style: {
        color: Color.white(),
        border: `0.1rem dashed ${Color.dark()}`,
        '&:hover': { backgroundColor: Color.dark(0.08) },
      },
    },
    {
      props: {
        variant: 'dashed',
        color: 'grey',
      },
      style: {
        color: Color.white(),
        border: `0.1rem dashed ${Color.grey()}`,
        '&:hover': { backgroundColor: Color.grey(0.08) },
      },
    },
    {
      props: {
        variant: 'dashed',
        color: 'dim',
      },
      style: {
        color: Color.white(),
        border: `0.1rem dashed ${Color.dim()}`,
        '&:hover': { backgroundColor: Color.dim(0.08) },
      },
    },
    {
      props: {
        variant: 'dashed',
        color: 'white',
      },
      style: {
        color: Color.white(),
        border: `0.1rem dashed ${Color.white()}`,
        '&:hover': { backgroundColor: Color.white(0.08) },
      },
    },
  ],
  styleOverrides: {
    textPrimary: {
      backgroundColor: Color.primary(0.08),
      '&:hover': { backgroundColor: Color.primary(0.16) },
    },
    textSecondary: {
      backgroundColor: Color.secondary(0.08),
      '&:hover': { backgroundColor: Color.secondary(0.16) },
    },
    textError: {
      backgroundColor: Color.error(0.08),
      '&:hover': { backgroundColor: Color.error(0.16) },
    },
    textWarning: {
      backgroundColor: Color.warning(0.08),
      '&:hover': { backgroundColor: Color.warning(0.16) },
    },
    textInfo: {
      backgroundColor: Color.info(0.08),
      '&:hover': { backgroundColor: Color.info(0.16) },
    },
    textSuccess: {
      backgroundColor: Color.success(0.08),
      '&:hover': { backgroundColor: Color.success(0.16) },
    },
    textTomato: {
      backgroundColor: Color.tomato(0.08),
      '&:hover': { backgroundColor: Color.tomato(0.16) },
    },
    textOliver: {
      backgroundColor: Color.oliver(0.08),
      '&:hover': { backgroundColor: Color.oliver(0.16) },
    },
    textMagenta: {
      backgroundColor: Color.magenta(0.08),
      '&:hover': { backgroundColor: Color.magenta(0.16) },
    },
    textPurple: {
      backgroundColor: Color.purple(0.08),
      '&:hover': { backgroundColor: Color.purple(0.16) },
    },
    textWheat: {
      backgroundColor: Color.wheat(0.08),
      '&:hover': { backgroundColor: Color.wheat(0.16) },
    },
    textBlack: {
      color: Color.white(1),
      backgroundColor: Color.black(0.08),
      '&:hover': { backgroundColor: Color.black(0.16) },
    },
    textDark: {
      color: Color.white(1),
      backgroundColor: Color.dark(0.08),
      '&:hover': { backgroundColor: Color.dark(0.16) },
    },
    textGrey: {
      color: Color.white(1),
      backgroundColor: Color.grey(0.08),
      '&:hover': { backgroundColor: Color.grey(0.16) },
    },
    textDim: {
      color: Color.white(1),
      backgroundColor: Color.dim(0.08),
      '&:hover': { backgroundColor: Color.dim(0.16) },
    },
    textWhite: {
      color: Color.white(1),
      backgroundColor: Color.white(0.08),
      '&:hover': { backgroundColor: Color.white(0.16) },
    },
    root: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxSizing: 'border-box',
      margin: 0,
      padding: '0 1.6rem',
      minHeight: '3rem',
      minWidth: '5rem',

      '&.Mui-disabled': { backgroundColor: Color.dim(0.5) },
    },
  },
};

export default ButtonConfig;
