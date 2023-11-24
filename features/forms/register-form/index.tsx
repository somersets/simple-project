import { useTranslations } from "next-intl";
import { useRef } from "react";
import { FieldArray, Form, Formik, FormikProps } from "formik";
import { Input } from "@/shared/components/inputs";
import * as S from "./style.styled";
import { Button } from "@/shared/components";
import { IRegisterForm, IRegisterFormFields } from "./model";
import useRegisterValidationSchema from "@/shared/hooks/useRegisterFormValidationSchema";

const initialValues: IRegisterFormFields = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  gender: "",
  phone: "",
  birthday: "",
};
export default function RegisterForm() {
  const t = useTranslations("registerForm");
  const registerFormFields: IRegisterForm[] = [
    {
      name: "first_name",
      label: t("first_nameLabel"),
      type: "text",
    },
    {
      name: "last_name",
      label: t("last_nameLabel"),
      type: "text",
    },
    { name: "email", label: t("emailLabel"), type: "email" },
    { name: "gender", label: t("genderLabel"), type: "text" },
    { name: "phone", label: t("phoneLabel"), type: "tel" },
    { name: "birthday", label: t("birthdayLabel"), type: "date" },
    {
      name: "password",
      label: t("passwordLabel"),
      type: "password",
    },
  ];
  const ref = useRef<FormikProps<IRegisterFormFields>>(null);
  const { registerFormSchema } = useRegisterValidationSchema();

  return (
    <Formik
      innerRef={ref}
      validateOnBlur
      validateOnChange={false}
      validationSchema={registerFormSchema}
      initialValues={initialValues}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(true);
        console.log(values);
        await new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(true);
          }, 3000);
        }).finally(() => {
          setSubmitting(false);
        });
      }}>
      {({ isSubmitting, errors, values, handleChange, handleBlur }) => {
        return (
          <Form noValidate>
            <S.FormInnerWrapper>
              <FieldArray
                name={"form"}
                render={({}) => {
                  return registerFormFields.map((item) => {
                    return (
                      <Input
                        key={item.name}
                        onBlur={handleBlur}
                        label={item.label}
                        onChange={handleChange}
                        value={values[item.name]}
                        type={item.type}
                        name={item.name}
                        errorMessage={errors[item.name]}
                      />
                    );
                  });
                }}
              />
            </S.FormInnerWrapper>

            <S.RegisterButtonContainer>
              <Button isFluid={false} type="submit" disabled={isSubmitting}>
                {t("signUp")}
              </Button>
            </S.RegisterButtonContainer>
          </Form>
        );
      }}
    </Formik>
  );
}
