import * as InputS from "../input/style.styled";
import * as S from "./style.styled";
import { ISelectInputProps } from "@/shared/components/inputs/input-select/model";
import React, { useEffect } from "react";
import { Input } from "@/shared/components/inputs";
import BaseSelect from "@/shared/components/inputs/input-select/select";

export default function InputSelect({
  onMenuOpen,
  ...rest
}: ISelectInputProps) {
  useEffect(() => {
    onMenuOpen && onMenuOpen();
  }, []);
  return (
    <InputS.Container>
      <S.SelectContainer>
        <Input {...rest} component={BaseSelect} />
      </S.SelectContainer>
    </InputS.Container>
  );
}
