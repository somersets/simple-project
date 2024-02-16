import toast from "react-hot-toast";
import {
  isErrorWithMessage,
  isFetchBaseQueryError,
} from "@/shared/api/helpers";
import { IServerError } from "@/shared/types/server";

function isStandardSeverError(error: unknown): error is IServerError {
  return typeof error === "object" && error != null && "message" in error;
}

const callToastFromError = (err: unknown): void => {
  if (isFetchBaseQueryError(err)) {
    const RTKQueryError = "error" in err ? err.error : err.data;
    if (isStandardSeverError(RTKQueryError)) {
      const serverError =
        "message" in RTKQueryError
          ? RTKQueryError.message
          : JSON.stringify(err);
      toast.error(serverError);
    } else if (typeof RTKQueryError === "string") {
      toast.error(RTKQueryError);
    } else {
      toast.error(JSON.stringify(err.data));
    }
  } else if (isErrorWithMessage(err)) {
    toast.error(err.message);
  }
};

export { callToastFromError };
