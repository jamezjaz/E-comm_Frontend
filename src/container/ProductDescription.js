import React from 'react';
import { connect } from 'react-redux';
import parse from 'html-react-parser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
      position: 0,
      selectedBtn: null
    }
  };

  render() {
    const { categories, params, label, addProductsToCart, options, resetOption } = this.props;

    const productId = params.id;
    // const { id } = params;

    const [product] = categories[0]?.products?.filter(prod => prod.id === productId);

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

    const alertMsg = option => {
      toast.success(`${option} color selected. Click on Add To Cart button`);
    };

    return(
      <>
        <Header />
          <ToastContainer
            position="top-center"
            autoClose={2000}
          />
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
                      {attributes[key].items.map((clothAttr, index) => (
                        <OptionButton
                          key={clothAttr.id}
                          className={this.state.selectedBtn === index ? 'active' : ''}
                          onClick={() => {
                            selectOptions({ clothes: clothAttr.displayValue });
                            this.setState({selectedBtn: index});
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
                              onClick={() => {
                                selectOptions({ swatch: color.displayValue });
                                alertMsg(color.displayValue);
                              }}
                              OptionColor={color.displayValue}
                            />
                          ))}
                        </div>
                      }
                      {attributes[key].type === 'text' &&
                        <div>
                          {attributes[key].items.map((text, idx) => (
                            <OptionButton
                              key={text.id}
                              className={this.state.selectedBtn === idx ? 'active' : ''}
                              onClick={() => {
                                selectOptions({ text: text.displayValue });
                                this.setState({selectedBtn: idx});
                              }}
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
  categories: state.product.categories.categories,
  label: state.product.label,
  options: state.product.options
});

const mapDispatchToProps = dispatch => ({
  addProductsToCart: (id, options) => dispatch(addToCart(id, options)),
  selectAttr: option => dispatch(selectAttributes(option)),
  resetOption: () => dispatch(clearOptions())
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductDescription));