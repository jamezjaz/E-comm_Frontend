import React from 'react';
import { connect } from 'react-redux';
import Cart from '../components/Cart';
import { EmptyCartHeader } from '../styles/Cart.styled';

class CartContainer extends React.Component {
  render() {
    const { addedProducts, label } = this.props;
    const addedProductsLen = addedProducts.length;
    return(
      <>
        {addedProductsLen ?
          addedProducts.map((item, idx) => (
            <Cart
              key={idx}
              product={item}
              label={label}
            />
          ))
        :
          <EmptyCartHeader>You have added nothing on cart!</EmptyCartHeader>
        }
      </>
    );
  }
};

const mapStateToProps = state => ({
  addedProducts: state.product.addedProducts,
  label: state.product.label
});

export default connect(mapStateToProps, null)(CartContainer);