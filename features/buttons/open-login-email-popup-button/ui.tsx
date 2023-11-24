import * as S from "./style.styled";
import Icon from "@/shared/components/icon";
import { MODAL_NAMES } from "@/shared/enums/modal-routes";
import useModal from "@/shared/hooks/useModal";

export default function OpenLoginEmailPopupButton({
  label,
}: {
  label: string;
}) {
  const { openModal, closeModal } = useModal();
  return (
    <>
      <S.LoginEmailButton
        onClick={async () => {
          closeModal(MODAL_NAMES.LOGIN_OPTIONS_MODAL);
          openModal(MODAL_NAMES.LOGIN_WITH_EMAIL_MODAL);
        }}>
        <Icon icon="faEnvelope" />
        {label}
      </S.LoginEmailButton>
    </>
  );
}
