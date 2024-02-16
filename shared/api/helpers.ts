import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

const invalidateOn =
  <T>({ success, error = [] }: { success: T[]; error?: T[] }) =>
  (result: unknown) =>
    result ? success : error;

function isFetchBaseQueryError(error: unknown): error is FetchBaseQueryError {
  return typeof error === "object" && error != null && "status" in error;
}

// Type predicate to narrow an unknown error to an object with a string 'message' property

function isErrorWithMessage(error: unknown): error is { message: string } {
  return (
    typeof error === "object" &&
    error != null &&
    "message" in error &&
    typeof (error as any).message === "string"
  );
}

export { invalidateOn, isFetchBaseQueryError, isErrorWithMessage };
