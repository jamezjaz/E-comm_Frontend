import React from 'react';
import { Link } from 'react-router-dom';
import cloth from '../assets/images/cloth.png';
import {
  ButtonContainer,
  ButtonsContainer,
  CheckOutButton,
  Count,
  Image,
  ImageContainer,
  Modal,
  OverlayContainer,
  OverlayContent,
  OverlayLeft,
  OverlayRight,
  QtyButton,
  SizeButton,
  SubTitle,
  TotalContainer,
  ViewBagButton
} from '../styles/Overlay.styled';

class Overlay extends React.Component {
  render() {
    // Get the modal
    // const modal = document.getElementById('modal');
     // // When the user clicks anywhere outside of the modal, close it
    //  window.onclick = function(event) {
    //     if (event.target === modal) {
    //       console.log('Disappear');
    //       modal.style.display = 'none';
    //     }
    //   }

    const closeOverlay = () => {   
      const modal = document.getElementById('modal');
      modal.style.display = 'none';
      console.log('Overlay closed');
    //   modal.close();
    };

    return(
      <OverlayContainer id="modal" onClick={closeOverlay}>
          <Modal isopen="true">
        <p><b>My Bag, </b>2 items</p>
        <OverlayContent>
          <OverlayLeft>
            <h3>Apollo</h3>
            <SubTitle>Running Short</SubTitle>
            <p>$50.00</p>
            <div>
              <SizeButton>S</SizeButton>
              <SizeButton>M</SizeButton>
            </div>
          </OverlayLeft>
          <OverlayRight>
            <ButtonsContainer>
              <QtyButton>+</QtyButton>
              <Count>2</Count>
              <QtyButton>-</QtyButton>
            </ButtonsContainer>
            <ImageContainer>
              <Image src={cloth} alt='Product' />
            </ImageContainer>
          </OverlayRight>
        </OverlayContent>
        <TotalContainer>
          <p>Total</p>
          <p>$100.00</p>
        </TotalContainer>
        <ButtonContainer>
          <ViewBagButton>VIEW BAG</ViewBagButton>
          <Link
            to='/cart'
          >
            <CheckOutButton>
              CHECK OUT
            </CheckOutButton>
          </Link>
        </ButtonContainer>
      </Modal>
      </OverlayContainer>
    );
  }
};
  
export default Overlay;
  