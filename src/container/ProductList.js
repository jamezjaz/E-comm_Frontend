import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Product from '../components/Product';
import { ContentContainer } from '../styles/ProductList.styled';
import fetchProducts from '../apiRequest/apiRequest';
import { filterCategories } from '../redux/actions/actionCreators';

class ProductList extends React.Component { 
  componentDidMount() {
    const { fetchedProducts } = this.props;
    fetchedProducts();
  };

  render() {
    const { categories: { categories }, filtered } = this.props;
  
    const fiteredCategories = category => {
      const { filter } = this.props;
      filter(category);
    };

    return(
      <>
        <Header handleFilter={fiteredCategories} />
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
          {categories?.map(category => (
            <div key={category.name}>
              {category.name === filtered ?
                (
                  <Product
                    key={category.name}
                    category={category}
                  />
                )
                :
                (<></>)
              }
            </div>
          ))}
        </ContentContainer>
      </>
    );
  }

}

const mapStateToProps = state => ({
  categories: state.product.categories,
  loading: state.loading,
  filtered: state.filter,
});

// const mapStateToProps = state => {
//   console.log('State', state);
// };

const mapDispatchToProps = dispatch => ({
  fetchedProducts: () => dispatch(fetchProducts()),
  filter: category => dispatch(filterCategories(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);