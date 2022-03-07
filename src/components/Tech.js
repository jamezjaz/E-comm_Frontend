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
  CartIcon,
  CategoryTitle,
  Container,
  Image,
  ImageContainer,
  Option,
  TechCard,
  TechContent
} from '../styles/Tech.styled';

class Tech extends React.Component {
  render() {
    const { tech, label, options, resetOption } = this.props;

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
        <Container>
          <CategoryTitle>{tech.name}</CategoryTitle>
          <TechContent>
            {tech.products?.map(product => (
              <div key={product.id}>
                {product.inStock === true ?
                  <>
                    <Link to={`/description/${product.id}`}>
                      <TechCard>
                        <ImageContainer>
                          <Image src={product.gallery[0]} alt="Product Image" />
                        </ImageContainer>
                        <p>
                          {product.brand}
                          {' '}
                          {product.name}
                        </p>
                        <span>{price(product.prices, label)}</span>
                      </TechCard>
                    </Link>
                    {product.attributes.map(attr => (
                      <div key={attr.id}>
                        {tech.name === 'tech' &&
                          <div>
                            {attr.type === 'swatch' &&
                              <>
                                {attr.items.map(color => (
                                  <h6 key={color.id}>
                                    <Option
                                      OptionColor={color.displayValue}
                                      onClick={() => selectOptions({ swatch: color.displayValue })}
                                    />
                                  </h6>
                                ))}
                              </>
                            }
                            {attr.type === 'text' &&
                              <>
                                {attr.items.map(capacity => (
                                  <small
                                    key={capacity.id}
                                    onClick={() => selectOptions({ text: capacity.displayValue })}
                                  >
                                    {capacity.displayValue}
                                  </small>
                                ))}
                              </>
                            }
                          </div>
                        }
                        </div>
                      ))}
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
                  </>
                :
                  <Link to={`/description/${product.id}`}>
                    <TechCard
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
                    </TechCard>
                  </Link>
                }
              </div>
            ))}
          </TechContent>
        </Container>
      </>
    );
  }
};

const mapStateToProps = state => ({
  options: state.product.options,
  label: state.product.label
})

const mapDispatchToProps = dispatch => ({
  addProductsToCart: (id, options) => dispatch(addToCart(id, options)),
  selectAttr: option => dispatch(selectAttributes(option)),
  resetOption: () => dispatch(clearOptions())
});

export default connect(mapStateToProps, mapDispatchToProps)(Tech);