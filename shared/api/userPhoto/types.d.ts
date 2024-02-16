export interface IUserCreatePhoto {
  image: string;
  order: number;
}

export interface IUserUpdatePhoto {
  image: string;
  image_id: number;
}

export interface IUserDeletePhoto {
  image_id: number;
}

export interface IUserSortOrderPhoto {
  image_id: number;
  order: number;
}
