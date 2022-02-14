import React from 'react';
import Header from '../container/Header';
import cloth from '../assets/images/cloth.png';
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
  SizeButton,
  SubTitle,
  Title
} from '../styles/Cart.styled';

class Cart extends React.Component {
  render() {
    return(
      <>
        <Header />
        <Title>CART</Title>
        <CartContainer>
          <LeftContent>
            <CartDetails>
              <h3>Apollo</h3>
              <SubTitle>Running Short</SubTitle>
              <p>$50.00</p>
              <div>
                <SizeButton>S</SizeButton>
                <SizeButton>M</SizeButton>
              </div>
            </CartDetails>
          </LeftContent>
          <RightContent>
            <ButtonsContainer>
              <QtyButton>+</QtyButton>
              <Count>2</Count>
              <QtyButton>-</QtyButton>
            </ButtonsContainer>
            <ImageContainer>
              <Image src={cloth} alt='Product' />
            </ImageContainer>
          </RightContent>
        </CartContainer>
      </>
    );
  }
};

export default Cart;
