import Color from '@tool/color';

const PaletteConfig = {
  mode: 'dark',
  common: {
    black: Color.black(),
    white: Color.white(),
  },
  primary: {
    main: Color.primary(1),
    dark: Color.primary(0.85),
  },
  secondary: {
    main: Color.secondary(1),
    dark: Color.secondary(0.85),
  },
  error: {
    main: Color.error(1),
    dark: Color.error(0.85),
  },
  warning: {
    main: Color.warning(1),
    dark: Color.warning(0.85),
  },
  info: {
    main: Color.info(1),
    dark: Color.info(0.85),
  },
  success: {
    main: Color.success(1),
    dark: Color.success(0.85),
  },
  text: {
    primary: Color.white(1),
    secondary: Color.white(0.85),
    disabled: Color.white(0.7),
  },
  tomato: {
    main: Color.tomato(1),
    dark: Color.tomato(0.85),
  },
  oliver: {
    main: Color.oliver(1),
    dark: Color.oliver(0.85),
    contrastText: Color.black(1),
  },
  purple: {
    main: Color.purple(1),
    dark: Color.purple(0.85),
  },
  magenta: {
    main: Color.magenta(1),
    dark: Color.magenta(0.85),
  },
  wheat: {
    main: Color.wheat(1),
    dark: Color.wheat(0.85),
    contrastText: Color.black(1),
  },
  black: {
    main: Color.black(1),
    dark: Color.black(0.85),
  },
  dark: {
    main: Color.dark(1),
    dark: Color.dark(0.85),
  },
  grey: {
    main: Color.grey(1),
    dark: Color.grey(0.85),
  },
  dim: {
    main: Color.dim(1),
    dark: Color.dim(0.85),
  },
  white: {
    main: Color.white(1),
    dark: Color.white(0.85),
    contrastText: Color.black(1),
  },
  background: {
    paper: Color.dark(),
    default: Color.dark(),
  },
  action: { disabled: Color.white(0.35) },
};

export default PaletteConfig;
