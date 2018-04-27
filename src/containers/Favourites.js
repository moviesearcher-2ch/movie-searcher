import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {removeFromFavourites, saveToFavourites} from '../actions/actions'
import Grid from 'material-ui/Grid'
import MovieCard from '../components/MovieCard'

const Favourites = (props) => {
    const {saveToFavourites, removeFromFavourites, favouritesMovies} = props
    return (
      <Grid item xs={12} style={{overflow: "hidden", marginTop: "8px"}}>
        <Grid container justify="center" spacing={8}>
          {Object.values(favouritesMovies).map(film => (
            <MovieCard 
              key={film.id} film={film}
              saveToFavourites={saveToFavourites}
              removeFromFavourites={removeFromFavourites}
              isFavourite={film.id in favouritesMovies}            
            />
          ))}
        </Grid>
      </Grid>
    )
  }

Favourites.propTypes = {
  favouritesMovies: PropTypes.object.isRequired,
  saveToFavourites: PropTypes.func.isRequired,
  removeFromFavourites: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  favouritesMovies: state.storage.storeItem
})

export default connect(mapStateToProps, {removeFromFavourites, saveToFavourites})(Favourites)
