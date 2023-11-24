"use client";
import { Modal } from "@/shared/components";
import { BaseHeaderModal } from "@/entities/base-modal-entities";
import { OpenLoginEmailPopupButton } from "@/features/buttons";
import { useTranslations } from "next-intl";
import { MODAL_NAMES } from "@/shared/enums/modal-routes";

export default function LoginOptionsModal() {
  const t = useTranslations("loginOptionsModal");
  return (
    <Modal
      modalName={MODAL_NAMES.LOGIN_OPTIONS_MODAL}
      renderHeader={() => <BaseHeaderModal title="loginOptionsModal.title" />}>
      <OpenLoginEmailPopupButton label={t("loginWithEmail")} />
    </Modal>
  );
}
