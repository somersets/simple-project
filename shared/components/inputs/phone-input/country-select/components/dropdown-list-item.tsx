import { ICountryCode } from "@/shared/constants/types";
import * as S from "./style.styled";
import Image from "next/image";
import React, { memo } from "react";

export default memo(function DropdownListItem({
  countryCodeItem,
  onSelectCodeInfo,
}: {
  onSelectCodeInfo: (codeInfo: ICountryCode) => void;
  countryCodeItem: ICountryCode;
  isSelected?: boolean;
}) {
  const SIZE = 24;
  const flagUrl = `/images/flags/1x1/${countryCodeItem.countryCode}.svg`;
  return (
    <S.DropdownListItemStyled
      $isSelected={countryCodeItem.isSelected}
      onClick={() => onSelectCodeInfo(countryCodeItem)}>
      <S.DropdownListItemFlagStyled>
        <Image
          style={{ borderRadius: "50%" }}
          src={flagUrl}
          width={SIZE}
          height={SIZE}
          alt="flag icon"
        />
      </S.DropdownListItemFlagStyled>
      {countryCodeItem.dialCode ? (
        <S.DropdownListItemCodeStyled>
          {`+${countryCodeItem.dialCode}`}
        </S.DropdownListItemCodeStyled>
      ) : null}
      <S.DropdownListItemNameStyled>
        {countryCodeItem.countryName}
      </S.DropdownListItemNameStyled>
    </S.DropdownListItemStyled>
  );
});
