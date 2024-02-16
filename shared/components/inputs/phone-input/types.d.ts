import type { CountryCode } from "libphonenumber-js";
import { ICountryCode } from "@/shared/constants/types";

export interface ICountryOption {
  label: string;
  value: CountryCode;
}

export interface ICountrySelect {
  value: ICountryCode;
  onSelectCodeInfo: (codeInfo: ICountryCode) => void;
  countriesLocalization: ICountryCode[] | undefined;
}
