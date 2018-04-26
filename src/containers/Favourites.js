import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {removeFromFavourites, saveToFavourites} from '../actions/actions'
import Grid from 'material-ui/Grid'
import MovieCard from '../components/MovieCard'

export class Favourites extends Component {
  render() {
    console.log(this.props)
    return (
      <Grid item xs={12} style={{overflow: "hidden", marginTop: "8px"}}>
        <Grid container justify="center" spacing={8}>
          {Object.values(this.props.favouritesMovies).map(film => (
            <MovieCard 
              saveToFavourites={this.props.saveToFavourites}
              removeFromFavourites={this.props.removeFromFavourites}
              isFavourite={ film.id in this.props.favouritesMovies}
              key={film.id} 
              film={film}
            />
          ))}
        </Grid>
      </Grid>
    )
  }
}

const mapStateToProps = state => ({
  favouritesMovies: state.storage.storeItem
})

export default connect(mapStateToProps, {removeFromFavourites, saveToFavourites})(Favourites)
