import { object, string } from "yup";
import { useTranslations } from "next-intl";

export default function useLoginWithEmailValidationSchema() {
  const t = useTranslations("loginWithEmailForm");

  const loginWithEmailSchema = object().shape({
    email: string().required().email(t("emailError")).trim().lowercase(),
    password: string().trim().required().min(6),
  });

  return {
    loginWithEmailSchema,
  };
}
