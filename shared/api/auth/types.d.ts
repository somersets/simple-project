import { IUser } from "@/shared/types/user";

interface ILoginPayload {
  email: string;
  password: string;
}
interface ILoginResponse {
  access_token: string;
  user: IUser;
}

interface IRegisterResponse {
  access_token: string;
  user: IUser;
}

interface IActivateAccountResponse {
  access_token: string;
  user: IUser;
}

interface IRefreshTokenResponse {
  access_token: string;
  user: IUser;
}

interface IRegisterPayload {
  email: string;
  phone: number;
  password: string;
}
