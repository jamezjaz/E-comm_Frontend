import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from '../components/Cart';
import ClothesList from '../container/ClothesList';
import ProductDescription from '../container/ProductDescription';
import AllProductList from '../container/AllProductList';
import TechList from '../container/TechList';

class MyRoutes extends React.Component {
  render() {
    return(
      <>
        <Router>
          <Routes>
            <Route exact path="/" element={<AllProductList />} />
            <Route path="/description/:id" element={<ProductDescription />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/clothes" element={<ClothesList />} />
            <Route path="/tech" element={<TechList />} />
          </Routes>
        </Router>
      </>
    );
  }
};

export default MyRoutes;