import { useTranslations } from "next-intl";
import { number, object, string } from "yup";

export default function useEditProfileFormValidationSchema() {
  const t = useTranslations("editProfileForm");

  const editProfileFormSchema = object().shape({
    first_name: string()
      .label(t("firstNameLabel"))
      .required(t("firstNameRequiredError"))
      .trim(),
    last_name: string()
      .label(t("lastNameLabel"))
      .required(t("lastNameRequiredError"))
      .trim(),
    email: string()
      .label(t("emailLabel"))
      .required(t("emailRequiredError"))
      .email(t("emailError"))
      .trim()
      .lowercase(),
    sex_orientation_id: number()
      .label("sexOrientationRequiredError")
      .required(t("sexOrientationRequiredError")),
    gender: string().label("genderLabel").required(t("genderRequiredError")),
    birthday: string()
      .required()
      .label(t("birthdayLabel"))
      .required(t("birthdayRequiredError")),
  });

  return {
    editProfileFormSchema,
  };
}
