import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS
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
