import React from 'react'
import {Link} from 'react-router-dom'
import Card, {CardActions, CardContent, CardMedia} from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';

const MovieDescription = ({data}) => {
  const margintop = {marginTop: "8px"}
  const paddingtop ={paddingTop: "8px"}
  const genres = data.genres.map(genre => genre.name + ' ')
  const path = `https://image.tmdb.org/t/p/w780/`
  return (
    <Grid item>
      <Card style={{ width: "780px" }}>
        <CardMedia
          image={`${path}${data.backdrop_path}`}
          title="Contemplative Reptile"
          style={{ height: "439px", width: "780px" }}
        />
        <CardContent>
          <Typography gutterBottom variant="title" component="h2">
            {data.title}
          </Typography>
          <Typography variant="subheading" component="p" >
            {data.overview}
          </Typography>
          <Divider light style={margintop} />
          <Typography component="p" variant="subheading" style={paddingtop}>
            Genres: {genres}
          </Typography>
          <Divider light style={margintop} />
          <Typography component="p" variant="subheading" style={paddingtop}>
            Budget: {data.budget + "$"}
          </Typography>
          <Divider light style={margintop} />
          <Typography component="p" variant="subheading" style={paddingtop}>
            Avarege rating: {data.vote_average} (the number of votes {data.vote_count})
          </Typography>
          <Divider light style={margintop} />
          <Typography component="p" variant="subheading" style={paddingtop}>
            Tagline: {data.tagline}
          </Typography>
          <Divider light style={margintop} />
          <Typography component="p" variant="subheading" style={paddingtop}>
            Release date: {data.release_date}
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