import React from 'react'
import PropTypes from 'prop-types';
import {GridListTile, GridListTileBar} from 'material-ui/GridList';
import Grid from 'material-ui/Grid';
import IconButton from 'material-ui/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import {Link} from 'react-router-dom'

const MovieCard = ({film}) => {
  MovieCard.propTypes = {
    film: PropTypes.object.isRequired
  }
  const path = `http://image.tmdb.org/t/p/w342/`
  return (
    <Grid item>
      <GridListTile style={{height: '489px'}}>
        <Link to={`/f/${film.id}`} className="links">
          <img
            src={`${path}${film.poster_path}`}
            alt={film.title}
          />
        </Link>
        <GridListTileBar
          title={film.title}
          titlePosition="bottom"
          actionPosition="left"
          actionIcon={
            <Link to="/selected">
              <IconButton style={{color: "white"}}>
                <StarBorderIcon />
              </IconButton>
            </Link>} />
      </GridListTile>
    </Grid>
  )
}

export default MovieCard