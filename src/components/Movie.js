import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';

const Movie = ({ films, prevPage, nextPage }) => {
  const path = `http://image.tmdb.org/t/p/w342/`

  return (
    <Grid item xs={12}>
      <Grid container justify="center" spacing={8}>
        {films.map(film => (
          <Grid key={film.id} item>
            <img src={`${path}${film.poster_path}`} alt="" />
          </Grid>
        ))}
      </Grid>
    </Grid>

  )
}

export default Movie