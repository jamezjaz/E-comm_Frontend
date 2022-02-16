import React from 'react';
import { Link } from 'react-router-dom';
import cart from '../assets/icons/cart.png';
import {
  CartIcon,
  CategoryTitle,
  Container,
  Image,
  ProductCard,
  ProductContent
} from '../styles/Product.styled';
import { price } from '../container/constant';

class Product extends React.Component {
  render() {
    const { category, label='USD' } = this.props;
    
    return(
      <>
        <Container>
          <CategoryTitle>{category.name}</CategoryTitle>
          <ProductContent>
            {category.products?.map(product => (
              <Link to={`/description/${product.id}`}  key={product.id}>
                <ProductCard>
                  <h2>{console.log('All Products', category.products)}</h2>
                  <Image src={product.gallery[0]} alt="Product Image" />
                  <div>
                    <CartIcon src={cart} alt="Cart" />
                  </div>
                  <p>{product.name}</p>
                  {/* {product.prices?.map((price, i) => ( */}
                    
                    <span>{price(product.prices, label)}</span>
                  {/* // ))} */}
                </ProductCard>
              </Link>
            ))}
          </ProductContent>
        </Container>
      </>
    );
  }
};

export default Product;