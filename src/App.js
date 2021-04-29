import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import MakeInvo from './pages/MakeInvo';

import Print from './pages/Print';
import Navbar from './components/navbar';
class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/print' exact component={Print} />
          <Route path='/makeinvo' exact component={MakeInvo} />
          
        </Switch>
      </Router> 
    );
  }
}

export default App;