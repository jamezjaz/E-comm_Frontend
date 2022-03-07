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
  ClothCard,
  ClothContent
} from '../styles/Clothes.styled';

class Clothes extends React.Component {
  render() {
    const { clothes, label, options, resetOption, loading } = this.props;

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
          <CategoryTitle>{clothes.name}</CategoryTitle>
          <ClothContent>
            {loading === false &&
              clothes?.products?.map(product => (
                <div key={product.id}>
                  {product.inStock === true ?
                    <>
                      <Link to={`/description/${product.id}`}>
                        <ClothCard>
                          <ImageContainer>
                            <Image src={product.gallery[0]} alt="Product Image" />
                          </ImageContainer>
                          <p>
                            {product.brand}
                            {' '}
                            {product.name}
                          </p>
                          <span>{price(product.prices, label)}</span>
                        </ClothCard>
                      </Link>
                      {product.attributes.map(attr => (
                        <div key={attr.id}>
                          {clothes.name === 'clothes' &&
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
                      <ClothCard
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
                      </ClothCard>
                    </Link>
                  }
                </div>
              ))
            }
          </ClothContent>
        </Container>
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
  
export default connect(mapStateToProps, mapDispatchToProps)(Clothes);