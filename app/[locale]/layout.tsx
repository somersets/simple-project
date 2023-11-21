import { ReactNode } from "react";
import {
  I18nProvider,
  ReduxProvider,
  WrapperThemeProvider,
} from "@/app-settings";
import { DocumentHead } from "@/entities/html-head";
import { Metadata } from "next";
import GlobalStyle from "@/theme/global-style";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export const metadata: Metadata = {
  viewport: "width=device-width, initial-scale=1",
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  return (
    <WrapperThemeProvider>
      <html lang={locale}>
        <DocumentHead />
        <body>
          <ReduxProvider>
            <I18nProvider locale={locale}>
              <GlobalStyle />
              <div id="root-modal"></div>
              {children}
            </I18nProvider>
          </ReduxProvider>
        </body>
      </html>
    </WrapperThemeProvider>
  );
}
