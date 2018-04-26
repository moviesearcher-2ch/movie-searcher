import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import Card, {CardActions, CardContent, CardMedia} from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';

const MovieDescription = ({details}) => {

  const margintop = {marginTop: "8px"}
  const paddingtop = {paddingTop: "8px"}
  const genres = details.genres.map(genre => genre.name + ' ')
  const path = `https://image.tmdb.org/t/p/w780/`

  MovieDescription.propTypes = {
    details: PropTypes.object.isRequired
  }
  
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
          <Divider light style={margintop} />
          <Typography component="p" variant="subheading" style={paddingtop}>
            Genres: {genres}
          </Typography>
          <Divider light style={margintop} />
          <Typography component="p" variant="subheading" style={paddingtop}>
            Budget: {details.budget + "$"}
          </Typography>
          <Divider light style={margintop} />
          <Typography component="p" variant="subheading" style={paddingtop}>
            Avarege rating: {details.vote_average} (the number of votes {details.vote_count})
          </Typography>
          <Divider light style={margintop} />
          <Typography component="p" variant="subheading" style={paddingtop}>
            Tagline: {details.tagline}
          </Typography>
          <Divider light style={margintop} />
          <Typography component="p" variant="subheading" style={paddingtop}>
            Release date: {details.release_date}
          </Typography>
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