// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    deviceSize: {
      mobileS: string;
      mobileM: string;
      mobileL: string;
      tablet: string;
      laptop: string;
      laptopL: string;
      desktop: string;
    };
    fontSizes: {
      mini: string;
      small: string;
      semibase: string;
      base: string;
      upperbase: string;
      medium: string;
      formsHeading: string;
      semilarge: string;
      large: string;
      largeTitle: string;
    };
    colors: {
      white: string;
      black: string;
      primaryRoundButton: string;
      transparent: string;
      red: string;
    };
    margins: {
      mini: string;
      small: string;
      semibase: string;
      base: string;
      upperbase: string;
      medium: string;
      mediumLarge: string;
      semilarge: string;
      large: string;
      superLarge: string;
      extreme: string;
    };
    roundCorners: {
      round: string;
      bubble: string;
      small: string;
      medium: string;
      large: string;
      xlarge: string;
    };
    transitions: {
      general: string;
    };
  }
}
