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
  FiterButtonContainer,
  FilterButton,
  CartCounter,
} from '../styles/Header.styled';
import Overlay from '../modal/Overlay';
import { changeCurrencyLabel } from '../redux/actions/actionCreators';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      overlay: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.changeLabel = this.changeLabel.bind(this);
  }

  handleChange(event) {
    const { handleFilter } = this.props;
    const { value } = event.target;
    handleFilter(value);
  }

  changeLabel(event) {
    const { labelChanger } = this.props;
    const { value } = event.target;
    labelChanger(value);
  }

  render() {
    const { allCategories, addedProducts, currency, loading } = this.props;
    const categoryArray = [];
    const addedProductsLen = addedProducts.length;

    // pushes category properties of products to categories var
    allCategories?.map(cate => categoryArray.push(cate.name));

    console.log('Load', loading);
    
    return(
      <>
        <NavContainer>
          <FiterButtonContainer>
           {categoryArray.map((category, i) => (
              <FilterButton
                key={i}
                value={category}
                onClick={this.handleChange}
              >
                {category}
              </FilterButton>
           ))}
          </FiterButtonContainer>
          <ul>
            <li>
              <Link to='/'><Image src={logo} alt='Logo' /></Link>
            </li>
          </ul>
          <div>
            <Select onChange={this.changeLabel} className="select">
              <option disable="true" hidden>$</option>
              {loading === false ?
                currency?.map(price => (
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
              <CartCounter>{addedProductsLen > 0 ? addedProductsLen : null}</CartCounter>
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
  currency: state.product.categories.categories[0].products[0].prices,
  loading: state.product.loading
});

const mapDispatchToProps = dispatch => ({
  labelChanger: label => dispatch(changeCurrencyLabel(label)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);