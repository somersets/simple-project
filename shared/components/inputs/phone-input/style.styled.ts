import styled from "styled-components";
import { Input } from "@/shared/components/inputs";

interface IPhoneInputStyled {
  $isError?: boolean;
}

const PhoneInput = styled(Input)<IPhoneInputStyled>`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.base};
  transition: ${({ theme }) => theme.transitions.general};
  background-color: ${({ theme, $isError }) =>
    $isError ? theme.colors.red1 : theme.colors.black};
  box-sizing: border-box;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  .PhoneInputCountry {
    div {
      box-shadow: none;
      background: none;
    }
  }

  &:focus-within {
  }

  input {
    transition: ${({ theme }) => theme.transitions.general};
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors.white};
    outline: none;
    border-left: solid 1px ${({ theme }) => theme.colors.white};
    height: 100%;
    padding-left: 10px;
  }
`;

const Container = styled.div`
  position: relative;
  display: flex;
`;

const ErrorMessage = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.mini};
  width: max-content;
  left: ${({ theme }) => theme.margins.medium};
  top: 50px;
  color: ${({ theme }) => theme.colors.red0};
`;

export { Container, ErrorMessage, PhoneInput };
