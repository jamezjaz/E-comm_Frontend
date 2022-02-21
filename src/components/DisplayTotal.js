import React from 'react';
import { connect } from 'react-redux';

class DisplayTotal extends React.Component {
  render() {
    const { total } = this.props;
    console.log('DisplayTotal', total);

    return (
      <>
        <div>
          <p>Total</p>
          <p>{total}</p>
        </div>
      </>
    );
  }
};

const mapStateToProps = state => ({
  total: state.product.total,
});

export default connect(mapStateToProps, null)(DisplayTotal);
