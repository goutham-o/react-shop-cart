import itemList from '../../itemList';
import { FETCH_PRODUCT_LIST, CART_FAVORITES } from '../types';

export const fetchProductList = () => {
  return (dispatch) => {
    dispatch({
      type: FETCH_PRODUCT_LIST,
      payload: itemList,
    });
  };
};

export const addToCart = (value) => {
  return {
    type: CART_FAVORITES,
    payload: value,
  };
};
