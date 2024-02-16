import { CountryCode } from "libphonenumber-js";

export interface ICountryCode {
  countryCode: CountryCode | "";
  countryName: string;
  dialCode?: string;
  isSelected: boolean;
}
