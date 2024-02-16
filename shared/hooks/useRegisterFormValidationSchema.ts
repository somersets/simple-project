import { number, object, string } from "yup";
import { useTranslations } from "next-intl";

export default function useRegisterValidationSchema() {
  const t = useTranslations("registerForm");

  const registerFormSchema = object().shape({
    email: string()
      .label(t("emailLabel"))
      .required(t("emailRequiredErr"))
      .email(t("emailError"))
      .trim()
      .lowercase(),
    password: string()
      .label(t("passwordLabel"))
      .trim()
      .required(t("passwordRequiredErr"))
      .min(6),
  });

  return {
    registerFormSchema,
  };
}
