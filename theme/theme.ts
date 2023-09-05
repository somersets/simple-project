import { DefaultTheme } from "styled-components";

const deviceSize = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

const fontSizes = {
  mini: "10px",
  small: "12px",
  semibase: "14px",
  base: "16px",
  upperbase: "17px",
  medium: "20px",
  formsHeading: "22px",
  semilarge: "28px",
  large: "32px",
  largeTitle: "120px",
};

const colors = {
  white: "#FFFFFF",
  black: "#000000",
  primaryRoundButton: "#FFFFFF",
  transparent: "transparent",
  red: "#FF4458",
};

const margins = {
  mini: "2px",
  small: "4px",
  semibase: "6px",
  base: "8px",
  upperbase: "12px",
  medium: "16px",
  mediumLarge: "20px",
  semilarge: "24px",
  large: "32px",
  superLarge: "40px",
  extreme: "60px",
};

const roundCorners = {
  round: "50%",
  bubble: "0 100% 100%",
  small: "4px",
  medium: "8px",
  large: "16px",
  xlarge: "18px",
};

const transitions = {
  general: "all 0.2s ease-in-out",
};

const lightTheme: DefaultTheme = {
  deviceSize,
  colors,
  fontSizes,
  margins,
  roundCorners,
  transitions,
};

export default lightTheme;
