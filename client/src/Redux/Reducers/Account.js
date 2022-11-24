import { ACCOUNTS } from "../Actions/ActionsTypes";

const initialState = {
  accounts: []
};

export default function root(state = initialState, action) {
  switch (action.type) {
    case ACCOUNTS:
      return {
        ...state,
        accounts: action.payload.data,
      };
    default:
      return state;
  }
}
