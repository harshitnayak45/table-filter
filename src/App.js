import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Filter from './component/filter/filter';
import Header from './component/header/header';
import SideBar from './component/sidebar/sidebar';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <div id="wrapper">
            <SideBar />
            <Switch>
              <Route path="/" component={Filter} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
