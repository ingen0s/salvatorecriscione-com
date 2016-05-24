import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import {loadPortfolioPost, loadPosts, loadMedia} from '../../actions/AppActions.js';
import { connect } from 'react-redux';

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');


class PostPage extends Component {

  getPostContext() {
    if ( this.props.data && this.props.data.openpost )
      return this.props.data.openpost;
    return {};
  }

  getFullImage() {
    if ( this.props.data && this.props.data.openpost && this.props.data.openpost.media && this.props.data.openpost.media.source_url ) {
      return this.props.data.openpost.media.source_url;
    }
    return '';
  }

  _isEmpty(a) {
    var aP = Object.getOwnPropertyNames(a);
    console.log('A: ', a);
    if ( aP.length === 0 )
      return true;
    else
      return false;
  }

  getPreviewImage() {
    if (
        this.props.data.openpost &&
        this.props.data.openpost.media &&
        this.props.data.openpost.media.media_details &&
        this.props.data.openpost.media.media_details.sizes &&
        this.props.data.openpost.media.media_details.sizes.medium_large &&
        this.props.data.openpost.media.media_details.sizes.medium_large.source_url
      ) {
      return this.props.data.openpost.media.media_details.sizes.medium_large.source_url;
    }
    // Fallback in case preview is not available
    return this.getFullImage();
  }

  componentDidMount() {
    const dispatch = this.props.dispatch;
    const slug = this.props.params.slug;
    if ( this.props.data.posts.length === 0 ) {
      dispatch(loadPosts()).then(() => {
        dispatch(loadPortfolioPost(slug))
      }).then(() => {
        if ( this.getFullImage() === '' ) {
          dispatch(loadMedia(this.getMediaId()));
        }
      });
    } else {
      dispatch(loadPortfolioPost(slug))
    }
    window.scrollTo(0,0);
  }

  getTitle() {
    if ( this.props.data && this.props.data.openpost && this.props.data.openpost.title)
      return this.props.data.openpost.title.rendered;
    return '';
  }

  getMediaId() {
    if ( this.props.data.openpost && this.props.data.openpost.featured_media )
      return this.props.data.openpost.featured_media;
    return 0;
  }

  getContent() {
    if ( this.props.data && this.props.data.openpost && this.props.data.openpost.content)
      return this.props.data.openpost.content.rendered;
    return '';
  }


  render() {
    let bgStyle = {
      backgroundImage: 'url(' + this.getFullImage() + ')',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      paddingTop: '20px'
    };

    return (
      <ReactCSSTransitionGroup transitionAppear={true} transitionAppearTimeout={1500} transitionName="homepage" transitionEnterTimeout={1500} transitionLeaveTimeout={2300}>
        <div className="secondHeight postopencontainer" style={bgStyle}>
          <div className="container postopen">
            <h1 className="title">{this.getTitle()}</h1>
            <p dangerouslySetInnerHTML={{__html: this.getContent()}}></p>
          </div>
        </div>
      </ReactCSSTransitionGroup>);
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
export default connect(mapStateToProps)(PostPage);
