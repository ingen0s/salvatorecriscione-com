/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import {SET_STATE, LOAD_POST, LOAD_POST_OK, OPEN_MENU, CLOSE_MENU, LOAD_MEDIA_POST_OK, LOAD_PORTFOLIO_POST, LOAD_MEDIA_POST_FAIL} from '../constants/AppConstants.js';


function setState(state, newstate) {
  return Object.assign({}, state, newstate);
}

function loadPost(state, posts) {
  return Object.assign({}, state, {'posts': posts});
}

function openMenu(state) {
  return Object.assign({}, state, {open_menu : true, time: Date.now()});
}

function closeMenu(state) {

  return Object.assign({}, state, {open_menu: false, time: Date.now()});
}

function loadMedia(state, mediabuff, ind) {
  let buff = state.posts;
  buff = buff.map(item => {
    if ( item.featured_media === ind ) {
      item["media"] = mediabuff;
      return item;
    } else {
      return item;
    }
  });
  return Object.assign({}, state, {posts: buff});
}

function loadPortfolioPost(state, slug) {
  let posts, buff = '';
  posts = state.posts;
  posts.forEach(function(item){
    if ( item.slug === slug ) {
      buff = item;
    }
  });
  if ( buff !== '' ) {
    return Object.assign({}, state, { openpost: buff });
  }

  return Object.assign({}, state, { openpost: {} });
}

function error404(state){
  window.location.href = '/404';
  return state;
}
function rootReducer(state, action) {
  //console.log(action.type);
  switch(action.type) {
      case SET_STATE:
        return setState(state, action.state);
      case LOAD_POST_OK:
        return loadPost(state, action.payload);
      case LOAD_MEDIA_POST_OK:
        return loadMedia(state, action.payload, action.indexpost);
      case OPEN_MENU:
        return openMenu(state);
      case CLOSE_MENU:
        return closeMenu(state);
      case LOAD_PORTFOLIO_POST:
        return loadPortfolioPost(state, action.slug);
      case LOAD_MEDIA_POST_FAIL:
        return error404(state);
      default:
        return state;
  }
}
export default rootReducer;
