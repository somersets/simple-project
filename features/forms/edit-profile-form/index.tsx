import { IEditProfileForm, IEditProfileFormFields } from "./model";
import { useTranslations } from "next-intl";
import { useEffect, useRef } from "react";
import { FieldArray, Formik, FormikProps } from "formik";
import { callToastFromError } from "@/shared/components/toast/utils";
import { Input, PhoneInput } from "@/shared/components/inputs";
import { Button, Typography } from "@/shared/components";
import * as S from "./style.styled";
import useEditProfileFormValidationSchema from "@/shared/hooks/use-edit-profile-form-validation-schema";
import { useAppDispatch, useAppSelector } from "@/shared/redux/store";
import { validatePhone } from "@/shared/utils";
import { parsePhoneNumber } from "libphonenumber-js";
import { selectUserData } from "@/shared/redux/user-slice/selectors";
import {
  useLazySexOrientationQuery,
  useUpdateUserProfileMutation,
} from "@/shared/api/user";
import InputSelect from "@/shared/components/inputs/input-select";
import removeExceptNumbers from "@/shared/utils/string";
import { setUser } from "@/shared/redux/user-slice";
import toast from "react-hot-toast";
import { SelectValue } from "@/shared/types/components";

export default function EditProfileForm() {
  const t = useTranslations("editProfileForm");
  const data = useAppSelector(selectUserData);
  const dispatch = useAppDispatch();
  const [updateProfile] = useUpdateUserProfileMutation();
  const [getOrientation, orientationOptions] = useLazySexOrientationQuery();
  const ref = useRef<FormikProps<IEditProfileFormFields>>(null);
  const { editProfileFormSchema } = useEditProfileFormValidationSchema();

  const genders: SelectValue[] = [
    { label: t("m"), value: t("m") },
    { label: t("w"), value: t("w") },
  ];

  const editProfileFormFields: IEditProfileForm[] = [
    { name: "first_name", label: t("firstNameLabel"), type: "text" },
    { name: "last_name", label: t("lastNameLabel"), type: "text" },
    { name: "birthday", label: t("birthdayLabel"), type: "date" },
    { name: "gender", label: t("genderLabel"), type: "select", options: genders },
    { name: "email", label: t("emailLabel"), type: "email" },
    { name: "phone", label: t("phoneLabel"), type: "tel" },
    {
      name: "sex_orientation_id",
      label: t("sexOrientationLabel"),
      type: "select",
      options: orientationOptions.data,
    },
  ];

  const initialEditProfileFormFields = {
    first_name: "",
    last_name: "",
    email: "",
    phone: 0,
    birthday: "",
    gender: "",
    sex_orientation_id: "",
  };
  useEffect(() => {
    if (data) {
      ref.current?.setFieldValue("first_name", data?.first_name);
      ref.current?.setFieldValue("last_name", data?.last_name);
      ref.current?.setFieldValue("gender", data?.gender);
      ref.current?.setFieldValue("email", data?.email);
      ref.current?.setFieldValue("phone", data?.phone);
      ref.current?.setFieldValue(
        "sex_orientation_id",
        data?.sex_orientation?.id.toString(),
      );
      ref.current?.setFieldValue(
        "birthday",
        new Date(data?.birthday)
          .toLocaleDateString()
          .split("/")
          .reverse()
          .join("-") || "",
      );
    }
  }, [data]);

  const defaultPhoneCountry = (phone?: number) => {
    if (phone) {
      return parsePhoneNumber(`+${phone}`).country;
    }
    return "";
  };

  return (
    <Formik
      innerRef={ref}
      validateOnBlur={false}
      validateOnChange={false}
      validationSchema={editProfileFormSchema}
      initialValues={initialEditProfileFormFields}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          setSubmitting(true);
          await updateProfile({
            ...values,
            sex_orientation_id: +values.sex_orientation_id,
            birthday: new Date(values.birthday).toISOString(),
            phone: removeExceptNumbers(values.phone?.toString()),
          })
            .unwrap()
            .then((user) => {
              dispatch(setUser(user));

              toast.success(t("successUpdate"));
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
      }) => {
        return (
          <S.CustomForm noValidate>
            <Typography type="h2">{t("profileSettings")}</Typography>
            <S.FormInnerWrapper>
              <FieldArray
                name={"form"}
                render={({}) => {
                  return editProfileFormFields.map((item) => {
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
                            defaultPhoneCountry={defaultPhoneCountry(
                              data?.phone,
                            )}
                            name={item.name}
                            validate={(value) =>
                              validatePhone(value, t("phoneError"))
                            }
                            validateField={validateField}
                            errorMessage={errors[item.name]}
                          />
                        );
                      case "select":
                        return (
                          <InputSelect
                            key={item.name}
                            onBlur={handleBlur}
                            label={item.label}
                            onChange={handleChange}
                            value={values[item.name]}
                            type={item.type}
                            name={item.name}
                            validateField={validateField}
                            errorMessage={errors[item.name]}
                            options={item.options}
                            onMenuOpen={() => getOrientation()}
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

            <S.EditButtonContainer>
              <Button
                isFluid={false}
                type="submit"
                isLoading={isSubmitting}
                disabled={isSubmitting}>
                {t("apply")}
              </Button>
            </S.EditButtonContainer>
          </S.CustomForm>
        );
      }}
    </Formik>
  );
}
