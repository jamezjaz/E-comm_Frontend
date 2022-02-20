import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { price } from '../container/constant';
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
  OptionButton,
  SubTitle,
  TotalContainer,
  ViewBagButton
} from '../styles/Overlay.styled';
import { addQuantity, subQuantity } from '../redux/actions/actionCreators';

class Overlay extends React.Component {
  render() {
    const { addedProducts, label='USD' } = this.props;
    const addedProductsLen = addedProducts.length;

    const handleAddQuantity = id => {
      const { addQty } = this.props;
      addQty(id);
    };

    const handleSubQuantity = id => {
      const { subtractQty } = this.props;
      subtractQty(id);
    };
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
          <p><b>My Bag, </b>{addedProductsLen} items</p>
          {addedProductsLen ?
            (
              addedProducts.map(item => (
                // <Modal isopen="true">
                  <div key={item.id}>
                    {/* <p><b>My Bag, </b>{addedProductsLen} items</p> */}
                    <OverlayContent>
                      <OverlayLeft>
                        <h3>{item.brand}</h3>
                        <SubTitle>{item.name}</SubTitle>
                        <p>{price(item.prices, label)}</p>
                        <div>
                          {item.attributes.map(attr => attr.items.map(option => (
                            <OptionButton key={option.id}>{option.displayValue}</OptionButton>
                          )))}
                          {/* <OptionButton>S</OptionButton>
                          <OptionButton>M</OptionButton> */}
                        </div>
                      </OverlayLeft>
                      <OverlayRight>
                        <ButtonsContainer>
                          <QtyButton
                            onClick={() => { handleAddQuantity(item.id) }}
                          >
                            +
                          </QtyButton>
                          <Count>{item.quantity}</Count>
                          <QtyButton
                            onClick={() => handleSubQuantity(item.id)}
                          >
                            -
                          </QtyButton>
                        </ButtonsContainer>
                        <ImageContainer>
                          <Image src={item.gallery[0]} alt={item.name} />
                        </ImageContainer>
                      </OverlayRight>
                    </OverlayContent>
                    {/* <TotalContainer>
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
                    </ButtonContainer> */}
                  </div>
                // </Modal>
              ))
            )
            :
            <h4>You have {addedProductsLen} item(s) on cart</h4>
          }
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

const mapStateToProps = state => ({
  addedProducts: state.product.addedProducts,
});

const mapDispatchToProps = dispatch => ({
  addQty: id => dispatch(addQuantity(id)),
  subtractQty: id => dispatch(subQuantity(id)),
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Overlay);
  