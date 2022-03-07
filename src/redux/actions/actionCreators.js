import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  ADD_TO_CART,
  ADD_QUANTITY,
  SUB_QUANTITY,
  CHANGE_LABEL,
  SELECT_ATTRIBUTES,
  CLEAR_OPTIONS
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

export const addToCart = (id, options) => ({
  type: ADD_TO_CART,
  id,
  options
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

export const selectAttributes = option => ({
  type: SELECT_ATTRIBUTES,
  payload: option,
})

export const clearOptions = () => ({
  type: CLEAR_OPTIONS
});
