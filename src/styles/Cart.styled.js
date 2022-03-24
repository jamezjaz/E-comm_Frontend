import styled from 'styled-components';

export const Title = styled.h1`
  margin-left: 4.5rem;
  font-size: 1.5rem;
`;

export const CartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 5rem 0 4.5rem;
  border-top: 1px #f2f2f2 solid;
  max-width: 1400px;

  @media (max-width:868px) {
    display: block;
  }
`;

export const LeftContent = styled.div`
  margin-top: 1rem;
`;

export const CartDetails = styled.div`
  h3 {
    color: #1d1f22;
    font-size: 1.5rem;
    font-weight: 500;
    margin-top: -0.01rem;
  }

  p:nth-child(3) {
    font-weight: bold;
    font-size: 0.8rem;
  }
`;

export const SubTitle = styled.p`
  font-size: 1rem;
  margin-top: -1.5rem;
`;

export const OptionContainer = styled.div`
  .optionBtnTech {
    top: -4.5rem;
  }
`;

export const OptionName = styled.p`
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap');

  text-transform: uppercase;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: lighter !important;
  font-size: 0.8rem;
`;

export const OptionButton = styled.button`
  position: relative;
  top: -2rem;
  left: 10rem;
  max-width: 5rem;
  min-width: 3rem;
  padding: 0.25rem;
  height: 1.8rem;
  margin-right: 0.5rem;
  background-color: ${props => props.BgColor || '#ffffff'};
  cursor: pointer;
  font-family: 'Source Sans Pro', sans-serif;

  &:focus {
    color: #ffffff;
    background-color: #1d1f22;
  }
`;

export const RightContent = styled.div`
  display: flex;
  margin-top: 1.5rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 1rem;
`;

export const QtyButton = styled.button`
  width: 2rem;
  height: 2rem;
  /* margin-right: 0.5rem; */
  background-color: #ffffff;
  cursor: pointer;
`;

export const Count = styled.p`
  font-weight: bold;
  text-align: center;
  margin: 1.5rem 0;
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 8rem;
  height: 8rem;
`;

export const Image = styled.img`
  width: 7rem;
  height: 100%;
  object-fit: contain;
`;

export const EmptyCartHeader = styled.h2`
  text-align: center;
`;
