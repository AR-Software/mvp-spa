import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import './App.scss'

export default class AppRoutes extends Component {
  render() {
    return (
       <div className="App-container">
          <Route path="/" exact component={HomePage}></Route>
        </div>
    );
  }
}

