import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../assets/icons/logo.png';
import cartLogo from '../assets/icons/cart.png';
import {
  NavContainer,
  Image,
  CartIcon,
  Select,
  NavLinksContainer,
  NavLinks,
  CartCounter,
} from '../styles/Header.styled';
import Overlay from '../modal/Overlay';
import { changeCurrencyLabel } from '../redux/actions/actionCreators';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      overlay: false,
      loading: true
    }

    this.changeLabel = this.changeLabel.bind(this);
  }

  changeLabel(event) {
    const { labelChanger } = this.props;
    const { value } = event.target;
    labelChanger(value);
  }

  render() {
    setTimeout(() => {
      this.setState({loading: false})
    }, 2000);

    const { allCategories, addedProducts, currency } = this.props;
    const categoryArray = [];

    // pushes category properties of products to categories var
    allCategories?.map(cate => categoryArray.push(cate.name));

    // extracts the quantity array of nums
    const quantityArr = addedProducts.map(addedProd => {
      return addedProd.quantity;
    });

    // sums up the quantity array
    const qty = quantityArr.reduce((a,b) => a + b, 0);

    return(
      <>
        <NavContainer>
          <NavLinksContainer>
            {categoryArray.map((category, i) => (
              <Link
                to={category === 'all' ? '/' : `/${category}`}
                key={i}
              >
                <NavLinks
                  value={category}
                >
                  {category}  
                </NavLinks>  
              </Link>
            ))}
          </NavLinksContainer>
          <ul>
            <li>
              <Link to='/'><Image src={logo} alt='Logo' /></Link>
            </li>
          </ul>
          <div>
            <Select onChange={this.changeLabel} className="select">
              <option disable="true" hidden>$</option>
              {this.state.loading === false ?
                currency?.categories[0]?.products[0]?.prices.map(price => (
                  <option
                    key={price.currency.symbol}
                    value={price.currency.label}
                  >
                    {`${price.currency.symbol} ${price.currency.label}`}
                  </option>
                ))
              :
                null
              }
            </Select>
            <>
              {/* <CartCounter>{addedProductsLen > 0 ? addedProductsLen : null}</CartCounter> */}
              <CartCounter>{qty > 0 ? qty : null}</CartCounter>
              <CartIcon
                src={cartLogo}
                id='overlay'
                alt='Cart Logo'
                onClick={() => {
                  this.setState({overlay: true});
                }}
              />
            </>
          </div>
        </NavContainer>

        {/* Overlay component */}
        {this.state.overlay && (
          <Overlay
            // isopen={this.state.overlay}
            closeModal={() => this.setState({overlay: false})}
          />
        )}
      </>
    );
  }
};

const mapStateToProps = state => ({
  allCategories: state.product.categories.categories,
  addedProducts: state.product.addedProducts,
  label: state.product.label,
  currency: state.product.categories,
  loading: state.product.loading
});

const mapDispatchToProps = dispatch => ({
  labelChanger: label => dispatch(changeCurrencyLabel(label)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);