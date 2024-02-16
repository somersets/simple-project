import { InputHTMLAttributes, ReactNode } from "react";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  label: string;
  $isError?: boolean;
  renderRightIcon?: () => ReactNode;
  validateField?: (field: string) => void;
  children?: ReactNode;
}

export interface IInputStyle extends InputHTMLAttributes<HTMLInputElement> {
  $isError?: boolean;
}
