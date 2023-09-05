export function isArrayFull<T>(array: T[] | undefined | null): array is T[] {
  return Boolean(array) && Array.isArray(array) && Boolean(array.length);
}
