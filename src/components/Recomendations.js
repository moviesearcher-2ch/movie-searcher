import React from 'react'
import PropTypes from 'prop-types'
import {GridListTile} from 'material-ui/GridList'
import {StyledGridItem, StyledGridListTileBar, StyledLink} from '../styled/Styles'

const Recomendations = ({film}) => {
  Recomendations.propTypes = {
    film: PropTypes.object.isRequired
  }

  const path = `http://image.tmdb.org/t/p/w185/`
  
  return (
    <StyledGridItem>
      <GridListTile>
        <StyledLink to={`/filmId/${film.id}`}>
          <img
            src={`${path}${film.poster_path}`}
            alt={film.title}/>
        </StyledLink>
        <StyledGridListTileBar title={film.title}/>
      </GridListTile>
    </StyledGridItem>
  )
}

export default Recomendations
