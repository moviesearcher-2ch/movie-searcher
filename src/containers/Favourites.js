import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {removeFromFavourites, saveToFavourites} from '../actions/actions'
import {StyledGridContainer, StyledGridItem} from '../styled/Styles'
import MovieCard from '../components/MovieCard'

const Favourites = ({saveToFavourites, removeFromFavourites, favouritesMovies}) => {
  const noResults = <i>Your favourites list is empty</i>
  return (
    <StyledGridItem>
      <StyledGridContainer>
        {!localStorage.length ? noResults :
          Object.values(favouritesMovies).map(film => (
            <MovieCard
              key={film.id} film={film}
              saveToFavourites={saveToFavourites}
              removeFromFavourites={removeFromFavourites}
              isFavourite={film.id in favouritesMovies}
            />))}
      </StyledGridContainer>
    </StyledGridItem>
  )
}

Favourites.propTypes = {
  favouritesMovies: PropTypes.object.isRequired,
  saveToFavourites: PropTypes.func.isRequired,
  removeFromFavourites: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  favouritesMovies: state.storage.storeItem
})

export default connect(mapStateToProps, {removeFromFavourites, saveToFavourites})(Favourites)
