import { object, string } from "yup";
import { useTranslations } from "next-intl";

export default function useLoginWithEmailValidationSchema() {
  const t = useTranslations("loginWithEmailForm");

  const loginWithEmailSchema = object().shape({
    email: string()
      .required(t("emailRequiredErr"))
      .email(t("emailError"))
      .trim()
      .lowercase(),
    password: string().trim().required(t("passwordRequiredErr")).min(6),
  });

  return {
    loginWithEmailSchema,
  };
}
