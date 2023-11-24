import * as S from "../header/style.styled";
import { OpenLoginOptionsPopupButton } from "@/features/buttons";
import ChangeLangButton from "@/features/change-lang-button/ui";
import { LoginOptionsModal, LoginWithEmailModal } from "@/widgets/modals";

export default function MenuActions() {
  return (
    <S.ActionItems role="header-menu-actions">
      <ChangeLangButton />
      <OpenLoginOptionsPopupButton />
      <LoginWithEmailModal />
      <LoginOptionsModal />
    </S.ActionItems>
  );
}
