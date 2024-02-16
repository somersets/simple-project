import * as S from "./style.styled";
import { IInputProps } from "./model";
import { memo } from "react";

export default memo(function Input({
  errorMessage,
  renderRightIcon,
  label,
  validateField,
  name,
  ...rest
}: IInputProps) {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Input
        {...rest}
        name={name}
        onBlur={() => name && validateField && validateField(name)}
      />
      {renderRightIcon ? (
        <S.RightIconContainer>{renderRightIcon()}</S.RightIconContainer>
      ) : null}
      {errorMessage ? <S.ErrorMessage>{errorMessage}</S.ErrorMessage> : null}
    </S.Container>
  );
});
