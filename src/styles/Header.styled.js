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
  }
`;

export const FiterButtonContainer = styled.div`
  display: flex;
  margin: 0 2.5rem;
`;

export const FilterButton = styled.button`
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

export const Select = styled.select`
  margin-right: 1rem;
  width: 2.5rem;
  border: none;
  outline: none;
  background-color: #ffffff;
  box-shadow: none;

  &:hover {
    outline: none;
  }
`;
