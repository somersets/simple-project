import { createContext, Dispatch, ReactNode, useReducer } from "react";
import { InitialStateType, PHONE_INPUT_REDUCER_ACTIONS } from "../model";
import { phoneInputReducer } from "../store/reducer";

const initialState = {
  isDropdownOpen: false,
};

export const PhoneInputContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<PHONE_INPUT_REDUCER_ACTIONS>;
}>({
  state: initialState,
  dispatch: () => {},
});

export default function PhoneInputProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [state, dispatch] = useReducer(phoneInputReducer, initialState);

  return (
    <PhoneInputContext.Provider value={{ state, dispatch }}>
      {children}
    </PhoneInputContext.Provider>
  );
}
