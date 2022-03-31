import React from 'react';
import MyRoutes from './myRoutes/MyRoutes';
import { GlobalStyles } from './styles/Global.styled';

class App extends React.Component {
  render() {
    return(
      <>
        <GlobalStyles />
        <MyRoutes />
      </>
    )
  }
};

export default App;
