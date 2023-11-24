import { RegisterButton } from "@/features/buttons/open-register-popup-button/style.styled";
import { useTranslations } from "next-intl";
import useModal from "@/shared/hooks/useModal";
import { MODAL_NAMES } from "@/shared/enums/modal-routes";

export default function OpenRegisterPopupButton() {
  const t = useTranslations("auth");
  const { openModal, closeModal } = useModal();
  return (
    <RegisterButton
      onClick={() => {
        closeModal(MODAL_NAMES.REGISTER_OPTIONS_MODAL);
        openModal(MODAL_NAMES.REGISTER_FORM_MODAL);
      }}>
      {t("register")}
    </RegisterButton>
  );
}
