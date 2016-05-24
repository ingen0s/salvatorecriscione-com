/*
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your appliction state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 * 3) (optional) Add an async function like this:
 *    export function asyncYourAction(var) {
 *        return (dispatch) => {
 *             // Do async stuff here
 *             return dispatch(yourAction(var));
 *        };
 *    }
 *
 *    If you add an async function, remove the export from the function
 *    created in the second step
 */

// Disable the no-use-before-define eslint rule for this file
// It makes more sense to have the asnyc actions before the non-async ones
/* eslint-disable no-use-before-define */

import {LOAD_POST, OPEN_MENU, SET_STATE, CLOSE_MENU, LOAD_MEDIA_POST, LOAD_PORTFOLIO_POST, LOAD_MEDIA_POST_FAIL} from '../constants/AppConstants';

export function initSite() {
  return {
    type: SET_STATE,
    state: {
      open_menu: false,
      posts: [],
      font_loaded: false,
      openpost: {},
      time: Date.now()
    }
  };
}

export function openMenu() {
  return {
    type: OPEN_MENU
  }
}

export function closeMenu() {
  return {
    type: CLOSE_MENU
  }
}

export function loadPosts() {
  return { type: LOAD_POST,
    payload: {
      request:{
        url:'/posts'
      }
    }
  };
}

export function loadMedia(i) {
  return {
    type: LOAD_MEDIA_POST,
    indexpost: i,
    payload: {
      request: {
        url: '/media/' + i
      }
    }
  };
}

export function loadPortfolioPost(slug) {
  return {
    type: LOAD_PORTFOLIO_POST,
    slug: slug
  }
}
