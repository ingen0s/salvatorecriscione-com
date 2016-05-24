import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import {loadPosts} from '../../actions/AppActions.js';
import PortfolioItem from '../parts/PortfolioItem.js';
import {createFragment} from 'react-addons-create-fragment';

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

import Loading from '../parts/Loading.js';

const PortfolioPage = React.createClass({

  componentWillMount() {
    if ( this.getPosts().length === 0 ) {
      const dispatch = this.props.dispatch;
      dispatch(loadPosts());
    }
  },

  getPosts() {
    if ( this.props.data && this.props.data.posts )
      return this.props.data.posts;
    return [];
  },

  renderThisPostPreview(x, y) {
    return (<PortfolioItem title={x.title.rendered} postdata={x} media={x.featured_media} dispatch={this.props.dispatch} nindex={y} key={y}/>);
  },

  render() {
    var that = this;
    var items = this.getPosts().map((x, y) => {
      return that.renderThisPostPreview(x, y);
    });

    if ( items.length === 0 )
      return (<Loading />);

    return (<ReactCSSTransitionGroup transitionAppear={true} transitionAppearTimeout={1500} transitionName="homepage" transitionEnterTimeout={1500} transitionLeaveTimeout={2300}>
      <div className="secondHeight portfoliocontainer" key="portfoliopage">
        <div className="row container secondHeight portfolio">
          {items}
        </div>
      </div></ReactCSSTransitionGroup>);
  }
});

function select(state) {
  return {data: state};
}

export default connect(select)(PortfolioPage);
