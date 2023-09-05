import { useTranslations } from "next-intl";

export default function DocumentHead() {
  const t = useTranslations("common");
  return (
    <head>
      <title>{t("titleApp")}</title>
      <meta
        name="description"
        content="A playground to explore new Next.js 13 app directory features such as nested layouts, instant loading states, streaming, and component level data fetching."
      />
      <meta name="viewport" content="width=device-width" />
    </head>
  );
}
