import * as S from "./style.styled";
import { IInputProps } from "./model";

export default function Input({ errorMessage, label, ...rest }: IInputProps) {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Input {...rest} />
      <S.ErrorMessage>{errorMessage}</S.ErrorMessage>
    </S.Container>
  );
}
