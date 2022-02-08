import React from 'react';
import cloth from '../assets/images/cloth.png';
import cart from '../assets/icons/cart.png';
import {
  CartIcon,
  CategoryTitle,
  Container,
  Image,
  ProductCard,
  ProductContent
} from '../styles/Product.styled';

class Product extends React.Component {
  render() {
    return(
      <>
        <Container>
          <CategoryTitle>Category name</CategoryTitle>
          <ProductContent>
            <ProductCard>
              <Image src={cloth} alt="cloth" />
              <div>
                <CartIcon src={cart} alt="Cart" />
              </div>
              <p>Apollo Running Short</p>
              <span>$50.00</span>
            </ProductCard>
            <ProductCard>
              <Image src={cloth} alt="cloth" />
              <p>Apollo Running Short</p>
              <span>$50.00</span>
            </ProductCard>
            <ProductCard>
              <Image src={cloth} alt="cloth" />
              <p>Apollo Running Short</p>
              <span>$50.00</span>
            </ProductCard>
            <ProductCard>
              <Image src={cloth} alt="cloth" />
              <p>Apollo Running Short</p>
              <span>$50.00</span>
            </ProductCard>
          </ProductContent>
        </Container>
      </>
    );
  }
};

export default Product;