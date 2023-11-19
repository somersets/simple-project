import styled, { DefaultTheme } from "styled-components";
import { ColorType } from "@/@types/styles";

interface ICollapsableButtonContainer {
  isFluid?: boolean;
  backgroundColor?: ColorType;
}

interface ICollapsableTextButton {
  color?: ColorType;
  $isActive?: boolean;
}

type ISelectAppearance = (
  theme: DefaultTheme,
  color?: ColorType,
  isActive?: boolean,
) => {
  color: string;
  textDecoration: string;
};

const selectAppearance: ISelectAppearance = ({ colors }, color, isActive) => {
  if (!isActive) {
    const clr = color ? colors[color] : colors.white;
    return {
      color: clr,
      textDecoration: "none",
    };
  }
  return {
    textDecoration: "underline",
    color: color ? colors[color] : colors.red,
  };
};

const ButtonContainer = styled.div<ICollapsableButtonContainer>`
  position: relative;
  width: 100%;
  border: none;
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor ? theme.colors[backgroundColor] : theme.colors.transparent};
  transition: ${({ theme }) => theme.transitions.general};
`;

const ButtonLink = styled.a<ICollapsableTextButton>`
  position: relative;
  width: 100%;
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.white};
  transition: ${({ theme }) => theme.transitions.general};
  cursor: pointer;
  word-break: keep-all;
  white-space: nowrap;
  &:hover {
    color: ${({ theme }) => theme.colors.red};
    & + div {
      visibility: visible;
      opacity: 1;
    }
  }
`;

const UnderlineButtonLink = styled(ButtonLink)`
  text-decoration-color: ${({ theme }) => theme.colors.transparent};
  color: ${({ theme, color, $isActive }) =>
    selectAppearance(theme, color, $isActive).color};
  text-decoration: ${({ theme, color, $isActive }) =>
    selectAppearance(theme, color, $isActive).textDecoration};

  &:hover {
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.colors.red};
  }
`;

const ButtonDropdownContainer = styled.div`
  top: 30px;
  width: auto;
  position: absolute;
  visibility: hidden;
  opacity: 0;
  z-index: 9999;
  transition: ${({ theme }) => theme.transitions.general};
  &:hover {
    visibility: visible;
    opacity: 1;
  }
`;

const ButtonDropdown = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
`;

const ButtonDropdownItem = styled.div``;

export {
  ButtonDropdown,
  ButtonLink,
  UnderlineButtonLink,
  ButtonContainer,
  ButtonDropdownContainer,
  ButtonDropdownItem,
};
