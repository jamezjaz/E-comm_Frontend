import React from 'react';
import { connect } from 'react-redux';
import logo from '../assets/icons/logo.png';
import cartLogo from '../assets/icons/cart.png';
import {
  NavContainer,
  Image,
  CartIcon,
  Select,
  SelectOption,
  FiterButtonContainer,
  FilterButton,
  CartCounter,
} from '../styles/Header.styled';
import Overlay from '../components/Overlay';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      overlay: false
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { handleFilter } = this.props;
    const { value } = event.target;
    handleFilter(value);
  }

  render() {
    // Get the modal
    // const modal = document.getElementById('myModal');

    // // When the user clicks anywhere outside of the modal, close it
    // window.onclick = function(event) {
    //   if (event.target == modal) {
    //     modal.style.display = 'none';
    //   }
    // }

    const { allCategories, addedProducts } = this.props;
    const categoryArray = [];
    const addedProductsLen = addedProducts.length;

    // pushes category properties of products to categories var
    allCategories?.map(cate => categoryArray.push(cate.name));

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
              <Image src={logo} alt='Logo' />
            </li>
          </ul>
          <div>
            <Select>
              <SelectOption disable="true" hidden>$</SelectOption>         
              <SelectOption value="$">$ USD</SelectOption>
              <SelectOption value="£">£ EUR</SelectOption>
              <SelectOption value="A$">A$ AUD</SelectOption>
              <SelectOption value="₽">₽ RUB</SelectOption>
            </Select>
            <>
              <CartCounter>{addedProductsLen > 0 ? addedProductsLen : null}</CartCounter>
              <CartIcon
                src={cartLogo}
                id='overlay'
                alt='Cart Logo'
                onClick={() => {
                  console.log('Clicked!');
                  this.setState({overlay: true});
                }}
              />
            </>
          </div>
        </NavContainer>

        {/* Overlay component */}
        {this.state.overlay && (
          <Overlay
            isopen={this.state.overlay}
            // closeModal={() => this.setState({overlay: false})}
          />
        )}
      </>
    );
  }
};

const mapStateToProps = state => ({
  allCategories: state.product.categories.categories,
  addedProducts: state.product.addedProducts,
});

export default connect(mapStateToProps, null)(Header);