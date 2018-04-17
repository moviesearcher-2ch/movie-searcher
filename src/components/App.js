import React, { Component } from 'react';
import Bar from './Bar'
import Home from './Home'
import Mainpage from '../containers/Mainpage'
import {Switch, Route} from 'react-router-dom'

class App extends Component { 
  render() {
    return (
      <div className="App">
        <Bar/>
        <Switch>
          <Route exact path='/' component={Mainpage}/>
          <Route path='/home' component={Home}/>
        </Switch>
      </div>
    );
  }
}

export default App;
