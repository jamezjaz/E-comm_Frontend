import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Product from '../components/Product';
import { ContentContainer } from '../styles/ProductList.styled';
import fetchProducts from '../apiRequest/apiRequest';

class ProductList extends React.Component { 
  componentDidMount() {
    const { fetchedProducts, products } = this.props;
    fetchedProducts(products);
  };

  render() {
    const { categories: { categories } } = this.props;
    // console.log('Categories', categories);

    return(
      <>
      {/* continue please */}
        <Header />
        <ContentContainer>
          {/* // This is awesome! But for prices, do I have to make another loop again?
          // Yea, even gallery, but how does the prices connect, is it base on size
          // you will need to use some sort of reducer categories.reduce((acc, item) => {             
            // acc[item.name] = item.products
          // }, {})  But can keep looping like this first before thinking of refactoring
          // you need to install html-react-parser to parse the products.description. Because of those elements right? yes

          // I do not understand the reduce function part but I think you said I should keep nesting loops,
          // if everything works out fine, then I'll think of refactoring. Is that what you mean? yess
          // Ok

          // I think, I'll let you go now. I'll continue tomorrow evening. 
          // But I'll always run to you if I get stuck please. 
          // I was given 1 month to deliver and 1 week is gone already and there're many faetures to implement
          // Ok, that's quite an ample time then. npm i html-react-parser and that will do the magic right?es
          //  don't forget to send the links thanks.
          //It's not really a link, let send you the deatils now.
          // It's Torre.co but this very position belongs to Torre's partner company - Event Rap.
          // I'll show you my WhatsApp conversation with one of the Torre's recruiters now. Hold on! */}

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
  fetchedProducts: category => dispatch(fetchProducts(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);