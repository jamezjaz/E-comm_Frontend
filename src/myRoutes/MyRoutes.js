import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from '../conatiner/ProductList';

class MyRoutes extends React.Component {
  render() {
    return(
      <>
        <Router>
          <Routes>
            <Route exact path="/" element={<ProductList />} />
          </Routes>
        </Router>
      </>
    );
  }
};

export default MyRoutes;