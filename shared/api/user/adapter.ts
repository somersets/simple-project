import { IUserSexOrientation } from "@/shared/types/user";
import { SelectValue } from "@/shared/types/components";

const adaptSexOrientationData = (
  orientations: IUserSexOrientation[],
): SelectValue[] => {
  return orientations.map((item) => ({
    value: item.id.toString(),
    label: item.orientation,
  }));
};

export { adaptSexOrientationData };
