/**
 *
 * app.js
 *
 * This is the entry file for the application, mostly just setup and boilerplate
 * code. Routes are configured at the end of this file!
 *
 */

// Load the ServiceWorker, the Cache polyfill, the manifest.json file and the .htaccess file
//import 'file?name=[name].[ext]!../serviceworker.js';
//import 'file?name=[name].[ext]!../manifest.json';
import 'file?name=[name].[ext]!../.htaccess';

/* Check for ServiceWorker support before trying to install it
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/serviceworker.js').then(() => {
    // Registration was successful
  }).catch(() => {
    // Registration failed
  });
} else {
  // No ServiceWorker Support
}
*/
// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import FontFaceObserver from 'fontfaceobserver';
import createHistory from 'history/lib/createBrowserHistory';

import {initSite} from './actions/AppActions';

// Observer loading of Open Sans (to remove open sans, remove the <link> tag in the index.html file and this observer)
const openSansObserver = new FontFaceObserver('Lato', {});

// When Open Sans is loaded, add the js-open-sans-loaded class to the body
openSansObserver.check().then(() => {
  document.body.classList.add('js-lato-loaded');
}, () => {
  document.body.classList.remove('js-lato-loaded');
});

// Google Analytics
var gaReact = require('react-ga');
import {cookie} from 'react-cookie-banner';
//import initGA from './utils/analytics.js';
if(cookie("user-has-accepted-cookies")){
  //console.log('initialize ga analytics');
  gaReact.initialize('UA-76178521-2', { debug:false, gaOptions: {anonymizeIp:true}});
}

function logPageView() {
  gaReact.pageview(window.location.pathname);
}


// Import the pages
import HomePage from './components/pages/HomePage.react';
import PortfolioPage from './components/pages/PortfolioPage';
import NotFoundPage from './components/pages/NotFound.react';
import PostPage from './components/pages/PostPage';
import WhoAmI from './components/pages/WhoAmI';

import App from './components/App.react';

// Import the CSS file, which HtmlWebpackPlugin transfers to the build folder
import '../css/main.css';


// Axios client
const client = axios.create({
  responseType: 'json',
  baseURL:'http://salvatorecriscione.com/wp-json/wp/v2',
});


// Create the store with the redux-thunk middleware, which allows us
// to do asynchronous things in the actions
import rootReducer from './reducers/rootReducer';
import {SET_STATE} from './constants/AppConstants';

const store = createStore(
  rootReducer,
  applyMiddleware(
    axiosMiddleware(client)
  )
);

if (module.hot) {
  module.hot.accept('./reducers/rootReducer', () => {
    const nextRootReducer = require('./reducers/rootReducer').default;
    store.replaceReducer(nextRootReducer);
  });
}

store.dispatch(initSite());

// Mostly boilerplate, except for the Routes. These are the pages you can go to,
// which are all wrapped in the App component, which contains the navigation etc
ReactDOM.render(
  <Provider store={store}>
    <Router history={createHistory()} onUpdate={logPageView}>
      <Route component={App}>
        <Route path="/" component={HomePage} />
        <Route path="/portfolio" component={PortfolioPage} />
        <Route path="/portfolio/:slug" component={PostPage} />
        <Route path="/chisono" component={WhoAmI} />
        <Route path="*" component={NotFoundPage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
