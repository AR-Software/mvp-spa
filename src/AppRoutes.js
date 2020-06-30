import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import UnderConstructionPage from './pages/UnderConstructionPage/UnderConstructionPage';
import './App.scss'

export default class AppRoutes extends Component {
  render() {
    return (
       <div className="App-container">
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/skills"  component={UnderConstructionPage}></Route>
          <Route path="/education" component={UnderConstructionPage}></Route>
          <Route path="/works"  component={UnderConstructionPage}></Route>
          <Route path="/research"  component={UnderConstructionPage}></Route>
          <Route path="/contact" component={UnderConstructionPage}></Route>
        </div>
    );
  }
}

