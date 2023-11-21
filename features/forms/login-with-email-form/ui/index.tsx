import { Form, Formik, FormikProps } from "formik";
import { useRef } from "react";
import useLoginWithEmailValidationSchema from "@/shared/hooks/useLoginWithEmailValidationSchema";
import { Input } from "@/shared/components/inputs";
import { LoginWithEmailForm } from "../model";
import { useTranslations } from "next-intl";
import * as S from "./style.styled";
import { Button } from "@/shared/components";

const initialValues: LoginWithEmailForm = { email: "", password: "" };

export default function LoginWithEmailForm() {
  const t = useTranslations("loginWithEmailForm");

  const ref = useRef<FormikProps<LoginWithEmailForm>>(null);
  const { loginWithEmailSchema } = useLoginWithEmailValidationSchema();

  return (
    <Formik
      innerRef={ref}
      validateOnBlur
      validateOnChange={false}
      validationSchema={loginWithEmailSchema}
      initialValues={initialValues}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(true);
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
            <Input
              onBlur={handleBlur}
              label={t("emailLabel")}
              onChange={handleChange}
              value={values.email}
              type="email"
              name="email"
              errorMessage={errors?.email}
            />
            <Input
              onBlur={handleBlur}
              label={t("passwordLabel")}
              onChange={handleChange}
              value={values.password}
              type="password"
              name="password"
              errorMessage={errors?.password}
            />
            <S.LoginButtonContainer>
              <Button type="submit" disabled={isSubmitting}>
                {t("signIn")}
              </Button>
            </S.LoginButtonContainer>
          </Form>
        );
      }}
    </Formik>
  );
}
