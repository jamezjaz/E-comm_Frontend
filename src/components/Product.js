import React from 'react';
// import cloth from '../assets/images/cloth.png';
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
    const { category, label='USD' } = this.props;

    const price = (prices, label) => {
      const price = prices.find(price => price.currency.label === label)
      return `${price.currency.symbol}${price.amount}`  
    };
    
    return(
      <>
        <Container>
          <CategoryTitle>{category.name}</CategoryTitle>
          <ProductContent>
            {category.products?.map(product => (
              <ProductCard key={product.id}>
                <h2>{console.log('All Products', category.products)}</h2>
                <Image src={product.gallery} alt="Product Image" />
                <div>
                  <CartIcon src={cart} alt="Cart" />
                </div>
                <p>{product.name}</p>
                {/* {product.prices?.map((price, i) => ( */}
                  
                  <span>{price(product.prices, label)}</span>
                {/* // ))} */}
              </ProductCard>
            ))}
          </ProductContent>
        </Container>
      </>
    );
  }
};

export default Product;