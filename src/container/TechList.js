import React from 'react';
import { connect } from 'react-redux';
import Product from '../components/Product';

class TechList extends React.Component {
  render() {
    const { tech } = this.props;

    return(
      <>
        <Product
          products={tech}
        />
      </>
    );
  }
};

const mapStateToProps = state => ({
  tech: state.product.categories.tech
});

export default connect(mapStateToProps, null)(TechList);