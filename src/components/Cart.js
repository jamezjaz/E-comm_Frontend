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
  RemoveProduct
} from '../styles/Cart.styled';
import { price } from '../container/constant';
import {
  addQuantity,
  removeFromCart,
  subQuantity
} from '../redux/actions/actionCreators';

class Cart extends React.Component {
  constructor() {
    super();

    this.handleAddQuantity = this.handleAddQuantity.bind(this);
    this.handleSubQuantity = this.handleSubQuantity.bind(this);
    this.handleRemoveProduct = this.handleRemoveProduct.bind(this);
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
    
    return(
      <>
        <Header />
        <Title>CART</Title>
        {`${addedProductsLen}` &&
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
                    <Image src={item.gallery[0]} alt='Product' />
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
