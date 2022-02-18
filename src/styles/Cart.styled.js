import styled from 'styled-components';

export const Title = styled.h1`
  margin-left: 4.5rem;
`;

export const CartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3rem 5rem 0 4.5rem;
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
    font-size: 2rem;
    font-weight: 500;
    margin-top: -0.01rem;
  }

  p:nth-child(3) {
    font-weight: bold;
  }
`;

export const SubTitle = styled.p`
  font-size: 1.5rem;
  margin-top: -1.5rem;
`;

export const OptionButton = styled.button`
  max-width: 6rem;
  padding: 0.5rem;
  height: 2.5rem;
  margin-right: 0.5rem;
  background-color: #ffffff;
  cursor: pointer;

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
  width: 2.5rem;
  height: 2.5rem;
  /* margin-right: 0.5rem; */
  background-color: #ffffff;
  cursor: pointer;
`;

export const Count = styled.p`
  font-weight: bold;
  text-align: center;
  margin: 2rem 0;
`;

export const ImageContainer = styled.div`
  display: flex;
`;

export const Image = styled.img`
  width: 10rem;
  height: 10.5rem;
`;

export const RemoveProduct = styled.button`
  color: #ffffff;
  background-color: rgb(156, 9, 9);
  font-weight: bold;
  height: 2rem;
  margin-left: 0.5rem;
  border: none;
  border-radius: 2rem;
  align-self: center;
  cursor: pointer;

  &:hover {
    background-color: red;
  }
`;
