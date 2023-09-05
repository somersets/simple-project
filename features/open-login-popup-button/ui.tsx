import { BaseModal, Button } from "@/shared/components";
import { useTranslations } from "next-intl";
import { LoginModal } from "@/widgets/modals";
import { useRef } from "react";
import Icon from "@/shared/components/icon";

export default function OpenLoginPopupButton() {
  const t = useTranslations("menubar");
  const refModal = useRef<BaseModal | null>(null);

  return (
    <>
      <Button
        onClick={() => {
          refModal?.current?.openModal();
        }}>
        {t("actions.login")}
        <Icon icon="faSolidRightToBracket" />
      </Button>
      <LoginModal refModal={refModal} />
    </>
  );
}
