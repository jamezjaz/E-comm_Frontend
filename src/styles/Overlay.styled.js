import styled from 'styled-components';

export const OverlayContainer = styled.div`
  position: fixed;
	top: 3.9rem;
	right: 0;
	bottom: 0;
	left: 0;
	background: rgba(194, 190, 190, 0.8);
	z-index: 2;
	/* opacity: 0; */
	-webkit-transition: opacity 400ms ease-in;
	-moz-transition: opacity 400ms ease-in;
	transition: opacity 400ms ease-in;

  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export const Modal = styled.div`
  background-color: #ffffff;
  padding: 0.5rem 0.8rem;
  max-width: 30rem;
  height: auto;
  /* border: 1px black solid; */
  position: absolute;
	/* top: 0; */
	right: 3.5rem;
`;

export const OverlayContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const OverlayLeft = styled.div`
  margin: 0 0.5rem 0.7rem 0;

  h3 {
    font-size: 1rem;
    font-weight: 300;
    color: #414142;
    margin-top: -0.25rem;
  }

  p:nth-child(3) {
    font-weight: bold;
    margin-top: -0.5rem;
    margin-bottom: -0.01rem;
  }
`;

export const OverlayRight = styled.div`
  display: flex;
  margin-left: 1.5rem;
`;

export const SubTitle = styled.p`
  font-size: 0.8rem;
  color: #414142;
  font-weight: 300;
  margin-top: -1rem;
`;

export const OptionButton = styled.button`
  max-width: 5rem;
  /* padding: 0.5rem; */
  height: 1.5rem;
  margin: 0 0.5rem 0.25rem 0;
  background-color: #ffffff;
  font-size: 0.7rem;
  cursor: pointer;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-right: 1rem; */
`;

export const QtyButton = styled.button`
  /* width: 2rem; */
  /* height: 2rem; */
  margin-right: 0.25rem;
  background-color: #ffffff;
  cursor: pointer;
`;

export const Count = styled.p`
  font-weight: bold;
  text-align: center;
  margin: 1.5rem 0;
`;

export const ImageContainer = styled.div``;

export const Image = styled.img`
  width: 10.5rem;
  height: 7rem;
`;

export const TotalContainer = styled(OverlayContent)`
  justify-content: space-between;
  font-size: 1rem;
  font-weight: bold;
  margin: 0.5rem 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ViewBagButton = styled.button`
  padding: 1rem 3rem;
  font-size: 0.7rem;
  color: #1d1f22;
  background-color: #ffffff;
  cursor: pointer;
  margin-right: 0.5rem;

  &:hover {
    background-color: #fdfbfb;
  }
`;

export const CheckOutButton = styled(ViewBagButton)`
  color: #ffffff;
  background-color: #5ece7b;
  border: none;
  margin-right: 0;
  margin-left: 0.5rem;

  &:hover {
    background-color: #81e69c;
  }
`;
