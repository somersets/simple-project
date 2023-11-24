import { useTranslations } from "next-intl";
import * as S from "./style.styled";
import useModal from "@/shared/hooks/useModal";
import { MODAL_NAMES } from "@/shared/enums/modal-routes";

export default function OpenRegisterOptionsPopupButton() {
  const t = useTranslations("auth");
  const { openModal } = useModal();

  return (
    <>
      <S.OpenRegisterFormButton
        isFluid={false}
        onClick={() => openModal(MODAL_NAMES.REGISTER_OPTIONS_MODAL)}>
        {t("register")}
      </S.OpenRegisterFormButton>
    </>
  );
}
