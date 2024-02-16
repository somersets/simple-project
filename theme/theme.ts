import { DefaultTheme } from "styled-components";

const MAIN_GRADIENT =
  "115.45% 123.41% at 106.39% 31.44%, #EDE3EA 0%, #F6FBFF 51.48%, #E7E9FF 100%";

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
  red0: "#EB5757",
  red1: "#FCE6E6",
  blue: "#6A82FB",
  bgColor1: "#111418",

  main: "#5C44DD",
  mainDark: "#2F1B9A",
  lightPurple0: "#EEECFE",
  lightPurple1: "#F5F5FF",
  lightPurple2: "#FBFBFF",
  red2: "#FEF7F7",
  pink: "#E86078",
  pink2: "#FFEBF1",
  pink3: "#DE7EFF",
  pink4: "#FDB9EB",
  green0: "#6FCF97",
  green1: "#B7E7CB",
  green2: "#15B89B",
  green3: "#E7FBF8",
  grey2: "#4F4F4F",
  grey3: "#828282",
  grey4: "#BDBDBD",
  grey5: "#E6E6E6",
  grey6: "#F6F6F6",
  grey7: "#F2F2F2",
  yellow: "#F0BD09",
  yellow2: "#FFF6D8",
  bgMain: `radial-gradient(${MAIN_GRADIENT})`,
  bgMainMoz: `-moz-radial-gradient(${MAIN_GRADIENT})`,
  bgMainWebkit: `-webkit-radial-gradient(${MAIN_GRADIENT})`,
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
