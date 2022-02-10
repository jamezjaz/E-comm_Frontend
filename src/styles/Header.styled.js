import styled from 'styled-components';

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 1rem 2.5rem 1rem 1.5rem;
  color: #1d1d22;
  
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

export const CartIcon = styled.img`
  position: relative;
  top: 0.5rem;
  width: 2rem;
`;

export const Select = styled.select`
  margin-right: 1rem;
  width: 2.5rem;
  border: none;
  background-color: #ffffff;
`;

export const SelectOption = styled.option`
  border: none;
  outline: none;

  &:hover {
    background-color: #ffffff;
    outline: none;
  }
`;
