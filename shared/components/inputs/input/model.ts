import { InputHTMLAttributes } from "react";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  label: string;
  $isError?: boolean;
}

export interface IInputStyle extends InputHTMLAttributes<HTMLInputElement> {
  $isError?: boolean;
}
