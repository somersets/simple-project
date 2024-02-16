import * as S from "./style.styled";
import {
  ChangeEvent,
  ForwardedRef,
  forwardRef,
  memo,
  useEffect,
  useMemo,
  useState,
} from "react";
import { PhoneInputProps } from "./model";
import CountrySelect from "./country-select/country-select";
import PhoneInputProvider from "./store/phone-input-provider";
import { AsYouType, getCountryCallingCode } from "libphonenumber-js";
import { ICountryCode } from "@/shared/constants/types";
import { useParams } from "next/navigation";
import ruCountries from "@/shared/constants/ru-countries";
import enCountries from "@/shared/constants/en-countries";

export default memo(
  forwardRef(function PhoneInput(
    {
      name,
      onChange,
      validateField,
      value,
      defaultPhoneCountry,
      ...rest
    }: PhoneInputProps,
    ref: ForwardedRef<unknown>,
  ) {
    const params = useParams();

    const [phoneValue, setPhoneValue] = useState("");
    const [currentCountryCodeInfo, setCurrentCountryCodeInfo] =
      useState<ICountryCode>({} as ICountryCode);

    const countriesLocalization = useMemo<ICountryCode[] | undefined>(
      () =>
        ({
          ru: ruCountries,
          en: enCountries,
        })[params.locale]
          ?.sort((a, b) => {
            if (a.countryName < b.countryName) {
              return -1;
            } else if (a.countryName > b.countryName) {
              return 1;
            } else return 0;
          })
          .map((country) => ({
            ...country,
            isSelected: false,
            dialCode: country.countryCode
              ? getCountryCallingCode(country.countryCode)
              : "",
          })),
      [params.locale],
    );

    const onChangePhoneInput = (event: ChangeEvent<HTMLInputElement>) => {
      let formatNum;
      // we will start format number after 3 numbers
      const isStartFormat = /(.?\d){4,}/.test(event.target.value);

      if (isStartFormat && currentCountryCodeInfo?.countryCode) {
        formatNum = new AsYouType(currentCountryCodeInfo.countryCode).input(
          event.target.value,
        );
      } else {
        formatNum = event.target.value;
      }
      if (
        currentCountryCodeInfo.dialCode &&
        !formatNum.startsWith(currentCountryCodeInfo.dialCode)
      ) {
        setPhoneValue(`${currentCountryCodeInfo.dialCode} ${formatNum}`);
      } else {
        setPhoneValue(`${formatNum}`);
      }
      onChange && onChange(event);
    };

    useEffect(() => {
      if (!phoneValue && value) {
        setPhoneValue(value.toString());
      }
    }, [value]);

    useEffect(() => {
      if (countriesLocalization && !defaultPhoneCountry) {
        const countryCode = params.locale.toLowerCase() === "ru" ? "ru" : "us";
        setCurrentCountryCodeInfo(
          countriesLocalization.find(
            (country) => country.countryCode.toLowerCase() === countryCode,
          ) || ({} as ICountryCode),
        );
      } else if (countriesLocalization && defaultPhoneCountry) {
        setCurrentCountryCodeInfo(
          countriesLocalization.find(
            (country) =>
              country.countryCode.toLowerCase() ===
              defaultPhoneCountry.toLowerCase(),
          ) || ({} as ICountryCode),
        );
      }
    }, [countriesLocalization, defaultPhoneCountry, params.locale]);

    const onCurrentCountryCodeInfoChange = (codeInfo: ICountryCode) => {
      setPhoneValue(`${codeInfo.dialCode}`);
      setCurrentCountryCodeInfo(codeInfo);
    };

    return (
      <PhoneInputProvider>
        <S.Container>
          <CountrySelect
            countriesLocalization={countriesLocalization}
            value={currentCountryCodeInfo}
            onSelectCodeInfo={onCurrentCountryCodeInfoChange}
          />
          <S.PhoneInput
            {...rest}
            value={phoneValue}
            onChange={onChangePhoneInput}
            name={name}
            validateField={validateField}
            $isError={false}
            ref={ref}
          />
        </S.Container>
      </PhoneInputProvider>
    );
  }),
);
