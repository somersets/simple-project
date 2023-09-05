"use client";
import * as S from "./style.styled";
import MenubarItems from "@/widgets/face-page-header/ui/menubar-items";
import MenuActions from "@/widgets/face-page-header/ui/menu-actions";
import { NoBackgroundLogo } from "@/entities/logo";

interface FacingPageHeaderProps {}

export default function FacingPageHeader({}: FacingPageHeaderProps) {
  return (
    <S.FacingPageHeader>
      <S.LeftSideItems>
        <NoBackgroundLogo />
        <MenubarItems />
      </S.LeftSideItems>
      <MenuActions />
    </S.FacingPageHeader>
  );
}
