import React from 'react';
import { LoaderImg } from '../styles/Loader.styled';

class Loader extends React.Component {
  render() {
    return(
      <>
        <LoaderImg
          src='https://user-images.githubusercontent.com/57812000/159261330-5f814f1e-5351-4e5f-9676-8f057b9f18ee.svg'
          alt='Loader'
        />
      </>
    );
  }
};

export default Loader;
