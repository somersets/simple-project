"use client";
import { Modal } from "@/shared/components";
import { BaseHeaderModal } from "@/entities/base-modal-entities";
import { LoginEmailButton } from "../../../../features/open-login-email-popup-button";
import { useTranslations } from "next-intl";
import { MODAL_NAMES } from "@/shared/enums/modal-routes";

export default function LoginOptionsModal() {
  const t = useTranslations("loginOptionsModal");
  return (
    <Modal
      modalName={MODAL_NAMES.LOGIN_OPTIONS_MODAL}
      renderHeader={() => <BaseHeaderModal title="loginOptionsModal.title" />}>
      <LoginEmailButton label={t("loginWithEmail")} />
    </Modal>
  );
}
