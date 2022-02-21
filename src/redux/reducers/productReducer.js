import {
  ADD_QUANTITY,
  ADD_TO_CART,
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
      console.log('Total State', state.total);

      const addedProdPrice = addedProduct.prices.map(price => {
        return price.amount;
      });
      console.log('addedProdPrice', addedProdPrice);
      if (existedProduct) {
        // if (state.addedProducts.quantity) {
          addedProduct.quantity += 1;
          return {
            ...state,
            // total: state.total + parseFloat(addedProduct.price),
            total: state.total + addedProdPrice,
          }
        // }
      }
      addedProduct.quantity = 1;
      // const newTotal = state.total + parseFloat(addedProduct.price);
      const newTotal = state.total + addedProdPrice;
      return {
        ...state,
        addedProducts: [...state.addedProducts, addedProduct],
        total: newTotal,
      }
    }
    case REMOVE_FROM_CART: {
      const newProducts = state.addedProducts.filter(prod => action.id !== prod.id);
      const removedProduct = state.addedProducts.find(prod => action.id === prod.id);
      // calculating the total
      const removedProdPrice = removedProduct.prices.map(price => {
        return price.amount;
      });
      const newTotal = state.total + removedProdPrice;
      return {
        ...state,
        addedProducts: newProducts,
        total: newTotal,
      };
    }
    case ADD_QUANTITY: {
      const addedProduct = state.categories.categories[0].products.find(product => product.id === action.id);
      addedProduct.quantity += 1;
      console.log('Qty Added', addedProduct.quantity);

      const addedQtyPrice = addedProduct.prices.map(price => {
        return price.amount;
      });
      const newTotal = state.total + addedQtyPrice;
      return {
        ...state,
        total: newTotal,
      };
    }
    case SUB_QUANTITY: {
      const addedProduct = state.categories.categories[0].products.find(product => product.id === action.id);
      const newProducts = state.addedProducts.filter(product => product.id !== action.id);
      
      const subQtyPrice = addedProduct.prices.map(price => {
        return price.amount;
      });
      // if the quantity >= 1 then, it should be decreased
      if (addedProduct.quantity >= 1) {
        // const newProducts = state.addedProducts.filter(product => product.id !== action.id);
        addedProduct.quantity -= 1;
        console.log('Qty Sub', addedProduct.quantity);
        console.log('Decreased', newProducts);
        const newTotal = state.total + subQtyPrice;
        return {
          ...state,
          addedProducts: newProducts,
          total: newTotal,
        };
      }
      // addedProduct.quantity -= 1;
      const newTotal = state.total + subQtyPrice;
      return {
        ...state,
        total: newTotal,
      }
    }
    default:
      return state;
  }
};

export default productReducer;
