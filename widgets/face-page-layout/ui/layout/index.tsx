"use client";
import * as S from "./style.styled";
import { Typography } from "@/shared/components";
import { useTranslations } from "next-intl";
import { OpenRegisterPopupButton } from "../../../../features/open-register-options-popup-button";
import { RegisterOptionsModal } from "@/widgets/modals";

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
      <RegisterOptionsModal />
    </S.MainFaceLayout>
  );
}
