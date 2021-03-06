import styled from 'styled-components';

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  /* margin: 0 1.5rem 1rem 1.5rem; */
  padding: 0.5rem 3.5rem 0 1rem;
  color: #1d1d22;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #ffffff;
  z-index: 2;
  
  ul {
    list-style-type: none;

    @media (max-width: 600px) {
      position: absolute;
      max-width: 5rem;
      left: -2rem;
    }
  }
`;

export const NavLinksContainer = styled.div`
  display: flex;
  margin: 0 2.5rem;
  padding-top: 1rem;
`;

export const NavLinks = styled.button`
  text-transform: uppercase;
  background-color: #ffffff;
  border: none;

  &:hover {
    color: #5ece7b;
      border-bottom: 0.15rem #5ece7b solid;
  }

  &:focus {
    color: #5ece7b;
      border-bottom: 0.15rem #5ece7b solid;
  }
`;

export const Image = styled.img`
  margin-left: 1rem;
  width: 1.5rem;
`;

export const CartCounter = styled.div`
  position: absolute;
  right: 3rem;
  top: 0.5rem;
  border-radius: 50%;
  padding: 0 0.35rem;
  background-color: #1d1f22;
  color: #ffffff;
  font-weight: 700;
  z-index: 2;
`;

export const CartIcon = styled.img`
  position: relative;
  top: 0.5rem;
  width: 2rem;
  cursor: pointer;
`;

// export const Select = styled.select`
//   margin-right: 1rem;
//   width: 2.5rem;
//   border: none;
//   outline: none;
//   background-color: #ffffff;
//   box-shadow: none;

//   &:hover {
//     outline: none;
//   }
// `;

export const DropDownContainer = styled.div`
  position: absolute;
  right: 7rem;
  top: 1.3rem;
  font-size: 1.125rem;
  line-height: 150%;
  color: #1d1f22;
  cursor: pointer;
`;

export const DropDownHeader = styled.div`
  span {
    position: relative;
    top: 0.5rem;
    font-size: 1.5rem;
  }
`;

export const DropDownListContainer = styled.div`
  position: absolute;
  left: -2rem;
  box-shadow: 0 2px 5px rgb(0 0 0 / 0.3);
  /* padding-right: 1.2rem; */
`;

export const DropdownDismiss = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const DropDownList = styled.ul`
  list-style-type: none;
  padding: 0 1rem;
`;

export const ListItem = styled.li`
  display: flex;

  &:hover {
    background-color: rgba(194, 197, 199, 0.953);
  }

  span:first-child {
    margin-right: 0.5rem;
  }
`;
