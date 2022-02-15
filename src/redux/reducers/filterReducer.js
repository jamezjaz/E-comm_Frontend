import { FILTER_PRODUCTS } from '../actions/actionTypes';

const initialFilter = 'all';

const filterReducer = (state = initialFilter, action) => {
  switch (action.type) {
    case FILTER_PRODUCTS:
      {
        console.log('Filter Me', action.payload);
        return action.payload;
      }
    default:
      return state;
  }
};

export default filterReducer;