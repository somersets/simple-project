"use client";

import { ThemeProvider } from "styled-components";
import theme from "@/theme/theme";
import { ReactElement } from "react";

export default function WrapperThemeProvider({
  children,
}: {
  children: ReactElement;
}) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
