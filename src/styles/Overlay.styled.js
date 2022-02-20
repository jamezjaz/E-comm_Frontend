import styled from 'styled-components';

export const OverlayContainer = styled.div`
  position: fixed;
	top: 5.5rem;
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
  padding: 1.5rem;
  max-width: 28rem;
  height: auto;
  border: 1px black solid;
  position: absolute;
	top: 4rem;
	right: 3.5rem;
`;

export const OverlayContent = styled.div`
  display: flex;
`;

export const OverlayLeft = styled.div`
  margin-right: 1.5rem;

  h3 {
    font-size: 1.5rem;
    font-weight: 300;
    color: #414142;
  }

  p:nth-child(3) {
    font-weight: bold;
  }
`;

export const OverlayRight = styled.div`
  display: flex;
  margin-left: 1.5rem;
`;

export const SubTitle = styled.p`
  font-size: 1.3rem;
  color: #414142;
  font-weight: 300;
  margin-top: -1rem;
`;

export const OptionButton = styled.button`
  max-width: 6rem;
  padding: 0.5rem;
  height: 2.5rem;
  margin-right: 0.5rem;
  background-color: #ffffff;
  cursor: pointer;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 1rem;
`;

export const QtyButton = styled.button`
  width: 2rem;
  height: 2rem;
  background-color: #ffffff;
  cursor: pointer;
`;

export const Count = styled.p`
  font-weight: bold;
  text-align: center;
  margin: 2.5rem 0;
`;

export const ImageContainer = styled.div``;

export const Image = styled.img`
  width: 10rem;
  height: 10.5rem;
`;

export const TotalContainer = styled(OverlayContent)`
  justify-content: space-between;
  font-size: 1.3rem;
  font-weight: bold;
  margin: 2rem 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

export const ViewBagButton = styled.button`
  padding: 1rem 3rem;
  font-size: 1rem;
  color: #1d1f22;
  background-color: #ffffff;
  cursor: pointer;
  margin-right: 0.5rem;
`;

export const CheckOutButton = styled(ViewBagButton)`
  color: #ffffff;
  background-color: #5ece7b;
  border: none;
  margin-right: 0;
  margin-left: 0.5rem;
`;
