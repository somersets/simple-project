import { Form, Formik, FormikProps } from "formik";
import { useRef } from "react";
import useLoginWithEmailValidationSchema from "@/shared/hooks/useLoginWithEmailValidationSchema";
import { Input } from "@/shared/components/inputs";
import { LoginWithEmailForm } from "./model";
import { useTranslations } from "next-intl";
import * as S from "./style.styled";
import { Button } from "@/shared/components";
import { useLoginMutation } from "@/shared/api/auth";
import { callToastFromError } from "@/shared/components/toast/utils";
import { useAppDispatch } from "@/shared/redux/store";
import { setUser } from "@/shared/redux/user-slice";
import useModal from "@/shared/hooks/useModal";
import { MODAL_NAMES } from "@/shared/enums/modal-routes";
import { useRouter } from "next/navigation";
import { APP_ROUTES } from "@/shared/enums/app-routes";

const initialValues: LoginWithEmailForm = { email: "", password: "" };

export default function LoginWithEmailForm() {
  const t = useTranslations("loginWithEmailForm");
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();
  const router = useRouter();
  const ref = useRef<FormikProps<LoginWithEmailForm>>(null);
  const { loginWithEmailSchema } = useLoginWithEmailValidationSchema();
  const { closeModal } = useModal();

  return (
    <Formik
      innerRef={ref}
      validateOnBlur={false}
      validateOnChange={false}
      validationSchema={loginWithEmailSchema}
      initialValues={initialValues}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          setSubmitting(true);
          await login(values)
            .unwrap()
            .then((response) => {
              dispatch(setUser(response.user));
              closeModal(MODAL_NAMES.LOGIN_WITH_EMAIL_MODAL);
              router.push(APP_ROUTES.DASHBOARD);
            })
            .finally(() => {
              setSubmitting(false);
            });
        } catch (err) {
          callToastFromError(err);
        }
      }}>
      {({
        isSubmitting,
        validateField,
        errors,
        values,
        handleChange,
        handleBlur,
      }) => {
        return (
          <Form noValidate>
            <Input
              onBlur={handleBlur}
              label={t("emailLabel")}
              onChange={handleChange}
              value={values.email}
              type="email"
              name="email"
              validateField={validateField}
              errorMessage={errors?.email}
            />
            <Input
              onBlur={handleBlur}
              label={t("passwordLabel")}
              onChange={handleChange}
              value={values.password}
              type="password"
              name="password"
              validateField={validateField}
              errorMessage={errors?.password}
            />
            <S.LoginButtonContainer>
              <Button
                isFluid={false}
                type="submit"
                isLoading={isSubmitting}
                disabled={isSubmitting}>
                {t("signIn")}
              </Button>
            </S.LoginButtonContainer>
          </Form>
        );
      }}
    </Formik>
  );
}
