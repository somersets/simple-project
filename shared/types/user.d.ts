export interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  patronymic: string;
  email: string;
  phone: number;
  birthday: string;
  activated: boolean;
  gender: string;
  created_at: string;
  updated_at: string;
  disabled_at: string;
  disabled_until: string;
  sex_orientation: IUserSexOrientation | null;
  photos: IUserPhoto[];
}

export interface IUserPhoto {
  id: number;
  photo: string;
  format: string;
  created_at: string;
  updated_at: string;
}

export interface IUserSexOrientation {
  orientation: string;
  id: number;
}
