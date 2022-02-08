import React from 'react';
import Header from './Header';
import Product from '../components/Product';
import { ContentContainer } from '../styles/ProductList.styled';

class ProductList extends React.Component {
  render() {
    return(
      <>
        <Header />
        <ContentContainer>
          <Product />
        </ContentContainer>
      </>
    );
  }
};

export default ProductList;