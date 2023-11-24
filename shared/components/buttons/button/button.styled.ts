import styled, { DefaultTheme } from "styled-components";
import { ButtonColorType } from "./index";

interface IButtonStyled {
  $isFluid?: boolean;
  isLoading?: boolean;
  color?: ButtonColorType;
}

type SelectColor = (
  defaultTheme: DefaultTheme,
  color?: ButtonColorType,
) => {
  color: string;
  backgroundColor: string;
};

const selectColor: SelectColor = ({ colors }, color) => {
  switch (color) {
    default: {
      return {
        color: colors.black,
        backgroundColor: colors.white,
      };
    }
  }
};

const Button = styled.button<IButtonStyled>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 5px 10px;
  position: relative;
  width: 100%;
  max-width: ${({ $isFluid }) => ($isFluid ? "100%" : "300px")};
  min-width: 120px;
  border: none;
  border-radius: ${({ theme }) => theme.roundCorners.xlarge};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  background-color: ${({ theme, color }) =>
    selectColor(theme, color).backgroundColor};
  color: ${({ theme, color }) => selectColor(theme, color).color};
  transition: ${({ theme }) => theme.transitions.general};
  cursor: pointer;
`;

export { Button };
