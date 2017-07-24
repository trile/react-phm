import React, {Component} from 'react';
import Nav from './nav';
import skycons from '../lib/skycons';

class HomeIndex extends Component {

  componentDidUpdated() {
    const skyconIcon = new skycons({
      color: 'orange'
    });

    skyconIcon.add(this.skycon, 'CLEAR_DAY');
    skyconIcon.add(this.skycon1, 'CLEAR_NIGHT');
    skyconIcon.play();
  }

  render () {
    return (
      <div>
        <Nav />
        <div className="">
          This is <i className="fa fa-home fa-fw"></i>.
        </div>
      </div>
    );
  }
};

export default HomeIndex;
