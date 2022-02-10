import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Product from '../components/Product';
import { ContentContainer } from '../styles/ProductList.styled';
import fetchProducts from '../apiRequest/apiRequest';

class ProductList extends React.Component {

  componentDidMount() {
    const { fetchedProducts, products } = this.props;
    fetchedProducts(products);
  };

  render() {
    const { allProducts, loading } = this.props;
    console.log('All Products', allProducts);

    return(
      <>
        <Header />
        <ContentContainer>
          {
            (loading === true) ?
              <p>Loading...</p>
            :
              Object.keys(allProducts).map((item, i) => (
                <div key={i}>
                  {/* <h3>{allProducts[item].products.name}</h3> */}
                </div>
              ))
          }
          <Product />
        </ContentContainer>
      </>
    );
  }

}

const mapStateToProps = state => ({
  allProducts: state.product.products.data,
  loading: state.loading,
});

// const mapStateToProps = state => {
//   console.log('State', state);
// };

const mapDispatchToProps = dispatch => ({
  fetchedProducts: products => dispatch(fetchProducts(products)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);