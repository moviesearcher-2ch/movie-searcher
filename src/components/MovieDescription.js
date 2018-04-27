import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import Card, {CardActions, CardContent, CardMedia} from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'
import Divider from 'material-ui/Divider'
import styled from "styled-components";

const MovieDescription = ({details}) => {
  const genres = details.genres.map(genre => genre.name + ' ')
  const path = `https://image.tmdb.org/t/p/w780/`

  MovieDescription.propTypes = {
    details: PropTypes.object.isRequired
  }
  
  const StyledTypography = styled(Typography).attrs({
    component: "p",
    variant: "subheading"
  })`
    && {
      margin-top: 8px;
    }
  `

  const StyledDivider = styled(Divider).attrs({
    light: true,
  })`
    margin-top: 8px
  `

  return (
    <Grid item xs={12}>
      <Card>
        <CardMedia
          image={`${path}${details.backdrop_path}`}
          title={details.title}
          style={{height: "439px"}}
        />
        <CardContent>
          <Typography gutterBottom variant="title" component="h2">
            {details.title}
          </Typography>
          <Typography variant="subheading" component="p" >
            {details.overview}
          </Typography>
          <StyledDivider/>
          <StyledTypography>
            Genres: {genres}
          </StyledTypography>
          <StyledDivider/>
          <StyledTypography>
            Budget: {details.budget + "$"}
          </StyledTypography>
          <StyledDivider/>
          <StyledTypography>
            Avarege rating: {details.vote_average} (the number of votes {details.vote_count})
          </StyledTypography>
          <StyledDivider/>
          <StyledTypography>
            Tagline: {details.tagline}
          </StyledTypography>
          <StyledDivider/>
          <StyledTypography>
            Release date: {details.release_date}
          </StyledTypography>
        </CardContent>
        <CardActions>
          <Link to="/" className="links">
            <Button size="small" color="primary">
              Back to main page
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default MovieDescription