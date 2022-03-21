import React from 'react';
import { connect } from 'react-redux';
import Header from '../container/Header';
import {
  ButtonsContainer,
  CartContainer,
  CartDetails,
  Count,
  Image,
  ImageContainer,
  QtyButton,
  LeftContent,
  RightContent,
  SubTitle,
  Title,
  OptionName,
  OptionContainer,
  OptionButton
} from '../styles/Cart.styled';
import { price } from '../container/constant';
import {
  addQuantity,
  subQuantity
} from '../redux/actions/actionCreators';
// image slider
import SliderBtn from './SliderBtn';
import '../styles/Slider.css';

class Cart extends React.Component {
  constructor() {
    super();

    this.state = {
      position: 0
    };
    this.handleAddQuantity = this.handleAddQuantity.bind(this);
    this.handleSubQuantity = this.handleSubQuantity.bind(this);
  }

  handleAddQuantity(cartId) {
    const { addQty } = this.props;
    addQty(cartId);
  };

  handleSubQuantity(cartId) {
    const { subtractQty } = this.props;
    subtractQty(cartId);
  }

  render() {
    const { product, addedProducts, label } = this.props;
    const addedProductsLen = addedProducts.length;

    // cart image slider
    const { position } = this.state;

    const nextSlide = () => {
      const newPosition = position === addedProductsLen - 1 ? 0 : position + 1;
      this.setState({ position: newPosition });
    };
    
    const prevSlide = () => {
      const newPosition = position === 0 ? addedProductsLen - 1 : position - 1;
      this.setState({ position: newPosition });
    };
    
    return(
      <>
        <Header />
        <Title>CART</Title>
              <CartContainer>
                <LeftContent>
                  <CartDetails>
                    <h3>{product.brand}</h3>
                    <SubTitle>{product.name}</SubTitle>
                    <p>{price(product.prices, label)}</p>
                    <OptionContainer>
                      {product.attributes.map(attr => (
                        <OptionName key={attr.id}>{attr.name}</OptionName>
                      ))}
                      {product.options.map((option, i) => (
                        <div key={i}>
                          {product.category === 'clothes' &&
                            <>
                              <OptionButton>
                                {option.clothes}
                              </OptionButton>
                            </>
                          }
                          {product.category === 'tech' &&
                            <OptionButton
                              BgColor={option.swatch}
                              className='optionBtnTech'
                            >
                              {option.text}
                            </OptionButton>
                          }
                        </div>
                      ))}
                    </OptionContainer>
                  </CartDetails>
                </LeftContent>
                <RightContent>
                  <ButtonsContainer>
                    <QtyButton
                      onClick={() => { this.handleAddQuantity(product.cartId); }}
                    >
                      +
                    </QtyButton>
                    <Count>{product.quantity}</Count>
                    <QtyButton
                      onClick={() => { this.handleSubQuantity(product.cartId); }}
                    >
                      -
                    </QtyButton>
                  </ButtonsContainer>
                  <ImageContainer>
                    <div>
                      <Image src={product.gallery[this.state.position]} alt='Product' />
                      {product.gallery.length > 1 ?
                        <>
                          <SliderBtn moveSlide={nextSlide} direction={"next"} />
                          <SliderBtn moveSlide={prevSlide} direction={"prev"} />
                        </>
                      :
                        null
                      }
                    </div>
                  </ImageContainer>
                </RightContent>
              </CartContainer>
      </>
    );
  }
};

const mapStateToProps = state => ({
  addedProducts: state.product.addedProducts,
});

const mapDispatchToProps = dispatch => ({
  addQty: cartId => dispatch(addQuantity(cartId)),
  subtractQty: cartId => dispatch(subQuantity(cartId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
