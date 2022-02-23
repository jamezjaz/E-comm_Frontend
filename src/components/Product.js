import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import cart from '../assets/icons/shopping-cart.svg';
import { price } from '../container/constant';
import { addToCart } from '../redux/actions/actionCreators';
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
    const { category, label } = this.props;

    const handleAddToCart = id => {
      const { addProductsToCart } = this.props;
      addProductsToCart(id);
    };
    
    return(
      <>
        <Container>
          <CategoryTitle>{category.name}</CategoryTitle>
          <ProductContent>
            {category.products?.map(product => (
              <div key={product.id}>
                <Link to={`/description/${product.id}`}>
                  <ProductCard>
                    {/* <h2>{console.log('All Products', category.products)}</h2> */}
                    <Image src={product.gallery[0]} alt="Product Image" />
                    <p>{product.name}</p>
                    {/* {product.prices?.map((price, i) => ( */}
                      
                      <span>{price(product.prices, label)}</span>
                    {/* // ))} */}
                  </ProductCard>
                </Link>
                <button
                  onClick={() => { handleAddToCart(product.id); }}
                >
                  <CartIcon src={cart} alt="Cart" />
                </button>
              </div>
            ))}
          </ProductContent>
        </Container>
      </>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  addProductsToCart: id => dispatch(addToCart(id)),
});

export default connect(null, mapDispatchToProps)(Product);