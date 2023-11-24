import { Modal } from "@/shared/components";
import { BaseHeaderModal } from "@/entities/base-modal-entities";
import { MODAL_NAMES } from "@/shared/enums/modal-routes";
import { LoginWithEmailForm } from "@/features/forms";

export default function LoginWithEmailModal() {
  return (
    <Modal
      modalName={MODAL_NAMES.LOGIN_WITH_EMAIL_MODAL}
      renderHeader={() => (
        <BaseHeaderModal title="loginWithEmailModal.title" />
      )}>
      <LoginWithEmailForm />
    </Modal>
  );
}
