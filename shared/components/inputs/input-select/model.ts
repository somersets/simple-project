import { IInputProps } from "@/shared/components/inputs/input/model";
import { SelectValue } from "@/shared/types/components";

export interface ISelectInputProps extends IInputProps {
  onMenuOpen?: () => void;
  options?: SelectValue[];
  isLoading?: boolean;
}

export interface ISelectProps {
  options: SelectValue[];
  name: string;
}
