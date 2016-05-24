import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Link, browserHistory} from 'react-router';

import {loadMedia, loadPosts} from '../../actions/AppActions.js';

const PortfolioItemElement = React.createClass({
  componentDidMount() {
    if ( this.getFullImage() === '' ) {
      const dispatch = this.props.dispatch;
      dispatch(loadMedia(this.getMediaId()));
    }
  },

  getMediaId() {
    if ( this.props.postdata && this.props.postdata.featured_media )
      return this.props.postdata.featured_media;
    return 0;
  },

  getPostId() {
    if (this.props.post && this.props.post.id) {
      return this.props.post.id;
    }
    return 0;
  },

  getPostTitle() {
    if (this.props.title && this.props.title) {
      return this.props.title;
    }
    return '' ;
  },

  getPostSlug() {
    if ( this.props.postdata && this.props.postdata.slug ) {
      return this.props.postdata.slug;
    }
    return '';
  },

  getFullImage() {
    if ( this.props.postdata && this.props.postdata.media && this.props.postdata.media.source_url ) {
      return this.props.postdata.media.source_url;
    }
    return '';
  },

  getPreviewImage() {
    if (
        this.props.postdata &&
        this.props.postdata.media &&
        this.props.postdata.media.media_details &&
        this.props.postdata.media.media_details.sizes &&
        this.props.postdata.media.media_details.sizes.medium_large &&
        this.props.postdata.media.media_details.sizes.medium_large.source_url
      ) {
      return this.props.postdata.media.media_details.sizes.medium_large.source_url;
    }
    // Fallback in case preview is not available
    return this.getFullImage();
  },

  getBrief() {
    if ( this.props.postdata && this.props.postdata.excerpt ) {
      return this.props.postdata.excerpt.rendered;
    }
    return '';
  },

  render() {
    let that = this;
    let imgclasses = ( this.props.nindex === 0 ? 'col-md-4 col-sm-12 secondHeight div-img-portofolio firstpost' :'col-md-4 col-sm-12 fullheight div-img-portofolio');
    let divclasses = ( this.props.nindex === 0 ? 'post container row secondHeight firstpost' : 'post container row fullheight');

    return (
      <Link to={'/portfolio/' + this.getPostSlug()}>
        <div className={divclasses}>
            <div className={imgclasses}  style={{backgroundImage: 'url(' + this.getPreviewImage() + ')', backgroundSize:'cover'}}>
            </div>
            <div className="col-md-8 col-xs-12 textcontent">
              <h2 className="title">{this.getPostTitle()}</h2>
              <h4 className="brief" dangerouslySetInnerHTML={{__html: this.getBrief()}}></h4>
            </div>
        </div>
      </Link>);
  }
});

export default PortfolioItemElement;
