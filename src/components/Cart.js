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
  OptionButton,
  SubTitle,
  Title,
  RemoveProduct,
  EmptyCartHeader
} from '../styles/Cart.styled';
import { price } from '../container/constant';
import {
  addQuantity,
  removeFromCart,
  subQuantity
} from '../redux/actions/actionCreators';
// image slider
import SliderBtn from './SliderBtn';
import '../styles/Slider.css';

class Cart extends React.Component {
  constructor() {
    super();

    this.handleAddQuantity = this.handleAddQuantity.bind(this);
    this.handleSubQuantity = this.handleSubQuantity.bind(this);
    this.handleRemoveProduct = this.handleRemoveProduct.bind(this);
    this.state = { slideIndex : 1 };
  }

  handleRemoveProduct(id) {
    const { removedProduct } = this.props;
    removedProduct(id);
  };

  handleAddQuantity(id) {
    const { addQty } = this.props;
    addQty(id);
  };

  handleSubQuantity(id) {
    const { subtractQty } = this.props;
    subtractQty(id);
  }

  render() {
    const { addedProducts, label='USD' } = this.props;
    const addedProductsLen = addedProducts.length;
    console.log('New Pro:', addedProducts, 'Count:', addedProductsLen);

    // cart image slider
    const slideIndex = this.state.slideIndex;

    const nextSlide = () => {
      if(slideIndex !== addedProductsLen) {
        this.setState({slideIndex: slideIndex + 1});
      } else if (slideIndex === addedProductsLen) {
        this.setState({slideIndex: 1})
      }
    };

    const prevSlide = () => {
      if(slideIndex !== 1) {
        this.setState({slideIndex: slideIndex - 1})
      } else if (slideIndex === 1) {
        this.setState({slideIndex: addedProductsLen})
      }
    };
    
    return(
      <>
        <Header />
        <Title>CART</Title>
        {addedProductsLen ?
          (
            addedProducts.map(item => (
              <CartContainer key={item.id}>
                <LeftContent>
                  <CartDetails>
                    <h3>{item.brand}</h3>
                    <SubTitle>{item.name}</SubTitle>
                    <p>{price(item.prices, label)}</p>
                    <div>
                      {item.attributes.map(attr => attr.items.map(option => (
                        <OptionButton key={option.id}>{option.displayValue}</OptionButton>
                      )))}
                      {/* <OptionButton>S</OptionButton> */}
                      {/* <OptionButton>M</OptionButton> */}
                    </div>
                  </CartDetails>
                </LeftContent>
                <RightContent>
                  <ButtonsContainer>
                    <QtyButton
                      onClick={() => { this.handleAddQuantity(item.id); }}
                    >
                      +
                    </QtyButton>
                    <Count>{item.quantity}</Count>
                    <QtyButton
                      onClick={() => { this.handleSubQuantity(item.id); }}
                    >
                      -
                    </QtyButton>
                  </ButtonsContainer>
                  <ImageContainer>
                    {item.gallery.map((img, index) => (
                      <div
                        key={index}
                        className={this.state.slideIndex === index + 1 ? "slide active-anim" : "slide"}
                      >
                        <Image src={img} alt='Product' />
                        <SliderBtn moveSlide={nextSlide} direction={"next"} />
                        <SliderBtn moveSlide={prevSlide} direction={"prev"} />
                      </div>
                    ))}
                    <RemoveProduct
                      onClick={() => { this.handleRemoveProduct(item.id); }}
                    >
                      Remove
                    </RemoveProduct>
                  </ImageContainer>
                </RightContent>
              </CartContainer>
            ))
          )
          :
          <EmptyCartHeader>You have added nothing on cart!</EmptyCartHeader>
        }
      </>
    );
  }
};

const mapStateToProps = state => ({
  addedProducts: state.product.addedProducts,
});

const mapDispatchToProps = dispatch => ({
  removedProduct: id => dispatch(removeFromCart(id)),
  addQty: id => dispatch(addQuantity(id)),
  subtractQty: id => dispatch(subQuantity(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
