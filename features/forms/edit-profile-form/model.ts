import { SelectValue } from "@/shared/types/components";

export interface IEditProfileForm {
  name: string;
  label: string;
  type: string;
  options?: SelectValue[];
}

export interface IEditProfileFormFields {
  first_name: string;
  last_name: string;
  email: string;
  phone: number;
  birthday: string;
  gender: string;
  sex_orientation_id: string;
}
