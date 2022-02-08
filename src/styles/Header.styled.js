import styled from 'styled-components';

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 1rem 2.5rem 1rem 1.5rem;
  color: #1d1d22;
  
  ul {
    list-style-type: none;
    display: flex;
    
    li {
      margin: 0 0.7rem;
      cursor: pointer;

      &:hover {
        color: #5ece7b;
        text-decoration: underline;
      }

      &:active {
        color: #5ece7b;
        text-decoration: underline;
      }
    }
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
