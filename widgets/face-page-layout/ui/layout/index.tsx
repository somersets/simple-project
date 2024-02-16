"use client";
import * as S from "./style.styled";
import { Typography } from "@/shared/components";
import { useTranslations } from "next-intl";
import { OpenRegisterOptionsPopupButton } from "@/features/buttons";
import {
  ActivationAccountInstructionModal,
  RegisterFormModal,
  RegisterOptionsModal,
} from "@/widgets/modals";
import useUserData from "@/shared/hooks/use-user-data";

export default function Layout() {
  const t = useTranslations("common");
  useUserData();

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
      <ActivationAccountInstructionModal />
    </S.MainFaceLayout>
  );
}
