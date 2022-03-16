import styled from 'styled-components';

export const Container = styled.div`
  margin: 2rem 4rem 2rem 4rem;
  color: #1d1f22;

  h4 {
    margin-top: 5rem;
  }
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

    small {
      margin: 0.25rem;
      padding: 0.25rem;
      font-size: 0.8rem;
      font-weight: bold;
      position: relative;
      top: -5.8rem;
      left: 6rem;
      background-color: ${props => props.optionsColor || '#d6d3d3'};
      max-width: 5rem;
      min-width: 1.5rem;
      /* display: none; */
      cursor: pointer;

      &:active {
        color: #ffffff;
        background-color: #1d1f22;
      }
    }

    button {
      position: absolute; 
      width: 3rem;
      height: 3rem;
      border: none;
      background-color: #ffffff;
      border-radius: 50%;
      cursor: pointer;
      display: none;
    }

    &:hover {
      button,
      .cartBtnContainer {
        display: block;
      }

      .optionContainer {
        display: inline;
      }
    }
  }
`;

export const ProductCard = styled.div`
  max-width: 600px;
  margin: 1rem 3rem 1rem 0;
  padding: 0 1rem 3rem 1rem ;
  
  // out of stock style props
  opacity: ${props => props.Opacity };
  pointer-events: ${props => props.PointerEvents};
  
  &:hover {
    background: #ffffff;
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  }

  h2 {
    position: absolute;
    margin: 12rem 0 0 8rem;
    color: rgb(73, 72, 72);
    font-weight: lighter;
    z-index: 999;
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

export const ImageContainer = styled.div`
  width: 450px;
  height: 500px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const OptionContainer = styled.div`
  /* position: absolute; */
  display: inline;

  .capacity {
    margin: 0.25rem;
    padding: 0.25rem;
    font-size: 0.8rem;
    font-weight: bold;
    position: relative;
    top: -5.8rem;
    left: 7rem;
    background-color: ${props => props.optionsColor || '#d6d3d3'};
    max-width: 5rem;
    min-width: 1.5rem;
    cursor: pointer;
  }

  .active {
    background-color: #000000;
    color: #ffffff;
  }
`;

export const Option = styled.span`
  position: relative;
  top: -6.8rem;
  left: 12rem;
  padding: 0.25rem 0.7rem;
  margin: 0.15rem;
  background-color: ${props => props.OptionColor || '#d6d3d3'};
  border: 1px solid black;
  cursor: pointer;
`;

export const CartBtnContainer = styled.div`
  position: relative;
  left: 22rem;
  top: -8rem;
  background: none;
  display: none;
`;

export const CartIcon = styled.img`
  width: 3rem;
`;
