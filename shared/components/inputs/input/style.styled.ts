import styled from "styled-components";
import { IInputStyle } from "./model";
import { Field } from "formik";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  color: ${({ theme }) => theme.colors.white};
  padding: 10px 5px;
`;

const Input = styled(Field)<IInputStyle>`
  background: ${({ theme, $isError }) =>
    $isError ? theme.colors.red1 : "#000"};
  width: 100%;
  border: 0;
  color: ${({ theme }) => theme.colors.white};
  display: block;
  border-radius: ${({ theme }) => theme.roundCorners.medium};
  font-size: ${({ theme }) => theme.fontSizes.base};
  padding: 16px 16px;
  appearance: none;
`;

const RightIconContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 55px;
  z-index: 99;
`;

const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.red0};
  padding: 10px 5px 0 5px;
`;

export { Container, Input, ErrorMessage, Label, RightIconContainer };
