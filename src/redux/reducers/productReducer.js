import {
  ADD_QUANTITY,
  ADD_TO_CART,
  CHANGE_LABEL,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  REMOVE_FROM_CART,
  SUB_QUANTITY
} from '../actions/actionTypes';

const initialState = {
  categories: [],
  loading: false,
  error: '',
  addedProducts: [],
  total: 0,
  label: 'USD',
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
      // console.log('Action ID:', action.id, 'Action Type:', action.type);
      const addedProduct = state.categories.categories[0].products.find(product => product.id === action.id);

      // check if the action id exists in the addedProducts
      const existedProduct = state.addedProducts.find(product => action.id === product.id);
      // calculating the total
      const addedProductPrice = addedProduct.prices.find(price => price.currency.label === state.label);
      if (existedProduct) {
        // if (state.addedProducts.quantity) {
          addedProduct.quantity += 1;
          const newTotal = state.total + addedProductPrice.amount;
          return {
            ...state,
            // total: state.total + addedProductPrice.amount,
            total: Math.round((newTotal + Number.EPSILON) * 100) / 100,
          }
        // }
      }
      addedProduct.quantity = 1;
      const newTotal = state.total + addedProductPrice.amount;
      return {
        ...state,
        addedProducts: [...state.addedProducts, addedProduct],
        total: Math.round((newTotal + Number.EPSILON) * 100) / 100,
      }
    }
    case REMOVE_FROM_CART: {
      const newProducts = state.addedProducts.filter(prod => action.id !== prod.id);
      const removedProduct = state.addedProducts.find(prod => action.id === prod.id);
      // calculating the total
      const removedProdPrice = removedProduct.prices.find(price => price.currency.label === state.label);
      const newTotal = state.total - removedProdPrice.amount;
      return {
        ...state,
        addedProducts: newProducts,
        total: Math.round((newTotal + Number.EPSILON) * 100) / 100,
      };
    }
    case ADD_QUANTITY: {
      const addedProduct = state.categories.categories[0].products.find(product => product.id === action.id);
      // addedProduct.quantity += 1;

      const addedQtyPrice = addedProduct.prices.find(price => price.currency.label === state.label);
      const newTotal = state.total + addedQtyPrice.amount;
      console.log('Inc Qty', addedProduct.quantity)
      return {
        ...state,
        addedProducts: [...state.addedProducts],
        quantity: addedProduct.quantity += 1,
        total: Math.round((newTotal + Number.EPSILON) * 100) / 100,
      };
    }
    case SUB_QUANTITY: {
      const addedProduct = state.categories.categories[0].products.find(product => product.id === action.id);
      
      const subQtyPrice = addedProduct.prices.find(price => price.currency.label === state.label);
      // if the quantity === 1 then, it should be removed and not decreased
      if (addedProduct.quantity === 1) {
        const newProducts = state.addedProducts.filter(product => product.id !== action.id);
        console.log('Qty Sub', addedProduct.quantity);
        const newTotal = state.total - subQtyPrice.amount;
        console.log('Sub Qty price', subQtyPrice.amount);
        console.log('New Total', newTotal);
        return {
          ...state,
          addedProducts: newProducts,
          total: Math.round((newTotal + Number.EPSILON) * 100) / 100,
        };
      }
      addedProduct.quantity -= 1;
      const newTotal = state.total - subQtyPrice.amount;
      return {
        ...state,
        addedProducts: [...state.addedProducts],
        total: Math.round((newTotal + Number.EPSILON) * 100) / 100,
      }
    }
    case CHANGE_LABEL:
      return {
        ...state,
        label: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
