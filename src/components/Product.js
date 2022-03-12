import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import cart from '../assets/icons/shopping-cart.svg';
import { price } from '../container/constant';
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
  Option,
  OptionContainer,
  OptionText,
  ProductCard,
  ProductContent
} from '../styles/Product.styled';

class Product extends React.Component {
  render() {
    const { allCategory, label, options, resetOption, loading } = this.props;

    const handleAddToCart = (id, options) => {
      const { addProductsToCart } = this.props;
      addProductsToCart(id, options);
      resetOption();
    };

    const selectOptions = option => {
      const { selectAttr } = this.props;
      selectAttr(option);
    };
    
    return(
      <>
        {loading === true ?
          <Container>
            <h4>Loading...</h4>
          </Container>
        :
          <Container>
            <CategoryTitle> {allCategory && allCategory.name}</CategoryTitle>
            <ProductContent>
              {allCategory &&
                allCategory.products?.map(product => (
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
                        {product.attributes.map(attr => (
                          <OptionContainer key={attr.id} className='optionContainer'>
                            {product.category === 'clothes' &&
                              <>
                                {attr.items.map(clothAttr => (
                                  <small
                                    key={clothAttr.id}
                                    onClick={() => selectOptions({ clothes: clothAttr.displayValue })}
                                  >
                                    {clothAttr.displayValue}
                                  </small>
                                ))}
                              </>
                            }
                            {product.category === 'tech' &&
                              <div>
                                {attr.type === 'swatch' &&
                                  <>
                                    {attr.items.map(color => (
                                      <div key={color.id} className='subOptionSwatch'>
                                        <Option
                                          className='option'
                                          OptionColor={color.displayValue}
                                          onClick={() => selectOptions({ swatch: color.displayValue })}
                                        />
                                      </div>
                                    ))}
                                  </>
                                }
                                {attr.type === 'text' &&
                                  <>
                                    {attr.items.map(capacity => (
                                      <div
                                        key={capacity.id}
                                        className='subOptionText'
                                      >
                                        <OptionText
                                          onClick={() => selectOptions({ text: capacity.displayValue })}
                                          className='text'
                                        >
                                          {capacity.displayValue}
                                        </OptionText>
                                      </div>
                                    ))}
                                  </>
                                }
                              </div>
                            }
                          </OptionContainer>
                        ))}
                        <CartBtnContainer className='cartBtnContainer'>
                          <button
                            onClick={() => {
                              product.attributes.length === options.length ?
                                handleAddToCart(product.id, options)
                                :
                                alert('Select all products attributes');
                                resetOption();
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
      </>
    );
  }
};

const mapStateToProps = state => ({
  options: state.product.options,
  label: state.product.label,
  loading: state.product.loading
})

const mapDispatchToProps = dispatch => ({
  addProductsToCart: (id, options) => dispatch(addToCart(id, options)),
  selectAttr: option => dispatch(selectAttributes(option)),
  resetOption: () => dispatch(clearOptions())
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);