/* eslint-disable import/no-anonymous-default-export */
import { FETCH_PRODUCT_LIST, CART_FAVORITES } from '../types';

const initialState = {
  productList: [],
  cartList: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCT_LIST:
      return {
        ...state,
        productList: action.payload,
      };
    case CART_FAVORITES:
      return {
        ...state,
        cartList: [...state.cartList, action.payload] 
      }
    default:
      return state;
  }
}
