import React from 'react';
import Bar from './Bar'
import MovieDetails from '../containers/MovieDetails'
import Mainpage from '../containers/Mainpage'
import {Switch, Route} from 'react-router-dom'

const App = () => { 
    return (
      <div className="App">
        <Bar/>
        <Switch>
          <Route exact path='/' component={Mainpage}/>
          <Route path="/f/:filmId" component={MovieDetails}/>
        </Switch>
      </div>
    );
}

export default App;
