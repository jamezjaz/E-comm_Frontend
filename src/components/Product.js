import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import cart from '../assets/icons/shopping-cart.svg';
import { price } from '../container/constant';
import Header from '../container/Header';
import {
  addToCart,
  selectAttributes,
  clearOptions
} from '../redux/actions/actionCreators';
import {
  CartBtnContainer,
  CartIcon,
  CategoryTitle,
  Container,
  Image,
  ImageContainer,
  ProductCard,
  ProductContent
} from '../styles/Product.styled';
import { withNavigate } from '../container/constant';

class Product extends React.Component {
  constructor() {
    super();

    this.state = {
      navigate: null
    }
  }
  render() {
    const { products, label, options, resetOption, loading, navigate } = this.props;

    const handleAddToCart = (id, options) => {
      const { addProductsToCart } = this.props;
      addProductsToCart(id, options);
      resetOption();
    };
    
    return(
      <>
        <div>
          <Header />
          {loading === true ?
            <Container>
              <h4>Please wait...</h4>
            </Container>
          :
            <Container>
              <CategoryTitle> {products && products.name}</CategoryTitle>
              <ProductContent>
                {products &&
                  products.products?.map(product => (
                    <div key={product.id}>
                      {product.inStock === true ?
                        <>
                          <Link to={`/description/${product.id}`}>
                            <ProductCard>
                              <ImageContainer>
                                <Image src={product.gallery[0]} alt="Product Image" />
                              </ImageContainer>
                              <p>
                                {product.brand}
                                {' '}
                                {product.name}
                              </p>
                              <span>{price(product.prices, label)}</span>
                            </ProductCard>
                          </Link>
                          <CartBtnContainer className='cartBtnContainer'>
                            <button
                              onClick={() => {
                                product.attributes.length === options.length ?
                                  handleAddToCart(product.id, options)
                                  :
                                  // <Link to={`/description/${product.id}`} />
                                  navigate(`/description/${product.id}`)
                              }}
                            >
                              <CartIcon src={cart} alt="Cart" />
                            </button>
                          </CartBtnContainer>
                        </>
                      :
                        <Link to={`/description/${product.id}`}>
                          <ProductCard
                            Opacity='0.4'
                            PointerEvents='none'
                          >
                            <h2>OUT OF STOCK</h2>
                            <ImageContainer>
                              <Image src={product.gallery[0]} alt="Product Image" />
                            </ImageContainer>
                            <p>
                              {product.brand}
                              {' '}
                              {product.name}
                            </p>
                            <span>{price(product.prices, label)}</span>
                          </ProductCard>
                        </Link>
                      }
                    </div>
                  ))
                }
              </ProductContent>
            </Container>
          }
        </div>
      </>
    );
  }
};

const mapStateToProps = state => ({
  options: state.product.options,
  label: state.product.label,
  loading: state.product.loading
});

const mapDispatchToProps = dispatch => ({
  addProductsToCart: (id, options) => dispatch(addToCart(id, options)),
  selectAttr: option => dispatch(selectAttributes(option)),
  resetOption: () => dispatch(clearOptions())
});

export default connect(mapStateToProps, mapDispatchToProps)(withNavigate(Product));