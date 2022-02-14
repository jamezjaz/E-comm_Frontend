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
    const { category } = this.props;
    return(
      <>
        <Container>
          <CategoryTitle>{category.name}</CategoryTitle>
          <ProductContent>
            {category.products?.map(product => (
              <ProductCard key={product.id}>
                <h2>{console.log('All Products', category.products)}</h2>
                <Image src={product.gallery} alt="gallery" />
                <div>
                  <CartIcon src={cart} alt="Cart" />
                </div>
                <p>{product.name}</p>
                {product.prices?.map((price, i) => (
                  // <span key={i}>{ (Math.round(price.amount * 100) / 100).toFixed(2)}</span>
                  // <span key={i}>{ console.log('Rounded', (price.amount).toFixed(2))}</span>
                  // <span key={i}>{`${price[i].currency.symbol}${(price.amount).toFixed(2)}`}</span>
                  <span key={i}>{(price.amount).toFixed(2)}</span>
                ))}
              </ProductCard>
            ))}
          </ProductContent>
        </Container>
      </>
    );
  }
};

export default Product;