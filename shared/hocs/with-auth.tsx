import { ReactElement, ReactNode, useEffect } from "react";
import { NextPage } from "next";
import { useCurrentUserQuery } from "@/shared/api/user";
import { useRouter } from "next/navigation";
import { APP_ROUTES } from "@/shared/enums/app-routes";
import { useAppDispatch, useAppSelector } from "@/shared/redux/store";
import { setUser } from "@/shared/redux/user-slice";
import { selectUserData } from "@/shared/redux/user-slice/selectors";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export default function WithAuth(
  Component: ({ children }: { children: ReactElement }) => ReactNode,
): ({ children }: { children: ReactElement }) => ReactElement | null {
  return function AuthenticatedComponent({ children }): ReactElement | null {
    const { data, isSuccess, isError, error, isLoading } =
      useCurrentUserQuery();
    const userData = useAppSelector(selectUserData);
    const dispatch = useAppDispatch();
    const router = useRouter();
    useEffect(() => {
      if (userData) return;
      dispatch(setUser(data));
      if (isError && !data) {
        router.replace(APP_ROUTES.MAIN);
      }
    }, [data, error, isError, router, userData]);

    return <Component>{children}</Component>;
  };
}
