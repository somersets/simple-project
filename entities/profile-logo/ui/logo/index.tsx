import { ProfileLogoProps } from "@/entities/profile-logo";
import * as S from "./style.styled";

export default function ProfileLogo({ src }: ProfileLogoProps) {
  return (
    <S.ProfileLogoWrapper>
      <S.ProfileLogoImage src={src} alt="Profile logo" />
    </S.ProfileLogoWrapper>
  );
}
