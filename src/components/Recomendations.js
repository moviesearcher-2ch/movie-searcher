import React from 'react'
import {GridListTile, GridListTileBar} from 'material-ui/GridList';
import Grid from 'material-ui/Grid';
import IconButton from 'material-ui/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import {Link} from 'react-router-dom'

const Recomendations = ({film}) => {
    const path = `http://image.tmdb.org/t/p/w185/`
    return (
      <Grid item>
        <GridListTile >
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
                <IconButton style={{ color: "white" }}>
                  <StarBorderIcon />
                </IconButton>
              </Link>} />
        </GridListTile>
      </Grid>
    )
  }


export default Recomendations
