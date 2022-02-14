import React from 'react';
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
} from '../styles/Header.styled';
import Overlay from '../components/Overlay';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      overlay: false
    }
  }

  render() {
    // Get the modal
    // const modal = document.getElementById('myModal');

    // // Get the button that opens the modal
    // const btn = document.getElementById('overlay');

    // // When the user clicks on the button, open the modal
    // window.onload = () => {
    //   btn.onclick = () =>  {
    //     console.log('Cart Clicked!');
    //     modal.style.display = 'block';
    //   }
    // }

    // // When the user clicks anywhere outside of the modal, close it
    // window.onclick = function(event) {
    //   if (event.target == modal) {
    //     modal.style.display = 'none';
    //   }
    // }

    return(
      <>
        <NavContainer>
          <FiterButtonContainer>
            <FilterButton>All</FilterButton>
            <FilterButton>Clothes</FilterButton>
            <FilterButton>Tech</FilterButton>
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
            <CartIcon
              src={cartLogo}
              id='overlay'
              alt='Cart Logo'
              onClick={() => {
                console.log('Clicked!');
                this.setState({overlay: true});
              }}
              />
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

export default Header;