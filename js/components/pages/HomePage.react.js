import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

import Sidebar from '../parts/Sidebar.js';
import ContentContainer from '../parts/ContentContainer.js';
import Tag from '../parts/Tag.js';
import Footer from '../parts/Footer.js';


class HomePage extends Component {
  renderHomePage() {
    return(
      <div className="row bodysection">
      <div className="col-md-8 col-sm-12">
        <div className="row borderedbottom">
          <div className="col-md-12 col-sm-12 thirdHeight">
            <ContentContainer />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-12 borderedRight">
            <Tag color="5" text="CLICCA" moretext="Mi piace su facebook" href="https://www.facebook.com/salvatorecriscioneweb"/>
            <Tag color="6" text="LEGGI" moretext="il mio blog" href="https://medium.com/@salvatorecriscione"/>
          </div>
          <Footer />
        </div>
      </div>
      <Sidebar />
    </div>);
  }

  render() {
    const dispatch = this.props.dispatch;

    return (<div className="secondHeight" key="homepagecontainer">
        <ReactCSSTransitionGroup transitionAppear={true} transitionAppearTimeout={1500} transitionName="homepage" transitionEnterTimeout={1500} transitionLeaveTimeout={2300}>
          {this.renderHomePage()}
        </ReactCSSTransitionGroup>
      </div>);
  }
}

// REDUX STUFF

// Which props do we want to inject, given the global state?
function select(state) {
  return {
    data: state
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(HomePage);
