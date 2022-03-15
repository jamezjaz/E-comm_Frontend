import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Product from '../components/Product';
import { ContentContainer } from '../styles/ProductList.styled';
import fetchProducts from '../apiRequest/apiRequest';

class ProductList extends React.Component {
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
        <Header />
        <ContentContainer>
          {this.state.loading === false ?
            <Product
              allCategory={all.categories[0]}
            />
          :
            <h4>Loading...</h4>   
          }
        </ContentContainer>
      </>
    );
  }

}

const mapStateToProps = state => ({
  all: state.product.categories
});

const mapDispatchToProps = dispatch => ({
  fetchedProducts: () => dispatch(fetchProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);