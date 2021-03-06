import styled from 'styled-components';

export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5rem;

  // out of stock styles
  .outOfStock {
    opacity: 0.4;
  }

  .mainImg {
    position: relative;
    left: 5rem;
  }

  .outOfStockSm {
    @media (max-width: 658px) {
      position: relative;
      top: 14rem;
      left: -8rem;
    }
  }
`;

export const MinorImageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MinorImage = styled.img`
  width: 5rem;
  margin-bottom: 2rem;
`;

export const MainImageContainer = styled.div`
  width: 25rem;
  margin-left: -10rem;

  h2 {
    position: absolute;
    margin: 8rem 0 0 5rem;
    color: rgb(73, 72, 72);
    font-weight: lighter;
    z-index: 999;

    @media (max-width: 1322px) {
      font-size: 1rem;
      margin: 5rem 0 0 2rem;
    }
  }

  @media (max-width: 1600px) {
    margin: 0 3rem;
  }
`;

export const MainImage = styled.img`
  width: 85%;

  @media (max-width: 1600px) {
    min-width: 12rem;
  }
`;

export const DetailsContainer = styled.div`
  margin-right: 10rem;
  max-width: 35rem;
  h3 {
    color: #1d1f22;
    font-size: 1.7rem;
  }

  p:nth-child(1),
  p:nth-child(2) {
    font-weight: bold;
  }

  .active {
    background-color: black;
    color: white;
  }

  .activeSwatch {
    border: 3px red solid;
  }

  @media (max-width: 658px) {
    position: relative;
    top: 17rem;
    left: -12rem;
  }
`;

export const SubTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 300 !important;
  margin-top: -2rem;
`;

export const OptionName = styled.p`
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap');

  text-transform: uppercase;
  font-family: 'Roboto Condensed', sans-serif;
`;

export const OptionButton = styled.button`
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap');

  max-width: 5rem;
  min-width: 3rem;
  padding: 0.25rem;
  height: 2rem;
  margin-right: 0.25rem;
  background-color: ${props => props.OptionColor || "white"};
  cursor: pointer;
  font-family: 'Roboto Condensed', sans-serif;
`;

export const PriceContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap');

  font-family: 'Roboto Condensed', sans-serif;
`;

export const AddToCartButton = styled.button`
  padding: 0.8rem 4.5rem;
  color: #ffffff;
  background-color: #5ece7b;
  border: none;
  min-width: 10rem;
  cursor: pointer;

  &:hover {
    background-color: #31a14f;
  }

  @media (max-width: 658px) {
    font-size: 0.6rem;
    min-width: 11rem;
    padding: 0.8rem 3rem;
  }
`;

export const Description = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  color: #1d1f22;
  padding: 1rem 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;

  h1,
  p {
    font-weight: 400 !important;
  }
`;