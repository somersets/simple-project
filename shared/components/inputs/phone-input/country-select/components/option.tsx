import { OptionProps, components } from "react-select";
import { getCountryCallingCode } from "react-phone-number-input/input";
import Image from "next/image";
import React from "react";
import * as S from "../contry-select.styled";
import type { ICountryOption } from "../../types";

const Option = (props: OptionProps<ICountryOption>) => {
  // to optimize render on hover effects

  // eslint-disable-next-line no-param-reassign
  delete props.innerProps.onMouseMove;
  // eslint-disable-next-line no-param-reassign
  delete props.innerProps.onMouseOver;
  const { data } = props;

  const SIZE = 24;
  const flagUrl = data.value
    ? `/images/flags/1x1/${props.data.value}.svg`
    : "/images/icons/glob.svg";
  const countryCode = data.value
    ? `+${getCountryCallingCode(data.value)}`
    : null;

  return (
    <components.Option {...props}>
      <S.IconWrapper>
        <Image
          style={{ borderRadius: "50%" }}
          src={flagUrl}
          width={SIZE}
          height={SIZE}
          alt="flag icon"
        />
      </S.IconWrapper>
      <span style={{ display: "inline-block", marginLeft: 10 }}>
        {data.label} {countryCode}
      </span>
    </components.Option>
  );
};

export default Option;
