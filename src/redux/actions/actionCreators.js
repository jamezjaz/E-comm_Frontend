import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FILTER_PRODUCTS,
  ADD_TO_CART,
  ADD_QUANTITY,
  SUB_QUANTITY,
  REMOVE_FROM_CART,
  CHANGE_LABEL
} from './actionTypes';

export const productRequest = () => ({
  type: FETCH_PRODUCTS_REQUEST,
});

export const productRequestSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const productRequestFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: error,
});

export const filterCategories = category => ({
  type: FILTER_PRODUCTS,
  payload: category,
});

export const addToCart = id => ({
  type: ADD_TO_CART,
  id,
});

export const removeFromCart = id => ({
  type: REMOVE_FROM_CART,
  id
});

export const addQuantity = id => ({
  type: ADD_QUANTITY,
  id,
});

export const subQuantity = id => ({
  type: SUB_QUANTITY,
  id,
});

export const changeCurrencyLabel = label => ({
  type: CHANGE_LABEL,
  payload: label,
})
