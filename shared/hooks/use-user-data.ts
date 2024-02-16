import { useAppSelector } from "@/shared/redux/store";
import { selectUserData } from "@/shared/redux/user-slice/selectors";
export default function useUserData() {
  const userData = useAppSelector(selectUserData);

  return {
    userData,
  };
}
