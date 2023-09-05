"use client";
import { useTranslations } from "next-intl";
import { Button } from "../../../shared/components";

export default function AboutPage() {
  const t = useTranslations("common");
  return <div><Button>{t("titleApp")}</Button></div>
}
