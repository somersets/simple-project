"use client";
import { Modal } from "@/shared/components";
import { MODAL_NAMES } from "@/shared/enums/modal-routes";
import { BaseHeaderModal } from "@/entities/base-modal-entities";
import { OpenRegisterPopupButton } from "@/features/buttons";

export default function RegisterOptionsModal() {
  return (
    <div>
      <Modal
        modalName={MODAL_NAMES.REGISTER_OPTIONS_MODAL}
        renderHeader={() => (
          <BaseHeaderModal title="loginOptionsModal.title" />
        )}>
        <OpenRegisterPopupButton />
      </Modal>
    </div>
  );
}
