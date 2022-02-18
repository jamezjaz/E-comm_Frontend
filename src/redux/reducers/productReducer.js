import {
  ADD_QUANTITY,
  ADD_TO_CART,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  SUB_QUANTITY
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
    case ADD_QUANTITY: {
      const addedProduct = state.categories.categories[0].products.find(product => product.id === action.id);
      addedProduct.quantity += 1;
      // console.log('Added Qty', addedProduct);
      console.log('Qty Added', addedProduct.quantity);
      return {
        ...state,
        
      };
    }
    case SUB_QUANTITY: {
      const addedProduct = state.categories.categories[0].products.find(product => product.id === action.id);
      // if the quantity > 0 then, it should be removed
      if (addedProduct.quantity >= 1) {
        const newProducts = state.addedProducts.filter(product => product.id !== action.id);
        console.log('Qty Sub', addedProduct.quantity);
        console.log('Decreased', newProducts);
        return {
          ...state,
          addedProducts: newProducts,
        };
      }
      addedProduct.quantity -= 1;
      return {
        ...state,
      }
    }
    default:
      return state;
  }
};

export default productReducer;
