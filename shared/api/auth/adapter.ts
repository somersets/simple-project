import { ILoginResponse } from "@/shared/api/auth/types";
import { IUser } from "@/shared/types/user";

const addAccessToken = (data: ILoginResponse): ILoginResponse => {
  localStorage.setItem("accessToken", data.access_token);
  return data;
};

const adaptAuthData = (authData: IUser): IUser => ({
  ...authData,
  /*avatar: authData.avatar
    ? `${process.env.NEXT_PUBLIC_IMG_URL}${authData.avatar}`
    : null,*/
});

export { addAccessToken, adaptAuthData };
