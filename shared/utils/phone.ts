import parsePhoneNumber from "libphonenumber-js";
import removeExceptNumbers from "@/shared/utils/string";

const validatePhone = (phone: string, phoneError: string): string => {
  let error = "";
  const parsedPhone = parsePhoneNumber(
    `+${removeExceptNumbers(phone.toString()).toString()}`,
  );
  if (!parsedPhone?.isValid()) {
    error = phoneError;
  }
  return error;
};

export { validatePhone };
