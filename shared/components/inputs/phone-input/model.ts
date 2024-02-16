import { InputHTMLAttributes } from "react";

export interface PhoneInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  errorMessage: string;
  validateField: (field: string) => void;
  validate: (value: any) => void;
  defaultPhoneCountry?: string;
}

export enum PHONE_INPUT_REDUCER_ACTIONS {
  DROPDOWN_OPEN = "DROPDOWN_OPEN",
  DROPDOWN_CLOSE = "DROPDOWN_CLOSE",
  DROPDOWN_TOGGLE = "DROPDOWN_TOGGLE",
}
export interface InitialStateType {
  isDropdownOpen: boolean;
}
