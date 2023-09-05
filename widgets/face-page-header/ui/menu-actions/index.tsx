import * as S from "../header/style.styled";
import { OpenLoginPopupButton } from "../../../../features/open-login-popup-button";
import ChangeLangButton from "@/features/change-lang-button/ui";

export default function MenuActions() {
  return (
    <S.ActionItems role="header-menu-actions">
      {[<ChangeLangButton />, <OpenLoginPopupButton />].map((item, index) => {
        return <S.LineItemsItem key={index}>{item}</S.LineItemsItem>;
      })}
    </S.ActionItems>
  );
}
