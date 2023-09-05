import { BaseModal } from "@/shared/components";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import { RegisterModal } from "@/widgets/modals";
import * as S from "./style.styled";

export default function OpenRegisterPopupButton() {
  const t = useTranslations("auth");
  const refModal = useRef<BaseModal | null>(null);

  return (
    <>
      <S.RegisterButton
        onClick={() => {
          refModal?.current?.openModal();
        }}>
        {t("register")}
      </S.RegisterButton>
      <RegisterModal refModal={refModal} />
    </>
  );
}
