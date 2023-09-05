"use client";

import { useTranslations } from "next-intl";
import { ITypography } from "../model/types";
import * as S from "./style.styled";
import { proximaRegular } from "@/shared/utils/fonts";

export default function Typography(props: ITypography) {
  const { type, color, children, isTranslate, ...rest } = props;
  const t = useTranslations();

  const content = isTranslate ? t(children) : children;

  return (
    <S.Typography
      className={proximaRegular.className}
      color={color}
      type={type}
      {...rest}>
      {content}
    </S.Typography>
  );
}
