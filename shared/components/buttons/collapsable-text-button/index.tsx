"use client";

import * as S from "./style.styled";
import { ReactNode } from "react";
import { ColorType } from "@/@types/styles";
import { proximaMedium } from "@/shared/utils/fonts";

interface CollapsableTextButtonProps {
  color?: ColorType;
  backgroundColor?: ColorType;
  collapseItems?: string[];
  children: ReactNode;
  isActive?: boolean;
}

export default function CollapsableTextButton({
  color,
  backgroundColor,
  collapseItems,
  children,
  isActive,
}: CollapsableTextButtonProps) {
  return (
    <S.ButtonContainer backgroundColor={backgroundColor}>
      <S.UnderlineButtonLink
        $isActive={isActive}
        className={proximaMedium.className}
        color={color}>
        {children}
      </S.UnderlineButtonLink>

      {collapseItems && collapseItems.length ? (
        <S.ButtonDropdownContainer>
          <S.ButtonDropdown>
            {collapseItems.map((item, index) => {
              return (
                <S.ButtonDropdownItem key={index}>
                  <S.ButtonLink className={proximaMedium.className}>
                    {item}
                  </S.ButtonLink>
                </S.ButtonDropdownItem>
              );
            })}
          </S.ButtonDropdown>
        </S.ButtonDropdownContainer>
      ) : null}
    </S.ButtonContainer>
  );
}
