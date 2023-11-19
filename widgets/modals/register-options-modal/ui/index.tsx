"use client";
import { Modal } from "@/shared/components";
import { MODAL_NAMES } from "@/shared/enums/modal-routes";

export default function RegisterOptionsModal() {
  return (
    <div>
      <Modal modalName={MODAL_NAMES.REGISTER_OPTIONS_MODAL}>123</Modal>
    </div>
  );
}
