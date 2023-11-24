import { object, string } from "yup";
import { useTranslations } from "next-intl";

export default function useRegisterValidationSchema() {
  const t = useTranslations("registerForm");

  const registerFormSchema = object().shape({
    email: string()
      .label(t("emailLabel"))
      .required()
      .email(t("emailError"))
      .trim()
      .lowercase(),
    password: string().label(t("passwordLabel")).trim().required().min(6),
    first_name: string()
      .label(t("first_nameLabel"))
      .required()
      .trim()
      .min(1)
      .max(20),
    last_name: string()
      .label(t("last_nameLabel"))
      .required()
      .trim()
      .min(1)
      .max(20),
    gender: string()
      .required(t("genderError"))
      .matches(/^[MFМЖ]$/g, { message: t("genderError") }),
    phone: string().label(t("phoneLabel")).required(),
    birthday: string().label(t("birthdayLabel")).required(),
  });

  return {
    registerFormSchema,
  };
}
