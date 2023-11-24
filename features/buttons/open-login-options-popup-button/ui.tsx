import { Button } from "@/shared/components";
import { useTranslations } from "next-intl";
import Icon from "@/shared/components/icon";
import { MODAL_NAMES } from "@/shared/enums/modal-routes";
import useModal from "@/shared/hooks/useModal";

export default function OpenLoginOptionsPopupButton() {
  const t = useTranslations("menubar");
  const { openModal } = useModal();

  return (
    <>
      <Button onClick={() => openModal(MODAL_NAMES.LOGIN_OPTIONS_MODAL)}>
        {t("actions.login")}
        <Icon icon="faSolidRightToBracket" />
      </Button>
    </>
  );
}
