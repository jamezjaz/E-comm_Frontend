import React from 'react';
import { connect } from 'react-redux';
import Tech from '../components/Tech';
import Header from './Header';

class TechList extends React.Component {
  render() {
    const { tech } = this.props;

    return(
      <>
        <Header />
        <Tech
          tech={tech}
        />
      </>
    );
  }
};

const mapStateToProps = state => ({
  tech: state.product.categories.categories[2]
});

export default connect(mapStateToProps, null)(TechList);