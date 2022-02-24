import styled from 'styled-components';

export const Container = styled.div`
  margin: 2rem 4rem 2rem 4rem;
  color: #1d1f22;
`;

export const CategoryTitle = styled.h1`
  font-weight: normal;
  text-transform: capitalize;
  margin-top: 5rem;
`;

export const ProductContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  div {

    a:-webkit-any-link {
      text-decoration: none;
      color: inherit;
    }

    button {
      position: relative;
      left: 22rem;
      /* bottom: 5rem; */
      top: -7.5rem;
      background: none;
      max-width: 3.5rem;
      max-height: 3.5rem;
      /* padding: 0.5rem; */
      border: none;
      border-radius: 50%;
      /* margin-bottom: -5rem; */
      cursor: pointer;
      display: none;
    }

    &:hover {
      button {
        display: block;
      }
    }
  }
`;

export const ProductCard = styled.div`
  max-width: 600px;
  margin: 1rem 3rem 1rem 0;
  padding: 0 1rem;

  &:hover {
    background: #ffffff;
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  }

  p {
    font-weight: 300;
  }

  span {
    position: relative;
    top: -0.8rem;
    font-weight: 600;
  }
`;

export const Image = styled.img`
  width: 450px;
  height: 450px;
`;

export const CartIcon = styled.img`
  width: 3rem;
`;
