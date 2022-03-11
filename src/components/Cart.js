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
  EmptyCartHeader
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

    this.handleAddQuantity = this.handleAddQuantity.bind(this);
    this.handleSubQuantity = this.handleSubQuantity.bind(this);
    this.state = { slideIndex : 1 };
  }

  handleAddQuantity(id) {
    const { addQty } = this.props;
    addQty(id);
  };

  handleSubQuantity(id) {
    const { subtractQty } = this.props;
    subtractQty(id);
  }

  render() {
    const { addedProducts, label } = this.props;
    const addedProductsLen = addedProducts.length;

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
            addedProducts.map((item, idx) => (
              <CartContainer key={idx}>
                <LeftContent>
                  <CartDetails>
                    <h3>{item.brand}</h3>
                    <SubTitle>{item.name}</SubTitle>
                    <p>{price(item.prices, label)}</p>
                    <div>
                      {item.options.map((option, i) => (
                        <div key={i}>
                          {item.category === 'clothes' &&
                            <>
                              <OptionButton>{option.clothes}</OptionButton>
                            </>
                          }
                          {item.category === 'tech' &&
                            <OptionButton BgColor={option.swatch}>{option.text}</OptionButton>
                          }
                        </div>
                      ))}
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
                        {item.gallery.length > 1 ?
                          <>
                            <SliderBtn moveSlide={nextSlide} direction={"next"} />
                            <SliderBtn moveSlide={prevSlide} direction={"prev"} />
                          </>
                        :
                          null
                        }
                      </div>
                    ))}
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
  label: state.product.label
});

const mapDispatchToProps = dispatch => ({
  addQty: id => dispatch(addQuantity(id)),
  subtractQty: id => dispatch(subQuantity(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
