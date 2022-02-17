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
  Title
} from '../styles/Cart.styled';
import { price } from '../container/constant';

class Cart extends React.Component {
  render() {
    const { addedProducts, label='USD' } = this.props;
    const addedProductsLen = addedProducts.length;
    console.log('New Pro:', addedProducts, 'Count:', addedProductsLen);
    
    return(
      <>
        <Header />
        <Title>CART</Title>
        {addedProductsLen &&
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
                    <QtyButton>+</QtyButton>
                    <Count>{item.quantity}</Count>
                    <QtyButton>-</QtyButton>
                  </ButtonsContainer>
                  <ImageContainer>
                    <Image src={item.gallery[0]} alt='Product' />
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
})

// const mapStateToProps = state => {
//   console.log('State', state);
// };

export default connect(mapStateToProps, null)(Cart);
