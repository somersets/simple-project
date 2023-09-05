import { notFound } from "next/navigation";

export async function getMessages(locale: string) {
  try {
    return (await import(`@/public/locales/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}
