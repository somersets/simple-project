import * as S from "../header/style.styled";
import { OpenLoginPopupButton } from "../../../../features/open-login-options-popup-button";
import ChangeLangButton from "@/features/change-lang-button/ui";
import { LoginOptionsModal, LoginWithEmailModal } from "@/widgets/modals";

export default function MenuActions() {
  return (
    <S.ActionItems role="header-menu-actions">
      <ChangeLangButton />
      <OpenLoginPopupButton />
      <LoginWithEmailModal />
      <LoginOptionsModal />
    </S.ActionItems>
  );
}
