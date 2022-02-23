import React from 'react';
import { connect } from 'react-redux';
import { totalSymbol } from '../container/constant';
import { TotalDisplay } from '../styles/DisplayTotal';

class DisplayTotal extends React.Component {
  render() {
    const { total, label } = this.props;

    return (
      <>
        <TotalDisplay>
          <p>Total</p>
          <p>{total > 0 ? `${totalSymbol[label]}${total}` : `${total}`}</p>
        </TotalDisplay>
      </>
    );
  }
};

const mapStateToProps = state => ({
  total: state.product.total,
  label: state.product.label,
});

export default connect(mapStateToProps, null)(DisplayTotal);
