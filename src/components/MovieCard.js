import React from 'react'
import PropTypes from 'prop-types'
import {GridListTile, GridListTileBar} from 'material-ui/GridList'
import Grid from 'material-ui/Grid';
import IconButton from 'material-ui/IconButton'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import {Link} from 'react-router-dom'

const MovieCard = (props) => {
  const {film, saveToFavourites, removeFromFavourites, isFavourite} = props
  const path = `http://image.tmdb.org/t/p/w342/`
  const pictureNotFound = "http://www.51allout.co.uk/wp-content/uploads/2012/02/Image-not-found.gif"

  MovieCard.propTypes = {
    film: PropTypes.object.isRequired,
    saveToFavourites: PropTypes.func.isRequired,
    removeFromFavourites: PropTypes.func.isRequired
  }

  const isStored = value => {
    if(value) {
      removeFromFavourites(film.id)
    } else {
      saveToFavourites(film.id, film)
    }
  }

  return (
    <Grid item>
      <GridListTile style={{height: '489px'}}>
        <Link to={`/movie_detail/${film.id}`} className="links">
          <img
            src={film.poster_path ? `${path}${film.poster_path}` : pictureNotFound}
            alt={film.title} width="342" height="513"
          />
        </Link>
        <GridListTileBar
          title={film.title}
          titlePosition="bottom"
          actionPosition="left"
          actionIcon={
            <IconButton
              style={isFavourite ? {color: "red"} : {color: "white"}}
              onClick={() => isStored(isFavourite)}>
              <StarBorderIcon />
            </IconButton>} />
      </GridListTile>
    </Grid>
  )
}



export default MovieCard
