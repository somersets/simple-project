import { Modal } from "@/shared/components";
import { MODAL_NAMES } from "@/shared/enums/modal-routes";
import { BaseHeaderModal } from "@/entities/base-modal-entities";

export default function RegisterEmailConfirmation() {
  return (
    <Modal
      modalName={MODAL_NAMES.REGISTER_EMAIL_CONFIRMATION}
      renderHeader={() => (
        <BaseHeaderModal title="loginOptionsModal.title" />
      )}>

    </Modal>
  );
}
