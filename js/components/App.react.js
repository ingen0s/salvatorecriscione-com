/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import IntroHeader from './parts/IntroHeader.js';
import Menu from './menu/Menu.js';

import CookieBanner from 'react-cookie-banner';


// Precatch menu images
import HomeImg from '../../img/bgmenu1.jpg';
import PortfolioImg from '../../img/bgmenu2.jpg';
import Bg from '../../img/bgweb.jpg';

var gaReact = require('react-ga');
// Load actions
import {closeMenu} from '../actions/AppActions.js';

class App extends Component {
  initGA() {
    //console.log('init ga');
    gaReact.initialize('UA-76178521-2', { debug:true, gaOptions: {anonymizeIp:true}});
  }
  clickOverlay(that, e) {
    e.stopPropagation();
    const dispatch = that.props.dispatch;
    dispatch(closeMenu());
  }
  getAppData() {
    if ( this.props.data ) {
      return this.props.data;
    }
    return [];
  }

  isMenuOpen() {
    if ( this.props.data && this.props.data.open_menu ) {
      return this.props.data.open_menu;
    }
    return false;
  }

  render() {
    let wrapperClasses = "";
    let overlayClasses = "";
    let that = this;

    let style = {
      backgroundImage: 'url(' + Bg + ')',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed'
    }
    if ( this.isMenuOpen() ) {
      wrapperClasses = "wrappercontainer wrapperopen";
      overlayClasses = 'faded open';
    } else {
      wrapperClasses = "wrappercontainer wrapperclose";
      overlayClasses = 'faded close';
    }

    return (
      <div className="wrapper" role="main">
          <CookieBanner
            message="Questo sito utilizza cookie tecnici per il suo funzionamento. Effettuando uno scroll o premendo il bottone a lato accetti il loro utilizzo."
            buttonMessage="Ok, accetto"
            disableStyle={true}
            onAccept={() => {that.initGA()}}
            cookie='user-has-accepted-cookies' />
        <Menu menuopen={this.isMenuOpen()} dispatch={this.props.dispatch} />
        <div className={wrapperClasses}  style={style}>
          <div className={overlayClasses} onClick={e => {this.clickOverlay(this, e)}}/>
          <div className="row">
            <IntroHeader openmenu={this.props.data.open_menu} dispatch={this.props.dispatch} menuclick={this.onClickMenu} />
          </div>

          { this.props.children }
        </div>
      </div>
    );
  }
}

// REDUX STUFF
// Which props do we want to inject, given the global state?
function mapStateToProps(state) {
  return {
    data: state
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps)(App);
