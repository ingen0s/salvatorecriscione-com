import React, { Component } from 'react';
import {openMenu} from '../../actions/AppActions.js';
import {Link} from 'react-router';

class IntroHeaderElement extends Component {
  onClickMenu(that, e) {
    //e.stopPropagation();
    const dispatch = that.props.dispatch;
    dispatch(openMenu());
  }

  render() {
    let that = this;
    /*
    let BgStyle = {
      backgroundImage: 'url(' + Bg + ')',
      backgroundSize: 'cover'
    }
    */
    return (
    <div className="col-md-12 thirdHeight header" role="banner">
      {
        this.props.openmenu ? null : <div className="toggle" onClick={e => this.onClickMenu(that, e)}>
          <i className="fa fa-bars fa-3x"></i>
        </div>
      }
      <Link to="/">
        <div className="text" >
          <h2>Web Developer</h2>
          <h1>Salvatore Criscione</h1>
          <h3>Appassionato di React JS, CSS e internet</h3>
        </div>
      </Link>
    </div>);
  }
}
export default IntroHeaderElement;
