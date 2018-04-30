import React from 'react'
import PropTypes from 'prop-types'
import Card, {CardActions, CardContent, CardMedia} from 'material-ui/Card'
import Button from 'material-ui/Button'
import {StyledDivider, StyledTypography, StyledGridItem, StyledLink} from '../styled/Styles'

const MovieDescription = ({details, removeFromFavourites, saveToFavourites, isFavourite}) => {
  MovieDescription.propTypes = {
    details: PropTypes.object.isRequired,
    removeFromFavourites: PropTypes.func.isRequired,
    saveToFavourites: PropTypes.func.isRequired,
    isFavourite: PropTypes.bool.isRequired
  }

  const genres = details.genres.map(genre => genre.name + ' ')
  const path = `https://image.tmdb.org/t/p/w780/`
  const imageNotFound = `http://leeford.in/wp-content/uploads/2017/09/image-not-found.jpg`
  const imagePath = details.backdrop_path ? `${path}${details.backdrop_path}` : imageNotFound
  const buttonColor = isFavourite ? "secondary" :"primary"

  const isStored = value => {
    if (value) {
      removeFromFavourites(details.id)
    } else {
      saveToFavourites(details.id, details)
    }
  }

  return (
    <StyledGridItem xs={12}>
      <Card>
        <CardMedia
          image={imagePath}
          title={details.title}
          style={{height: "439px"}}
        />
        <CardContent>
          <StyledTypography gutterBottom variant="title" component="h2">
            {details.title}
          </StyledTypography>
          <StyledTypography>
            {details.overview}
          </StyledTypography>
          <StyledDivider />
          <StyledTypography>
            Genres: {genres}
          </StyledTypography>
          <StyledDivider />
          <StyledTypography>
            Budget: {details.budget + "$"}
          </StyledTypography>
          <StyledDivider />
          <StyledTypography>
            Avarege rating: {details.vote_average} (the number of votes {details.vote_count})
          </StyledTypography>
          <StyledDivider />
          <StyledTypography>
            Tagline: {details.tagline}
          </StyledTypography>
          <StyledDivider />
          <StyledTypography>
            Release date: {details.release_date}
          </StyledTypography>
        </CardContent>
        <CardActions>
          <Button
            color={buttonColor}
            onClick={() => isStored(isFavourite)} >
            {isFavourite ? "REMOVE FROM FAVOURITES" : "ADD FILM TO FAVOURITES"}
          </Button>
          <StyledLink to="/">
            <Button color="primary">
              Back to main page
            </Button>
          </StyledLink>
        </CardActions>
      </Card>
    </StyledGridItem>
  )
}

export default MovieDescription