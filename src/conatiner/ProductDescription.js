import React from 'react';
import Header from './Header';
import cloth from '../assets/images/cloth.png';
import {
  AddToCartButton,
  Description,
  DescriptionContainer,
  DetailsContainer,
  MainImage,
  MainImageContainer,
  MinorImage,
  MinorImageContainer,
  SizeButton,
  SubTitle
} from '../styles/ProductDescription.styled';

class ProductDescription extends React.Component {
  render() {
    return(
      <>
        <Header />
        <DescriptionContainer>
          <MinorImageContainer>
            <MinorImage src={cloth} alt='Product Image' />
            <MinorImage src={cloth} alt='Product Image' />
            <MinorImage src={cloth} alt='Product Image' />
          </MinorImageContainer>
          <MainImageContainer>
            <MainImage src={cloth} alt='Main Image' />
          </MainImageContainer>
          <DetailsContainer>
            <h3>Apollo</h3>
            <SubTitle>Running Short</SubTitle>
            <div>
              <p>SIZE:</p>
              <div>
                <SizeButton>XS</SizeButton>
                <SizeButton>S</SizeButton>
                <SizeButton>M</SizeButton>
                <SizeButton>L</SizeButton>
              </div>
            </div>
            <div>
              <p>PRICE:</p>
              <p>$50.00</p>
            </div>
            <AddToCartButton>ADD TO CART</AddToCartButton>
            <Description>
            Find stunning women's cocktail dresses
            <br />
            and party dresses. Stand out in lace and
            <br />
            metallic cocktail dresses and party
            <br />
            dresses from all your favorite brands.
            </Description>
          </DetailsContainer>
        </DescriptionContainer>
      </>
    );
  }
};

export default ProductDescription;