import Select from "react-select/base";
import { useState } from "react";

export default function BaseSelect({ form, field, options, ...props }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  return (
    <Select
      {...field}
      {...props}
      name={field.name}
      options={options}
      value={options ? options.find((option) => option.value === field.value) : ""}
      inputValue={inputValue}
      onChange={({ value }) => {
        form.setFieldValue(field.name, value.toString());
      }}
      onInputChange={(value) => {
        setInputValue(value);
      }}
      menuIsOpen={isMenuOpen}
      onMenuClose={() => setIsMenuOpen(false)}
      onMenuOpen={() => {
        setIsMenuOpen(true);
      }}
      onBlur={field.onBlur}
    />
  );
}
