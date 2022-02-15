import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Product from '../components/Product';
import { ContentContainer } from '../styles/ProductList.styled';
import fetchProducts from '../apiRequest/apiRequest';

class ProductList extends React.Component { 
  componentDidMount() {
    const { fetchedProducts } = this.props;
    fetchedProducts();
  };

  render() {
    const { categories: { categories } } = this.props;

    return(
      <>
      {/* continue please */}
        <Header />
        <ContentContainer>
          {/* {!categories ? 
            (<h3>Loading...</h3>)
          :  
            <div>
              {categories.map(category => (
                <Product
                  key={category.name}
                  category={category}
                />
              ))}
            </div>
          } */}
          {categories.map(category => (
            <Product
              key={category.name}
              category={category}
            />
          ))}
        </ContentContainer>
      </>
    );
  }

}

const mapStateToProps = state => ({
  categories: state.product.categories,
  loading: state.loading,
});

// const mapStateToProps = state => {
//   console.log('State', state);
// };

const mapDispatchToProps = dispatch => ({
  fetchedProducts: () => dispatch(fetchProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);