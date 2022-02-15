import styled from 'styled-components';

export const Container = styled.div`
  margin: 2rem 4rem 2rem 4rem;
  color: #1d1f22;
`;

export const CategoryTitle = styled.h1`
  font-weight: normal;
  text-transform: capitalize;
`;

export const ProductContent = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ProductCard = styled.div`
  max-width: 600px;
  margin: 1rem 3rem 1rem 0;
  padding: 0 1rem;

  div {
    position: relative;
    left: 22rem;
    bottom: 5rem;
    background: #5ECE7B;
    max-width: 3rem;
    padding: 0.5rem;
    border: none;
    border-radius: 50%;
    margin-bottom: -5rem;
    cursor: pointer;
    display: none;
  }

  &:hover {
    background: #ffffff;
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
    div {
      display: block;
    }
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
`;

export const CartIcon = styled.img``;
