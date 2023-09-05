import BaseImage from "@/shared/components/base-image/ui";
import { ImageAlts } from "@/@types/image-alts";
import NoBackLogo from "@/public/images/logo-no-background.png";
import * as S from "./styled.style";

export default function NoBackgroundLogo() {
  return (
    <S.NoBackLogoContainer>
      <BaseImage
        className="no-back-logo"
        alt={ImageAlts.MAIN_LOGO}
        src={NoBackLogo}
      />
    </S.NoBackLogoContainer>
  );
}
