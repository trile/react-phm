import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import ReduxPromise from 'redux-promise';

//reducers
import reducers from './reducers';

//components
import HomeIndex from './components/home-index';
import Weather from './containers/weather';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomeIndex}/>
        <Route path='/weather' component={Weather}/>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
