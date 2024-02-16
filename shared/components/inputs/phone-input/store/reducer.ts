import { InitialStateType, PHONE_INPUT_REDUCER_ACTIONS } from "../model";

export const phoneInputReducer = (
  state: InitialStateType,
  action: PHONE_INPUT_REDUCER_ACTIONS,
) => {
  switch (action) {
    case PHONE_INPUT_REDUCER_ACTIONS.DROPDOWN_TOGGLE:
      return {
        ...state,
        isDropdownOpen: !state.isDropdownOpen,
      };
    case PHONE_INPUT_REDUCER_ACTIONS.DROPDOWN_OPEN:
      return {
        ...state,
        isDropdownOpen: true,
      };
    case PHONE_INPUT_REDUCER_ACTIONS.DROPDOWN_CLOSE:
      return {
        ...state,
        isDropdownOpen: false,
      };
    default:
      return state;
  }
};
