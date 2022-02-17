import {
  ADD_TO_CART,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS
} from '../actions/actionTypes';

const initialState = {
  categories: [],
  loading: false,
  error: '',
  addedProducts: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.payload,
        error: '',
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        loading: false,
        categories: {},
        error: action.payload,
      };
    case ADD_TO_CART: {
      console.log('Action ID:', action.id, 'Action Type:', action.type);
      const addedProduct = state.categories.categories[0].products.find(product => product.id === action.id);
      console.log('State', state);
      console.log('Added Product', addedProduct);

      // check if the action id exists in the addedProducts
      const existedProduct = state.addedProducts.find(product => action.id === product.id);

      if (existedProduct) {
        // if (state.addedProducts.quantity) {
          addedProduct.quantity += 1;
          return {
            ...state,
          }
        // }
      }
      addedProduct.quantity = 1;
      console.log('Added', addedProduct.quantity);
      return {
        ...state,
        addedProducts: [...state.addedProducts, addedProduct],
        // quantity: addedProduct.quantity
      }
    }
    default:
      return state;
  }
};

export default productReducer;
