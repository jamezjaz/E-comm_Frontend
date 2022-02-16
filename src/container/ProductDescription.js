import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
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
import { price, withRouter } from './constant';

class ProductDescription extends React.Component {

  render() {
    const { categories: {categories}, params, label='USD' } = this.props;
    console.log('Desc Categoriezz', categories);

    const productId = params.id;
    // const { id } = params;

    const [product] = categories[0].products?.filter(prod => prod.id === productId);

    // reduces attributes array to an obj
    const attributes = product.attributes.reduce((acc, item) => {
      acc[item.id] = item
      return acc
    }, {});
    console.log('Att', attributes);

    return(
      <>
        <Header />
          <DescriptionContainer>
          <MinorImageContainer>
            {product.gallery.map(image => (
              <div key={image}>
                <MinorImage src={image} alt={product.name} />
              </div>
            ))}
          </MinorImageContainer>
          <MainImageContainer>
            <MainImage src={product.gallery[0]} alt={product.name} />
          </MainImageContainer>
          <DetailsContainer>
            <h3>{product.brand}</h3>
            <SubTitle>{product.name}</SubTitle>
            <div>
              {Object.keys(attributes).map((key, i) => (
                <div key={i}>
                  <p>{attributes[key].name}:</p>
                  {product.category === 'clothes' &&
                    <div>
                      {attributes[key].items.map(clothAttr => (
                        <SizeButton key={clothAttr.id}>{clothAttr.displayValue}</SizeButton>
                      ))}
                    </div>
                  }
                  {product.category === 'tech' &&
                    <div>
                      {attributes[key].items.map(techAttr => (
                        <SizeButton key={techAttr.id}>{techAttr.displayValue}</SizeButton>
                      ))}
                    </div>
                  }
                </div>
              ))}
            </div>
            <div>
              <p>PRICE:</p>
              <p>{price(product.prices, label)}</p>
            </div>
            <AddToCartButton>ADD TO CART</AddToCartButton>
            {/* <Description>
            Find stunning women's cocktail dresses
            <br />
            and party dresses. Stand out in lace and
            <br />
            metallic cocktail dresses and party
            <br />
            dresses from all your favorite brands.
            </Description> */}
            <Description>
              {product.description}
            </Description>
          </DetailsContainer>
        </DescriptionContainer>
      </>
    );
  }
};

const mapStateToProps = state => ({
  categories: state.product.categories,
});

export default connect(mapStateToProps, null)(withRouter(ProductDescription));