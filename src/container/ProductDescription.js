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
  constructor() {
    super();

    this.state = {
      position: 0
    }
  };

  render() {
    const { categories: {categories}, params, label, addProductsToCart } = this.props;

    const productId = params.id;
    // const { id } = params;

    const [product] = categories[0].products?.filter(prod => prod.id === productId);

    // reduces attributes array to an obj
    const attributes = product.attributes.reduce((acc, item) => {
      acc[item.id] = item
      return acc
    }, {});

    const addProductToCart = id => {
      addProductsToCart(id);
    };

    return(
      <>
        <Header />
          <DescriptionContainer>
            <MinorImageContainer>
              {product.gallery.map((image, index) => (
                <div key={image}>
                  <MinorImage
                    src={image}
                    alt={product.name}
                    onClick={() => {this.setState({position: index})}}
                  />
                </div>
              ))}
            </MinorImageContainer>
            <MainImageContainer>
              <MainImage
                src={product.gallery[this.state.position]}
                alt={product.name}
              />
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
                      {/* {attributes[key].items.map(techAttr => (
                        <OptionButton key={techAttr.id}>{techAttr.displayValue}</OptionButton>
                      ))} */}
                      {attributes[key].type === 'swatch' &&
                        <>
                          {attributes[key].items.map(color => (
                            <>
                              <OptionButton
                                key={color.id}
                                OptionColor={color.displayValue}
                              >
                                {/* {color.displayValue} */}
                              </OptionButton>
                            </>
                          ))}
                        </>
                      }
                      {attributes[key].type === 'text' &&
                        <>
                          {attributes[key].items.map(capacity => (
                            <>
                              <OptionButton key={capacity.id}>{capacity.displayValue}</OptionButton>
                            </>
                          ))}
                        </>
                      }
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
  label: state.product.label,
});

const mapDispatchToProps = dispatch => ({
  addProductsToCart: id => dispatch(addToCart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductDescription));