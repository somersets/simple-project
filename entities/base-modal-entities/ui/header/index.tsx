import * as S from "./style.styled";
import { NoBackgroundLogo } from "@/entities/logo";
import { Typography } from "@/shared/components";

export default function BaseHeaderModal({ title }: { title: string }) {
  return (
    <S.HeaderWrapper>
      <NoBackgroundLogo />
      <Typography align="center" type="h1" isTranslate>
        {title}
      </Typography>
    </S.HeaderWrapper>
  );
}
