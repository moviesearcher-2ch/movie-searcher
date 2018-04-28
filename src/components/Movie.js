import React from 'react';
import {connect} from 'react-redux'
import {saveToFavourites, removeFromFavourites} from '../actions/actions'
import PropTypes from 'prop-types'
import Grid from 'material-ui/Grid'
import MovieCard from './MovieCard'
import Buttons from './Buttons'

const Movie = (props) => {
  Movie.propTypes = {
    films: PropTypes.array.isRequired
  }

  return (
    <Grid>
      <Grid container justify="center" spacing={8}>
        {props.films.map(film => (
          <MovieCard 
            key={film.id} film={film} 
            saveToFavourites={props.saveToFavourites}
            removeFromFavourites={props.removeFromFavourites}
            isFavourite={ film.id in props.favouritesMovies}
          />
        ))}    
      </Grid>
      {props.total_pages > 1 ?
        <Buttons 
          nextPage={props.nextPage} 
          prevPage={props.prevPage}>
        </Buttons> : 
        <div style={{textAlign: "center"}}>No results</div>         
      }
    </Grid>
  )
}

const mapStateToProps = state => ({
  favouritesMovies: state.storage.storeItem
})

export default connect(mapStateToProps, {saveToFavourites, removeFromFavourites})(Movie)




