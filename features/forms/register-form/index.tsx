import { useTranslations } from "next-intl";
import { useRef } from "react";
import { FieldArray, Form, Formik, FormikProps } from "formik";
import { Input, PhoneInput } from "@/shared/components/inputs";
import * as S from "./style.styled";
import { Button } from "@/shared/components";
import { IRegisterForm, IRegisterFormFields } from "./model";
import useRegisterValidationSchema from "@/shared/hooks/useRegisterFormValidationSchema";
import { useRegisterMutation } from "@/shared/api/auth";
import { setUser } from "@/shared/redux/user-slice";
import { useAppDispatch } from "@/shared/redux/store";
import { callToastFromError } from "@/shared/components/toast/utils";
import removeExceptNumbers from "@/shared/utils/string";
import useModal from "@/shared/hooks/useModal";
import { MODAL_NAMES } from "@/shared/enums/modal-routes";
import { useRouter } from "next/navigation";
import { APP_ROUTES } from "@/shared/enums/app-routes";
import { validatePhone } from "@/shared/utils";

const initialValues: IRegisterFormFields = {
  email: "",
  password: "",
  phone: 0,
};
export default function RegisterForm() {
  const t = useTranslations("registerForm");
  const router = useRouter();
  const registerFormFields: IRegisterForm[] = [
    { name: "email", label: t("emailLabel"), type: "email" },
    { name: "phone", label: t("phoneLabel"), type: "tel" },
    {
      name: "password",
      label: t("passwordLabel"),
      type: "password",
    },
  ];
  const ref = useRef<FormikProps<IRegisterFormFields>>(null);
  const { registerFormSchema } = useRegisterValidationSchema();
  const dispatch = useAppDispatch();
  const [register] = useRegisterMutation();
  const { closeModal } = useModal();
  return (
    <Formik
      innerRef={ref}
      validateOnBlur={false}
      validateOnChange={false}
      validationSchema={registerFormSchema}
      initialValues={initialValues}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          setSubmitting(true);
          await register({
            ...values,
            phone: removeExceptNumbers(values.phone?.toString()),
          })
            .unwrap()
            .then((response) => {
              closeModal(MODAL_NAMES.REGISTER_FORM_MODAL);
              dispatch(setUser(response.user));
              router.push(APP_ROUTES.DASHBOARD);
            })
            .finally(() => {
              setSubmitting(false);
            });
        } catch (e) {
          callToastFromError(e);
        }
      }}>
      {({
        isSubmitting,
        errors,
        validateField,
        values,
        handleChange,
        handleBlur,
        isValid
      }) => {
        return (
          <Form noValidate>
            <S.FormInnerWrapper>
              <FieldArray
                name={"form"}
                render={({}) => {
                  return registerFormFields.map((item) => {
                    switch (item.type) {
                      case "tel":
                        return (
                          <PhoneInput
                            key={item.name}
                            onBlur={handleBlur}
                            label={item.label}
                            onChange={handleChange}
                            value={values[item.name]}
                            type={item.type}
                            name={item.name}
                            validate={(value) =>
                              validatePhone(value, t("phoneError"))
                            }
                            validateField={validateField}
                            errorMessage={errors[item.name]}
                          />
                        );
                      default:
                        return (
                          <Input
                            key={item.name}
                            onBlur={handleBlur}
                            label={item.label}
                            onChange={handleChange}
                            value={values[item.name]}
                            type={item.type}
                            name={item.name}
                            validateField={validateField}
                            errorMessage={errors[item.name]}
                          />
                        );
                    }
                  });
                }}
              />
            </S.FormInnerWrapper>

            <S.RegisterButtonContainer>
              <Button
                isFluid={false}
                type="submit"
                isLoading={isSubmitting}
                disabled={isSubmitting}>
                {t("signUp")}
              </Button>
            </S.RegisterButtonContainer>
          </Form>
        );
      }}
    </Formik>
  );
}
