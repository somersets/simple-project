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
      red0: string;
      red1: string;
      blue: string;
      bgColor1: string;

      main: string;
      mainDark: string;
      lightPurple0: string;
      lightPurple1: string;
      lightPurple2: string;
      red2: string;
      pink: string;
      pink2: string;
      pink3: string;
      pink4: string;
      green0: string;
      green1: string;
      green2: string;
      green3: string;
      grey2: string;
      grey3: string;
      grey4: string;
      grey5: string;
      grey6: string;
      grey7: string;
      yellow: string;
      yellow2: string;
      bgMain: string;
      bgMainMoz: string;
      bgMainWebkit: string;
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
