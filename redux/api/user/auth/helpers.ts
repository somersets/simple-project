const invalidateOn =
  <T>({ success, error = [] }: { success: T[]; error?: T[] }) =>
  (result: unknown) =>
    result ? success : error;

export { invalidateOn };
