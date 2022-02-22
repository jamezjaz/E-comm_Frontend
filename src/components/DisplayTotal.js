import React from 'react';
import { connect } from 'react-redux';
import { TotalDisplay } from '../styles/DisplayTotal';

class DisplayTotal extends React.Component {
  render() {
    const { total } = this.props;
    console.log('DisplayTotal', total);

    return (
      <>
        <TotalDisplay>
          <p>Total</p>
          <p>{total}</p>
        </TotalDisplay>
      </>
    );
  }
};

const mapStateToProps = state => ({
  total: state.product.total,
});

export default connect(mapStateToProps, null)(DisplayTotal);
