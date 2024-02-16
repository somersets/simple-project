export default function removeExceptNumbers(word?: string) {
  if (!word) {
    return 0;
  }
  return Number(
    word
      .split("")
      .filter((sign) => sign !== " ")
      .filter((sign) => !isNaN(Number(sign)))
      .map(Number)
      .join(""),
  );
}
