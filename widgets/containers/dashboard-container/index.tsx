import * as S from "./style.styled";
import { ReactNode } from "react";
export default function DashboardContainer({
  children,
}: {
  children: ReactNode;
}) {
  return <S.DashboardLayout>{children}</S.DashboardLayout>;
}
