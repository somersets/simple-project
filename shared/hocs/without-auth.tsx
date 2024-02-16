import { ReactElement, ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { NextPage } from "next";
import { APP_ROUTES } from "@/shared/enums/app-routes";
import { useCurrentUserQuery } from "@/shared/api/user";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

function WithoutAuth(Component: NextPageWithLayout): NextPageWithLayout {
  function AuthenticatedComponent(): ReactElement | null {
    const router = useRouter();
    const { data, isError } = useCurrentUserQuery();

    useEffect(() => {
      if (data && !isError) {
        router.push(APP_ROUTES.DASHBOARD);
      }
    }, [data, isError, router]);

    return <Component />;
  }
  return AuthenticatedComponent;
}
export default WithoutAuth;
