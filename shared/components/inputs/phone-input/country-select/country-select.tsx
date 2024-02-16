import React, { useContext, useEffect, useRef } from "react";
import { DropdownIndicator } from "./components";
import { ICountrySelect } from "../types";
import * as S from "./contry-select.styled";
import { PhoneInputContext } from "../store/phone-input-provider";
import { PHONE_INPUT_REDUCER_ACTIONS } from "../model";
import DropdownList from "./components/dropdown-list";
import { useTranslations } from "next-intl";

function CountrySelect({
  value,
  onSelectCodeInfo,
  countriesLocalization,
}: ICountrySelect) {
  const { dispatch, state } = useContext(PhoneInputContext);
  const ref = useRef<HTMLDivElement | null>(null);
  const t = useTranslations("registerForm");
  const closeByClickOutside = (event: any) => {
    if (event.target.id === "dropdown-indicator") return;
    if (
      state.isDropdownOpen &&
      ref.current &&
      !ref.current?.contains(event.target)
    ) {
      dispatch(PHONE_INPUT_REDUCER_ACTIONS.DROPDOWN_CLOSE);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", closeByClickOutside);
    return () => {
      document.removeEventListener("mousedown", closeByClickOutside);
    };
  }, []);
  return (
    <S.CodeSelectContainer>
      <S.CodeSelectLabel>{t("phoneCode")}</S.CodeSelectLabel>
      <S.CodeSelect>
        <S.Code>{`+ ${value.dialCode}`}</S.Code>
        <DropdownIndicator
          isDropdownOpen={state.isDropdownOpen}
          onClick={() => dispatch(PHONE_INPUT_REDUCER_ACTIONS.DROPDOWN_TOGGLE)}
        />
      </S.CodeSelect>
      <DropdownList
        ref={ref}
        countriesLocalization={countriesLocalization}
        onSelectCodeInfo={(codeInfo) => onSelectCodeInfo(codeInfo)}
      />
    </S.CodeSelectContainer>
  );
}

export default CountrySelect;
