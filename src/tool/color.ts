const Color = {
  primary: (opacity = 1) => `rgba(247, 46, 150, ${opacity})`,
  secondary: (opacity = 1) => `rgba(41, 121, 255, ${opacity})`,
  success: (opacity = 1) => `rgba(56, 142, 60, ${opacity})`,
  info: (opacity = 1) => `rgba(132, 112, 255, ${opacity})`,
  warning: (opacity = 1) => `rgba(255, 165, 0, ${opacity})`,
  error: (opacity = 1) => `rgba(255, 23, 68, ${opacity})`,
  oliver: (opacity = 1) => `rgba(179, 238, 58, ${opacity})`,
  green: (opacity = 1) => `rgba(78, 238, 148, ${opacity})`,
  tomato: (opacity = 1) => `rgba(255, 99, 71, ${opacity})`,
  purple: (opacity = 1) => `rgba(101, 31, 255, ${opacity})`,
  wheat: (opacity = 1) => `rgba(238, 216, 174, ${opacity})`,
  magenta: (opacity = 1) => `rgba(238, 0, 238, ${opacity})`,
  black: (opacity = 1) => `rgba(5, 5, 5, ${opacity})`,
  dark: (opacity = 1) => `rgba(33, 33, 33, ${opacity})`,
  grey: (opacity = 1) => `rgba(51, 51, 51, ${opacity})`,
  dim: (opacity = 1) => `rgba(97, 97, 97, ${opacity})`,
  white: (opacity = 1) => `rgba(250, 250, 250, ${opacity})`,
};

export default Color;
