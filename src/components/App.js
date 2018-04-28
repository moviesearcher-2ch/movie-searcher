import React from 'react'
import Bar from './Bar'
import MovieDetails from '../containers/MovieDetails'
import Mainpage from '../containers/Mainpage'
import Favourites from '../containers/Favourites'
import {Switch, Route} from 'react-router-dom'

const App = () => { 
    return (
      <div className="App">
        <Bar/>
        <Switch>
          <Route exact path='/' component={Mainpage}/>
          <Route path="/movie_detail/:filmId" component={MovieDetails}/>
          <Route path="/favourites" component={Favourites}/>
        </Switch>
      </div>
    );
}

export default App;
