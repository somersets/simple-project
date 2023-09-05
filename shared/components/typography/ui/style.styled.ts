import styled from "styled-components";
import { ITypographyStyled } from "../model/types";
import useFontParams from "../utils/useFontParams";

const Typography = styled.div<ITypographyStyled>`
  text-align: ${({ align }) => align || "inherit"};
  overflow-wrap: break-word;
  display: inline-block;
  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.white};
  font-size: ${({ type }) => useFontParams(type).fontSize};
  font-weight: ${({ type }) => useFontParams(type).fontWeight};
  line-height: ${({ type }) => `${useFontParams(type).lineHeight}px`};
`;

export { Typography };
