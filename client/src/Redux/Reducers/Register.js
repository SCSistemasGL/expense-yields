import { SEARCH_REGISTER_EMAIL } from "../Actions/ActionsTypes";

const initialState = {
  registers: [],
};

export default function root(state = initialState, action) {
  switch (action.type) {
    case SEARCH_REGISTER_EMAIL:
      return {
        ...state,
        registers: action.payload.data,
      };

    default:
      return state;
  }
}
