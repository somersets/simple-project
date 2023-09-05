import { useTheme } from "styled-components";
import { IFontParams, TypographyType } from "../model/types";

const useFontParams = (type?: TypographyType): IFontParams => {
  const theme = useTheme();

  switch (type) {
    case "lg-title":
      return {
        fontSize: theme.fontSizes.largeTitle,
        lineHeight: 142,
      };
    case "h1":
      return {
        fontSize: theme.fontSizes.large,
        lineHeight: 40,
      };
    case "h2":
      return {
        fontSize: theme.fontSizes.semilarge,
        lineHeight: 32,
      };
    case "h3":
      return {
        fontSize: theme.fontSizes.formsHeading,
        lineHeight: 28,
      };
    case "h4":
      return {
        fontSize: theme.fontSizes.medium,
        lineHeight: 24,
      };
    case "body":
      return {
        fontSize: theme.fontSizes.base,
        lineHeight: 20,
      };
    case "semibody":
      return {
        fontSize: theme.fontSizes.semibase,
        lineHeight: 18,
      };
    case "caption":
      return {
        fontSize: theme.fontSizes.small,
        lineHeight: 16,
      };
    case "bold-caption":
      return {
        fontSize: theme.fontSizes.small,
        lineHeight: 16,
        fontWeight: 600,
      };
    case "semibold-caption":
      return {
        fontSize: theme.fontSizes.small,
        lineHeight: 16,
        fontWeight: 500,
      };
    case "caption2":
      return {
        fontSize: theme.fontSizes.mini,
        lineHeight: 14,
      };
    default:
      return {
        fontSize: theme.fontSizes.base,
        lineHeight: 20,
      };
  }
};

export default useFontParams;
