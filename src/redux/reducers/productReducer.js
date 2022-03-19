import {
  ADD_QUANTITY,
  ADD_TO_CART,
  CHANGE_LABEL,
  CLEAR_OPTIONS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  SELECT_ATTRIBUTES,
  SUB_QUANTITY
} from '../actions/actionTypes';

const initialState = {
  categories: [],
  loading: false,
  error: '',
  addedProducts: [],
  total: 0,
  label: 'USD',
  options: []
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
      const addedProduct = state.categories.all.products.find(product => product.id === action.id);
       // check if the action id exists in the addedProducts
      // debugger
      const existedProduct = state.addedProducts.find(product => (action.id === product.id) && (action.options[0]?.clothes === product.options[0]?.clothes));
      const existedProduct2 = state.addedProducts.find(product => (action.id === product.id) && (action.options[0]?.text === product.options[0]?.text) && (action.options[0]?.swatch === product.options[0]?.swatch));
      
      const existed = existedProduct ? existedProduct : existedProduct2;
      // calculating the total
      const addedProductPrice = addedProduct.prices.find(price => price.currency.label === state.label);
      const options = action.options;

      if (existed && JSON.stringify(existed.options) === JSON.stringify(options)) {
        existed.quantity += 1;

        const newTotal = state.total + addedProductPrice.amount;
        return {
          ...state,
          // total: state.total + addedProductPrice.amount,
          total: Math.round((newTotal + Number.EPSILON) * 100) / 100,
          // quantity: addedProduct.quantity += 1
        }
      }
      // injects random ids into added products so that I could increment/decrement product with diff attributes
      const cartId = {cartId: Math.floor(Math.random() * 10)};
      addedProduct.quantity = 1;
      const newTotal = state.total + addedProductPrice.amount;
      // console.log('CartId', cartId)
      return {
        ...state,
        addedProducts: [...state.addedProducts, {...addedProduct, options, cartId}],
        total: Math.round((newTotal + Number.EPSILON) * 100) / 100,
      }

      // const addedProduct = state.categories.categories[0].products.find(product => product.id === action.id);
      // const addedProductPrice = addedProduct.prices.find(price => price.currency.label === state.label);
      // const newTotal = state.total + addedProductPrice.amount;
      // const total = Math.round((newTotal + Number.EPSILON) * 100) / 100;
      // const cartId = {cartId: Math.floor(Math.random() * 10)};
      // const options = action.options;
      
      // if (state.addedProducts.length === 0) {
      //   addedProduct.quantity = 1;

      //   return {
      //     ...state,
      //     addedProducts: [...state.addedProducts, {...addedProduct, options, cartId}],
      //     total
      //   }
      // } else {
      //   const stateProduct = [...state.addedProducts];
      //   const addedProducts = state.addedProducts.filter(product => (action.id === product.id));
      //   console.log('Pro', addedProducts);
        
      //   if (addedProducts &&
      //       addedProducts.find(prod => 
      //         JSON.stringify(action.options) === JSON.stringify(prod.options))) {
      //         // const stateProduct = [...state.addedProducts];
      //         const prodIndex = stateProduct.findIndex(prod => prod.id === addedProducts.id);

      //         const productItem =  addedProducts.find(prod => 
      //           JSON.stringify(action.options) === JSON.stringify(prod.options))
      //           productItem.quantity += 1;
      //           stateProduct[prodIndex] = productItem

      //     return {
      //       ...state,
      //       addedProducts: stateProduct,
      //       total
      //     }
      //   } else {
      //     // const stateProduct = [...state.addedProducts];
      //     addedProduct.quantity = 1;
      //     addedProduct.options = options;
      //     addedProduct.cartId = cartId;
      //     stateProduct.push(addedProduct);

      //     return {
      //       ...state,
      //       addedProducts: stateProduct,
      //       total
      //     }
      //   }
      // }
    }
    case ADD_QUANTITY: {
      const addedProduct = state.addedProducts.find(product => product.cartId === action.cartId);
      // console.log('Added State', action.id, addedProduct);

      const addedQtyPrice = addedProduct.prices.find(price => price.currency.label === state.label);
      const newTotal = state.total + addedQtyPrice.amount;
      // console.log('Inc Qty', addedProduct.quantity)
      return {
        ...state,
        addedProducts: [...state.addedProducts],
        quantity: addedProduct.quantity += 1,
        total: Math.round((newTotal + Number.EPSILON) * 100) / 100,
      };
    }
    case SUB_QUANTITY: {
      const addedProduct = state.addedProducts.find(product => product.cartId === action.cartId);
      
      const subQtyPrice = addedProduct.prices.find(price => price.currency.label === state.label);
      // if the quantity === 1 then, it should be removed and not decreased
      if (addedProduct.quantity === 1) {
        const newProducts = state.addedProducts.filter(product => product.cartId !== action.cartId);
        const newTotal = state.total - subQtyPrice.amount;
        // console.log('Sub Qty price', subQtyPrice.amount);
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
      case SELECT_ATTRIBUTES:
      return {
        ...state,
        options: [...state.options, action.payload],
      };
    case CLEAR_OPTIONS:
      return {
        ...state,
        options: []
      }
    default:
      return state;
  }
};

export default productReducer;
