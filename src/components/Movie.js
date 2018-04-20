import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import MovieCard from './MovieCard'

const Movie = ({films}) => {
  Movie.propTypes = {
    films: PropTypes.array.isRequired
  }
  
  return (
    <Grid item xs={12} style={{overflow: "hidden", marginTop: "8px"}}>
      <Grid container justify="center" spacing={8}>
        {films.map(film => (
          <MovieCard key={film.id} film={film}/>
        ))}       
      </Grid>
    </Grid>
  )
}

export default Movie

