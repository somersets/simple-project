import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";
import { getMessages } from "@/shared/utils";

interface I18nProviderProps {
  children: ReactNode;
  locale: string;
}
export default async function I18nProvider({
  children,
  locale,
}: I18nProviderProps) {
  const messages = await getMessages(locale);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
