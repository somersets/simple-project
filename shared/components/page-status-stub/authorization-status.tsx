import * as S from "./style.styled";
import { Typography } from "@/shared/components";

export default function AuthorizationStatus() {
  return (
    <S.AuthStatusContainer>
      <Typography>Authorization...</Typography>
    </S.AuthStatusContainer>
  );
}
