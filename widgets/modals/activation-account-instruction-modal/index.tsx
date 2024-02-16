import { Modal, Typography } from "@/shared/components";
import { MODAL_NAMES } from "@/shared/enums/modal-routes";
import { BaseHeaderModal } from "@/entities/base-modal-entities";
import Icon from "@/shared/components/icon";
import { useTranslations } from "next-intl";

export default function ActivationAccountInstructionModal() {
  const t = useTranslations("activationAccountInstructionModal");
  return (
    <Modal
      modalName={MODAL_NAMES.ACTIVATION_ACCOUNT_INSTRUCTION}
      renderHeader={() => (
        <BaseHeaderModal
          title="activationAccountInstructionModal.title"
          renderLogo={() => <Icon size="6x" color="#fff" icon="faEnvelope" />}
        />
      )}>
      <Typography type="h3" align="center">
        {t("instruction")}
      </Typography>
    </Modal>
  );
}
