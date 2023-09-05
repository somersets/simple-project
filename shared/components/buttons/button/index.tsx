"use client";

import React from "react";
import * as S from "./button.styled";
import Link from "next/link";
import { proximaBold } from "@/shared/utils/fonts";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isFluid?: boolean;
  isLoading?: boolean;
  color?: ButtonColorType;
  href?: string;
}

export type ButtonColorType = "red";

function Button({
  isFluid = true,
  isLoading,
  color,
  href,
  children,
  ...props
}: IButton) {
  const button = (
    <S.Button
      style={proximaBold.style}
      disabled={isLoading}
      color={color}
      $isFluid={isFluid}
      {...props}>
      {isLoading ? "Loading..." : children}
    </S.Button>
  );
  return href ? <Link href={href}>{button}</Link> : button;
}

export default Button;
