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
import DisplayTotal from './DisplayTotal';

class Overlay extends React.Component {
  render() {
    const { addedProducts, label, closeModal, options } = this.props;
    const addedProductsLen = addedProducts.length;

    const handleAddQuantity = id => {
      const { addQty } = this.props;
      addQty(id);
    };

    const handleSubQuantity = id => {
      const { subtractQty } = this.props;
      subtractQty(id);
    };

    return(
     <>
      <OverlayContainer onClick={closeModal}>

      </OverlayContainer>
      <Modal isopen="true">
          <p><b>My Bag, </b>{addedProductsLen} items</p>
          {addedProductsLen ?
            (
              addedProducts.map(item => (
                <div key={item.id}>
                  <OverlayContent>
                    <OverlayLeft>
                      <h3>{item.brand}</h3>
                      <SubTitle>{item.name}</SubTitle>
                      <p>{price(item.prices, label)}</p>
                      <>
                        {Object.keys(options).map((key, i) => (
                          <div key={i}>
                            {item.category === 'clothes' && 
                              <OptionButton>{options[key].clothes}</OptionButton>
                            }
                            {item.category === 'tech' &&
                              <>
                                {item.attributes.map(attr => (
                                  <>
                                    {attr.type === 'swatch' &&   
                                      <OptionButton
                                        BgColor={options[key].swatch}
                                      />
                                    }
                                    {attr.type === 'text' &&
                                      <OptionButton>{options[key].text}</OptionButton>
                                    }
                                  </>
                                ))}
                              </>
                            }
                          </div>
                        ))}
                      </>
                    </OverlayLeft>
                    <OverlayRight>
                      <ButtonsContainer>
                        <QtyButton
                          onClick={() => { handleAddQuantity(item.id); }}
                        >
                          +
                        </QtyButton>
                        <Count>{item.quantity}</Count>
                        <QtyButton
                          onClick={() => { handleSubQuantity(item.id); }}
                        >
                          -
                        </QtyButton>
                      </ButtonsContainer>
                      <ImageContainer>
                        <Image src={item.gallery[0]} alt={item.name} />
                      </ImageContainer>
                    </OverlayRight>
                  </OverlayContent>
                </div>
              ))
            )
            :
            <h4>You have {addedProductsLen} item(s) on cart</h4>
          }
          <TotalContainer>
            <DisplayTotal />
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
     </>
    );
  }
};

const mapStateToProps = state => ({
  addedProducts: state.product.addedProducts,
  label: state.product.label,
  options: state.product.options
});

const mapDispatchToProps = dispatch => ({
  addQty: id => dispatch(addQuantity(id)),
  subtractQty: id => dispatch(subQuantity(id)),
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Overlay);
  