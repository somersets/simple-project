import { Modal } from "@/shared/components";
import { MODAL_NAMES } from "@/shared/enums/modal-routes";
import { BaseHeaderModal } from "@/entities/base-modal-entities";
import { RegisterForm } from "@/features/forms";

export default function RegisterFormModal() {
  return (
    <Modal
      modalName={MODAL_NAMES.REGISTER_FORM_MODAL}
      renderHeader={() => <BaseHeaderModal title="registerForm.fillData" />}>
      <RegisterForm />
    </Modal>
  );
}
