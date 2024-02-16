import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { SERVER_ACTION } from "@/shared/enums/server-action";
import { useLazyActivateAccountQuery } from "@/shared/api/auth";
import { callToastFromError } from "@/shared/components/toast/utils";
import { setUser } from "@/shared/redux/user-slice";
import { APP_ROUTES } from "@/shared/enums/app-routes";
import { useAppDispatch } from "@/shared/redux/store";

export default function useServerAction() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [activateUser] = useLazyActivateAccountQuery();

  const handleAction = async (action: SERVER_ACTION, value: any) => {
    switch (action) {
      case SERVER_ACTION.USER_ACTIVATION:
        try {
          await activateUser(value)
            .unwrap()
            .then((response) => {
              dispatch(setUser(response.user));
              router.push(APP_ROUTES.DASHBOARD);
            });
        } catch (err) {
          console.log(err);
          callToastFromError(err);
        }
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const serverAction = searchParams.get("server-action");
    const value = searchParams.get("value");
    if (serverAction && value) {
      handleAction(serverAction as SERVER_ACTION, value);
    }
  }, [searchParams]);
}
