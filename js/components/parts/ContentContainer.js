import React,{Component} from 'react';
import {Link} from 'react-router';
import Bg from '../../../img/mehome.jpg';

import Tag from './Tag';

class ContentContainer extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-8 col-sm-12 thirdHeight content">
          <h1>Ciao,</h1>
          <p>Sono Salvatore. Appassionato di computer e web fin dalla tenera età, sviluppo siti e creo applicazioni web da più di 6 anni. Lavoro per costruire il web di domani.</p>
        </div>
        <Link to="/chisono">
        <div className="col-md-4 col-sm-12 thirdHeight contentside">
          <h1>CHI SONO</h1>
          <div className="inner" style={
              {
                  backgroundImage: 'url(' + Bg + ')',
                  backgroundSize: 'cover',
                  backgroundPosition: '50% 50%'
              }
            } />
        </div>
        </Link>
      </div>
    );
  }
}

export default ContentContainer;
