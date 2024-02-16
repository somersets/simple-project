import { StylesConfig } from "react-select";
import { ICountryOption } from "../types";
import lightTheme from "@/theme/theme";

const stylesConfig: StylesConfig<ICountryOption> = {
  control: (base) => ({
    ...base,
    backgroundColor: "transparent",
    border: "none",
    outline: "none",
    boxShadow: "none",
    cursor: "pointer",
  }),

  singleValue: (base) => ({
    ...base,
  }),

  valueContainer: (base) => ({
    ...base,
    padding: 0,
  }),
  option: (base, { isSelected }) => ({
    ...base,
    width: "auto",
    height: "30px",
    padding: `${lightTheme.margins.semilarge} 0`,
    paddingLeft: lightTheme.margins.semilarge,
    backgroundColor: isSelected
      ? lightTheme.colors.grey5
      : lightTheme.colors.white,
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    cursor: "pointer",
    transition: lightTheme.transitions.general,
    ":hover": {
      backgroundColor: lightTheme.colors.lightPurple1,
    },
  }),
  menu: (base) => ({
    ...base,
    marginTop: 0,
    left: `-${lightTheme.margins.medium}`,
    width: "400px",
    minWidth: "100%",
    background: lightTheme.colors.white,
    zIndex: 2,
    borderRadius: 8,

    "@media (max-width: 440px)": {
      width: "330px",
    },
  }),

  menuList: (base) => ({
    ...base,
    marginTop: 0,
    textAlign: "left",
    maxHeight: "290px",
    backgroundColor: "white",
    borderRadius: lightTheme.roundCorners.medium,
    border: `1px solid${lightTheme.colors.main}`,
    zIndex: 2,
    "::-webkit-scrollbar": {
      display: "none",
    },
  }),
  indicatorsContainer: (base, { selectProps }) => ({
    ...base,
    margin: `0 ${lightTheme.margins.upperbase}`,
    transition: "transform 0.1s ease-in-out",
    transform: selectProps.menuIsOpen ? "rotateZ(180deg)" : "",
  }),
  dropdownIndicator: (base) => ({
    ...base,
    // transform: 'rotateZ(45deg)',
  }),
};

export default stylesConfig;
