import React from 'react'
import PropTypes from 'prop-types'
import {GridListTile, GridListTileBar} from 'material-ui/GridList'
import Grid from 'material-ui/Grid';
import IconButton from 'material-ui/IconButton'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import {Link} from 'react-router-dom'

  
const MovieCard = (props) => {
  MovieCard.propTypes = {
    film: PropTypes.object.isRequired,
    saveToFavourites: PropTypes.func.isRequired,
    removeFromFavourites: PropTypes.func.isRequired
  }

  const path = `http://image.tmdb.org/t/p/w342/`
  const {film, saveToFavourites, removeFromFavourites, isFavourite} = props
  

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
            <IconButton
              style={isFavourite ? {color: "red"} : { color: "white"}}
              onClick={isFavourite ? () => removeFromFavourites(film.id) : () => saveToFavourites(film.id, film)}>
              <StarBorderIcon />
            </IconButton>} />
      </GridListTile>
    </Grid>
  )
}



export default MovieCard
