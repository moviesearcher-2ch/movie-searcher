import React from 'react'
import PropTypes from 'prop-types'
import {GridListTile, GridListTileBar} from 'material-ui/GridList'
import Grid from 'material-ui/Grid'
import {Link} from 'react-router-dom'

const Recomendations = ({film}) => {
  Recomendations.propTypes = {
    film: PropTypes.object.isRequired
  }

  const path = `http://image.tmdb.org/t/p/w185/`

  return (
    <Grid item>
      <GridListTile >
        <Link to={`/movie_detail/${film.id}`} className="links">
          <img
            src={`${path}${film.poster_path}`}
            alt={film.title}
          />
        </Link>
        <GridListTileBar
          title={film.title}
          titlePosition="bottom"
          actionPosition="left"
        />
      </GridListTile>
    </Grid>
  )
}

export default Recomendations
