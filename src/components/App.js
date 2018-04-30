import React from 'react'
import Bar from './Bar'
import MovieDetails from '../containers/MovieDetails'
import Mainpage from '../containers/Mainpage'
import Favourites from '../containers/Favourites'
import Contact from './Contact'
import {Switch, Route} from 'react-router-dom'

const App = () => { 
  return (
    <div className="App">
      <Bar />
      <Switch>
        <Route exact path='/' component={Mainpage} />
        <Route path="/filmId/:filmId" component={MovieDetails} />
        <Route path="/favourites" component={Favourites} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  )
}

export default App
