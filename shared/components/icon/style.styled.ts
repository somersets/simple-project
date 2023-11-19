import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CustomFontAwesomeIcon = styled(FontAwesomeIcon)`
  & > path {
    fill: ${({ color }) => color};
  }
`;

export { CustomFontAwesomeIcon };
