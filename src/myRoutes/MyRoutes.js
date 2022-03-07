import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from '../components/Cart';
import ClothesList from '../container/ClothesList';
import ProductDescription from '../container/ProductDescription';
import ProductList from '../container/ProductList';

class MyRoutes extends React.Component {
  render() {
    return(
      <>
        <Router>
          <Routes>
            <Route exact path="/" element={<ProductList />} />
            <Route path="/description/:id" element={<ProductDescription />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/clothes" element={<ClothesList />} />
          </Routes>
        </Router>
      </>
    );
  }
};

export default MyRoutes;