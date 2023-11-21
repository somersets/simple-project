import styled from "styled-components";
import { IInputStyle } from "./model";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  color: ${({ theme }) => theme.colors.white};
  padding: 10px 5px;
`;

const Input = styled.input<IInputStyle>`
  background: ${({ theme, $isError }) =>
    $isError ? theme.colors.red1 : "#000"};
  width: 100%;
  border: 0;
  color: ${({ theme }) => theme.colors.white};
  display: block;
  border-radius: ${({ theme }) => theme.roundCorners.medium};
  font-family: var(--font-size--body-1-regular, 1rem);
  font-size: var(--font-size--body-1-regular, 1rem);
  font-weight: var(--font-weight--body-1-regular, 400);
  -webkit-letter-spacing: var(--letter-spacing--body-1-regular, 0);
  -moz-letter-spacing: var(--letter-spacing--body-1-regular, 0);
  -ms-letter-spacing: var(--letter-spacing--body-1-regular, 0);
  letter-spacing: var(--letter-spacing--body-1-regular, 0);
  line-height: var(--line-height--body-1-regular, 1);
  padding: 1.1rem 1.3rem;
  text-transform: var(--letter-casing--body-1-regular, none);
`;

const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.red0};
  padding: 10px 5px;
`;

export { Container, Input, ErrorMessage, Label };
