"use client";
import * as S from "./style.styled";
import { Typography } from "@/shared/components";
import { useTranslations } from "next-intl";
import { OpenRegisterPopupButton } from "@/features/open-register-popup-button";

export default function Layout() {
  const t = useTranslations("common");
  return (
    <S.MainFaceLayout>
      <S.TitleContainer>
        <Typography align="center" type="lg-title">
          {t("slogan_1")}
        </Typography>
      </S.TitleContainer>
      <S.ButtonContainer>
        <OpenRegisterPopupButton />
      </S.ButtonContainer>
    </S.MainFaceLayout>
  );
}
