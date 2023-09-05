"use client";
import { Button } from "@/shared/components";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function ChangeLangButton() {
  const t = useTranslations("menubar");
  const router = useRouter();
  const locale = useLocale();
  return (
    <Button
      onClick={() => {
        router.replace(locale === "en" ? "/ru" : "/en");
      }}>
      {t("actions.lang")}
    </Button>
  );
}
