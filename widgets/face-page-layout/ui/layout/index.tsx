"use client";
import * as S from "./style.styled";
import { Typography } from "@/shared/components";
import { useTranslations } from "next-intl";
import { OpenRegisterOptionsPopupButton } from "@/features/buttons";
import { RegisterFormModal, RegisterOptionsModal } from "@/widgets/modals";

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
        <OpenRegisterOptionsPopupButton />
      </S.ButtonContainer>
      <RegisterOptionsModal />
      <RegisterFormModal />
    </S.MainFaceLayout>
  );
}
