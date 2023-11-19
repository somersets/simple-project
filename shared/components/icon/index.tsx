import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { icons } from "@/shared/components/icon/utils";
import { BaseIcon } from "@/shared/components/icon/model";
import * as S from "./style.styled";

interface IconProps extends Omit<FontAwesomeIconProps, "icon"> {
  icon: BaseIcon;
  colors?: string;
}

export default function Icon({ icon, ...rest }: IconProps) {
  return <S.CustomFontAwesomeIcon {...rest} icon={icons[icon]} />;
}
