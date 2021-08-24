import React, {Component, Fragment} from 'react';
import SectionBanner from '../components/SectionBanner'
import SectionBooks from '../components/SectionBooks'
import SectionPublishers from '../components/SectionPublishers'

class Home extends Component {
  render() {
    return (
      <Fragment>
        <SectionBanner/> 
        <SectionBooks/>
        <SectionPublishers />
      </Fragment>
    )
  };
}

export default Home;