import React from 'react'
import PropTypes from 'prop-types'
import {GridListTile} from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import {StyledGridItem, StyledGridListTileBar, StyledLink} from '../styled/Styles'

const MovieCard = (props) => {
  const {film, saveToFavourites, removeFromFavourites, isFavourite} = props
  const path = `http://image.tmdb.org/t/p/w342/`
  const imageNotFound = "http://www.51allout.co.uk/wp-content/uploads/2012/02/Image-not-found.gif"

  MovieCard.propTypes = {
    film: PropTypes.object.isRequired,
    saveToFavourites: PropTypes.func.isRequired,
    removeFromFavourites: PropTypes.func.isRequired
  }

  const isStored = value => {
    if (value) {
      removeFromFavourites(film.id)
    } else {
      saveToFavourites(film.id, film)
    }
  }

  const StarButton = () => (
    <IconButton
      style={isFavourite ? {color: "red"} : {color: "white"}}
      onClick={() => isStored(isFavourite)}>
      <StarBorderIcon/>
    </IconButton>
  )

  return (
    <StyledGridItem>
      <GridListTile>
        <StyledLink to={`/filmId/${film.id}`}>
          <img
            src={film.poster_path ? `${path}${film.poster_path}` : imageNotFound}
            alt={film.title} width="342" height="513"
          />
        </StyledLink>
        <StyledGridListTileBar
          title={film.title}
          actionIcon={<StarButton/>}/>
      </GridListTile>
    </StyledGridItem>
  )
}

export default MovieCard
