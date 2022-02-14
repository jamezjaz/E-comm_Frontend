import {
  productRequest,
  productRequestFailure,
  productRequestSuccess
} from '../redux/actions/actionCreators'
import axios from 'axios';
import * as constants from '../container/constant';

const fetchProducts = () => dispatch => {
  dispatch(productRequest);
  axios.post(
    constants.GRAPHQL_API, {
    query: constants.GET_PRODUCTS_QUERY
    }
  )
  .then(res => {
    const queryRes = res.data.data;
    // console.log(queryRes); Ok
    
    dispatch(productRequestSuccess(queryRes));
  })
  .catch(error => {
    const errorMsg = error.message;
    dispatch(productRequestFailure(errorMsg));
  });
};

export default fetchProducts;
