import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {GridListTile, GridListTileBar} from 'material-ui/GridList';
import Grid from 'material-ui/Grid';
import IconButton from 'material-ui/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import {Link} from 'react-router-dom'

  
export class MovieCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isSaved: false
    }
    this.storeMovie = this.storeMovie.bind(this)
  }
  
  storeMovie() {
    const {isSaved} = this.state
    if(isSaved) {

    }
  }

  render() {
    const path = `http://image.tmdb.org/t/p/w342/`
    const {film, saveToFavourites, removeFromFavourites, isFavourite} = this.props

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
                style={isFavourite ? { color: "red" } : {color: "white"}}
                onClick={isFavourite ? () => removeFromFavourites(film.id) : () => saveToFavourites(film.id, film)}>
                <StarBorderIcon />
              </IconButton>} />
        </GridListTile>
      </Grid>
    )
  }
}

MovieCard.propTypes = {
  film: PropTypes.object.isRequired
}

export default MovieCard
