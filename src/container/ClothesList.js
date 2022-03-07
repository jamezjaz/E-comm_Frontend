import React from 'react';
import { connect } from 'react-redux';
import Clothes from '../components/Clothes';
import Header from './Header';

class ClothesList extends React.Component {
  render() {
    const { clothes } = this.props;

    return(
      <>
        <Header />
        <Clothes
          clothes={clothes}
        />
      </>
    );
  }
};

const mapStateToProps = state => ({
  clothes: state.product.categories.categories[1]
});

export default connect(mapStateToProps, null)(ClothesList);