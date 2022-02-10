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

export const SizeButton = styled.button`
  width: 3rem;
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

export const ImageContainer = styled.div``;

export const Image = styled.img``;
