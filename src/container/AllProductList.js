import React from 'react';
import { connect } from 'react-redux';
import Product from '../components/Product';
import { ContentContainer } from '../styles/AllProductList.styled';
import fetchProducts from '../apiRequest/apiRequest';
import Loader from '../loader/Loader';

class AllProductList extends React.Component {
  _isMounted = false;

  constructor() {
    super();

    this.state = {
      loading: true
    }
  }
  componentDidMount() {
    this._isMounted = true;
  
    const { fetchedProducts } = this.props;
    fetchedProducts();
  };

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    setTimeout(() => {
      if (this._isMounted) this.setState({loading: false})
    }, 2000);

    const { all } = this.props;

    return(
      <>
        <ContentContainer>
          {this.state.loading === false ?
            <Product
              products={all}
            />
          :
            <Loader /> 
          }
        </ContentContainer>
      </>
    );
  }

}

const mapStateToProps = state => ({
  all: state.product.categories.all
});

const mapDispatchToProps = dispatch => ({
  fetchedProducts: () => dispatch(fetchProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllProductList);