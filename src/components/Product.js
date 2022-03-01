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
  Option,
  ProductCard,
  ProductContent
} from '../styles/Product.styled';

class Product extends React.Component {
  render() {
    const { category, label, options, resetOption } = this.props;

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
          <CategoryTitle>{category.name}</CategoryTitle>
          <ProductContent>
            {category.products?.map(product => (
              <div key={product.id}>
                {product.inStock === true ?
                  <>
                    <Link to={`/description/${product.id}`}>
                      <ProductCard>
                        <Image src={product.gallery[0]} alt="Product Image" />
                        <p>{product.name}</p>
                        <span>{price(product.prices, label)}</span>
                      </ProductCard>
                    </Link>
                    {product.attributes.map(attr => (
                      <div key={attr.id}>
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
                          handleAddToCart(product.id, options);
                          console.log('AddedI', options);
                        }}
                      >
                        <CartIcon src={cart} alt="Cart" />
                      </button>
                  </>
                :
                  <ProductCard
                    Opacity='0.4'
                    PointerEvents='none'
                  >
                    <h2>OUT OF STOCK</h2>
                    <Image src={product.gallery[0]} alt="Product Image" />
                    <p>{product.name}</p>
                    <span>{price(product.prices, label)}</span>
                  </ProductCard>
                }
              </div>
            ))}
          </ProductContent>
        </Container>
      </>
    );
  }
};

const mapStateToProps = state => ({
  options: state.product.options
})

const mapDispatchToProps = dispatch => ({
  addProductsToCart: (id, options) => dispatch(addToCart(id, options)),
  selectAttr: option => dispatch(selectAttributes(option)),
  resetOption: () => dispatch(clearOptions())
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);