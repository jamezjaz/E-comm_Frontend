import React from 'react';
import { connect } from 'react-redux';
import Product from '../components/Product';

class ClothesList extends React.Component {
  render() {
    const { clothes } = this.props;

    return(
      <>
        <Product
          products={clothes}
        />
      </>
    );
  }
};

const mapStateToProps = state => ({
  clothes: state.product.categories.clothes
});

export default connect(mapStateToProps, null)(ClothesList);