import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Filter from './component/filter/filter';
import Header from './component/header/header';
import SideBar from './component/sidebar/sidebar';
import Dummy from './component/dummy/dummy';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <div id="wrapper">
            <SideBar />
            <Switch>
              <Route exact path="/" component={Filter} />
              <Route path="/dummy" component={Dummy} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
