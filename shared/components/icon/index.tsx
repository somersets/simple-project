import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { icons } from "@/shared/components/icon/utils";
import { BaseIcon } from "@/shared/components/icon/model";

interface IconProps extends Omit<FontAwesomeIconProps, "icon"> {
  icon: BaseIcon;
}

export default function Icon({ icon, ...rest }: IconProps) {
  return <FontAwesomeIcon {...rest} icon={icons[icon]} />;
}
