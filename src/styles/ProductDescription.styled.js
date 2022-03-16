import styled from 'styled-components';

export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5rem;
`;

export const MinorImageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MinorImage = styled.img`
  width: 7rem;
  margin-bottom: 2rem;
`;

export const MainImageContainer = styled.div`
  width: 38rem;
  margin-left: -10rem;

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
    font-size: 2.5rem;
  }

  p:nth-child(1),
  p:nth-child(2) {
    font-weight: bold;
  }
`;

export const SubTitle = styled.p`
  font-size: 2rem;
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

  max-width: 6rem;
  min-width: 3rem;
  padding: 0.5rem;
  height: 2.5rem;
  margin-right: 0.5rem;
  background-color: ${props => props.OptionColor || "white"};
  cursor: pointer;
  font-family: 'Roboto Condensed', sans-serif;
`;

export const PriceContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap');

  font-family: 'Roboto Condensed', sans-serif;
`;

export const AddToCartButton = styled.button`
  padding: 1rem 5rem;
  color: #ffffff;
  background-color: #5ece7b;
  border: none;
  min-width: 10rem;
  cursor: pointer;

  &:hover {
    background-color: #31a14f;
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