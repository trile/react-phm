import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

//components
import HomeIndex from './components/home-index';
import Weather from './components/weather';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={HomeIndex}/>
      <Route path='/weather' component={Weather}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'));
