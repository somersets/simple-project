"use client";
import { BaseModal, Modal } from "@/shared/components";
import { MutableRefObject } from "react";

export default function RegisterModal({
  refModal,
}: {
  refModal: MutableRefObject<BaseModal | null>;
}) {
  return (
    <div>
      <Modal ref={refModal}>123</Modal>
    </div>
  );
}
