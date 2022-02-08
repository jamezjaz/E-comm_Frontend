import React from 'react';
import logo from '../assets/icons/logo.png';
import cartLogo from '../assets/icons/cart2.png';
import { NavContainer, Image, Select, SelectOption } from '../styles/Header.styled';

class Header extends React.Component {
  render() {
    return(
      <>
        <NavContainer>
          <ul>
            <li>All</li>
            <li>Clothes</li>
            <li>Tech</li>
          </ul>
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
            <Image src={cartLogo} alt='Cart Logo' />
          </div>
        </NavContainer>
      </>
    );
  }
};

export default Header;