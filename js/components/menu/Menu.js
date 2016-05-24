import React, { Component } from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import {closeMenu} from '../../actions/AppActions.js';

import HomeImg from '../../../img/bgmenu1.jpg';
import PortfolioImg from '../../../img/bgmenu2.jpg';
import SidebarBgImg from '../../../img/sidebar_head.jpg';


import Me from '../../../img/me.jpg';
import Me2 from '../../../img/me2.jpg';
import Me3 from '../../../img/me3.jpg';

class Menu extends Component {

  onClickMenu(that, e) {
    e.stopPropagation();
    const dispatch = that.props.dispatch;
    dispatch(closeMenu());
  }

  render() {
    let that = this;
    let cs = ( this.props.menuopen ? 'menu isOpening' : 'menu isClosing' );

    return (
        <div className="menucontainer">
          <div className="closethismenu" onClick={e => {this.onClickMenu(that, e)}} style={{
              display: (this.props.menuopen ? 'block' : 'none')
            }}>
            <i className="fa fa-close fa-3x"></i>
          </div>
          <div id="menu" className={cs} role="navigation">
            <Link to="" onClick={e => {this.onClickMenu(that, e)}}>
              <div className="thirdHeight menuitem" style={{backgroundImage: 'url(' + SidebarBgImg + ')', backgroundSize: 'cover'}}>
                <div className="menuiteminner">
                  <h6>Home</h6>
                  <center>
                  <img src={Me} className="imghomemenu img-circle" />
                  </center>
                  <h4>La mia casa su internet</h4>
                </div>
              </div>
            </Link>
            <Link to="/chisono" onClick={e => {this.onClickMenu(that, e)}}>
              <div className="thirdHeight menuitem" style={{backgroundImage:'url(' + HomeImg + ')', backgroundSize: 'cover'}}>
                <div className="menuiteminner">
                  <h6>Chi sono</h6>
                  <center>
                  <img src={Me2} className="imghomemenu img-circle" />
                  </center>
                <h4>Scopri chi sono</h4>
                </div>
              </div>
            </Link>
            <Link to="/portfolio" onClick={e => {this.onClickMenu(that, e)}}>
            <div className="thirdHeight menuitem" style={{backgroundImage:'url(' + PortfolioImg + ')', backgroundSize: 'cover'}}>
              <div className="menuiteminner">
                <h6>Portfolio</h6>
                <center>
                <img src={Me3} className="imghomemenu img-circle" />
                </center>
                <h4>Ciò di cui sono fiero</h4>
              </div>
            </div>
            </Link>
          </div>
        </div>
    );
  }
}

export default Menu;
