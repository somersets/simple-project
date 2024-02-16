import * as S from "./style.styled";
import { NoBackgroundLogo } from "@/entities/logo";
import { Typography } from "@/shared/components";
import { ReactNode } from "react";

export default function BaseHeaderModal({
  title,
  renderLogo,
}: {
  title: string;
  renderLogo?: () => ReactNode;
}) {
  return (
    <S.HeaderWrapper>
      {renderLogo ? renderLogo() : <NoBackgroundLogo />}
      <Typography align="center" type="h1" isTranslate>
        {title}
      </Typography>
    </S.HeaderWrapper>
  );
}
