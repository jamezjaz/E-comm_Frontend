import React from 'react';
import { connect } from 'react-redux';
import parse from 'html-react-parser';
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
  OptionName,
  PriceContainer,
  SubTitle
} from '../styles/ProductDescription.styled';
import { price, withRouter } from './constant';
import {
  addToCart,
  clearOptions,
  selectAttributes
} from '../redux/actions/actionCreators';

class ProductDescription extends React.Component {
  constructor() {
    super();

    this.state = {
      position: 0
    }
  };

  render() {
    const { categories: {categories}, params, label, addProductsToCart, options, resetOption } = this.props;

    const productId = params.id;
    // const { id } = params;

    const [product] = categories[0].products?.filter(prod => prod.id === productId);

    // reduces attributes array to an obj
    const attributes = product.attributes.reduce((acc, item) => {
      acc[item.id] = item
      return acc
    }, {});

    const addProductToCart = (id, options) => {
      addProductsToCart(id, options);
      resetOption();
    };

    const selectOptions = option => {
      const { selectAttr } = this.props;
      selectAttr(option);
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
                  <OptionName>{attributes[key].name}:</OptionName>
                  {product.category === 'clothes' &&
                    <>
                      {attributes[key].items.map(clothAttr => (
                        <OptionButton
                          key={clothAttr.id}
                          onClick={() => {
                            selectOptions({ clothes: clothAttr.displayValue })
                          }}
                        >
                          {clothAttr.displayValue}
                        </OptionButton>
                      ))}
                    </>
                  }
                  {product.category === 'tech' &&
                    <>
                      {attributes[key].type === 'swatch' &&
                        <div>
                          {attributes[key].items.map(color => (
                            <OptionButton
                              key={color.id}
                              onClick={() => selectOptions({ swatch: color.displayValue })}
                              OptionColor={color.displayValue}
                            />
                          ))}
                        </div>
                      }
                      {attributes[key].type === 'text' &&
                        <div>
                          {attributes[key].items.map(text => (
                            <OptionButton
                              key={text.id}
                              onClick={() => selectOptions({ text: text.displayValue })}
                            >
                              {text.displayValue}
                            </OptionButton>
                          ))}
                        </div>
                      }
                    </>
                  }
                </div>
              ))}
            </div>
            <PriceContainer>
              <p>PRICE:</p>
              <p>{price(product.prices, label)}</p>
            </PriceContainer>
            <AddToCartButton
              onClick={() => {
                product.attributes.length === options.length ?
                  addProductToCart(product.id, options)
                :
                  alert('Select all product attributes');
                  resetOption();
                  console.log('Oppp', options);
              }}
              disabled={product.inStock === false}
              style={{ backgroundColor: product.inStock === false ? '#31a14f' : '' }}
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
  options: state.product.options
});

const mapDispatchToProps = dispatch => ({
  addProductsToCart: (id, options) => dispatch(addToCart(id, options)),
  selectAttr: option => dispatch(selectAttributes(option)),
  resetOption: () => dispatch(clearOptions())
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductDescription));