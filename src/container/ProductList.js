import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Product from '../components/Product';
import { ContentContainer } from '../styles/ProductList.styled';
import fetchProducts from '../apiRequest/apiRequest';

class ProductList extends React.Component { 
  componentDidMount() {
    const { fetchedProducts } = this.props;
    fetchedProducts();
  };

  render() {
    const { all } = this.props;

    console.log('All', all);

    return(
      <>
        <Header />
        <ContentContainer>
          <Product
            allCategory={all}
          />
        </ContentContainer>
      </>
    );
  }

}

const mapStateToProps = state => ({
  all: state.product?.categories?.categories[0]
});

const mapDispatchToProps = dispatch => ({
  fetchedProducts: () => dispatch(fetchProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);