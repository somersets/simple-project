import { ReactNode } from "react";
import { ColorType } from "@/@types/styles";

export interface ITypographyStyled extends ITypography {
  type?: TypographyType;
  color?: ColorType;
}

export type TypographyType =
  | "lg-title"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "body"
  | "caption"
  | "bold-caption"
  | "caption2"
  | "semibody"
  | "semibold-caption";

export interface IFontParams {
  fontSize: string;
  lineHeight: number;
  fontWeight?: number;
}

export interface ITypography {
  align?: string;
  className?: string;
  type?: TypographyType;
  isTranslate?: boolean;
  children: ReactNode;
  color?: ColorType;
}
