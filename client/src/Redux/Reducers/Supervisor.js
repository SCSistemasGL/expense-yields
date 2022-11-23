import { ALL_PROVINCE_PRICE, PROVINCE_NOT_PRICE, PROVINCE_WITH_PRICE } from "../Actions/ActionsTypes";

const initialState = {
  allProvince: [],
  provinceWithPrice: [],
  provinceNotPrice: []
};

export default function root(state = initialState, action) {
  switch (action.type) {
    case ALL_PROVINCE_PRICE:
      return {
        ...state,
        allProvince: action.payload.data,
      };
    
    case PROVINCE_WITH_PRICE:
      return {
        ...state,
        provinceWithPrice: action.payload.data,
      };
    
    case PROVINCE_NOT_PRICE:
      return {
        ...state,
        provinceNotPrice: action.payload.data,
      };


    default:
      return state;
  }
}
