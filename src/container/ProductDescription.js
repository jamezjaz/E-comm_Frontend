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
  OptionButton,
  SubTitle
} from '../styles/ProductDescription.styled';
import { price, withRouter } from './constant';
import parse from 'html-react-parser';
import { addToCart } from '../redux/actions/actionCreators';

class ProductDescription extends React.Component {

  render() {
    const { categories: {categories}, params, label='USD', addProductsToCart } = this.props;
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

    const addProductToCart = id => {
      console.log('Added from description');
      addProductsToCart(id);
    };

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
                        <OptionButton key={clothAttr.id}>{clothAttr.displayValue}</OptionButton>
                      ))}
                    </div>
                  }
                  {product.category === 'tech' &&
                    <div>
                      {attributes[key].items.map(techAttr => (
                        <OptionButton key={techAttr.id}>{techAttr.displayValue}</OptionButton>
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
            <AddToCartButton
              onClick={() => { addProductToCart(product.id); }}
            >
              ADD TO CART
            </AddToCartButton>
            <Description>{parse(product.description)}</Description>
          </DetailsContainer>
        </DescriptionContainer>
      </>
    );
  }
};

const mapStateToProps = state => ({
  categories: state.product.categories,
});

const mapDispatchToProps = dispatch => ({
  addProductsToCart: id => dispatch(addToCart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductDescription));