import React from 'react'
import {connect} from 'react-redux'
import {saveToFavourites, removeFromFavourites} from '../actions/actions'
import PropTypes from 'prop-types'
import MovieCard from '../components/MovieCard'
import Buttons from '../components/Buttons'
import {StyledGridContainer} from '../styled/Styles'

const Movies = (props) => {
  Movies.propTypes = {
    films: PropTypes.array.isRequired
  }

  const {
    saveToFavourites,
    removeFromFavourites,
    favouritesMovies,
    nextPage, prevPage,
    films } = props
    
  return (
    <StyledGridContainer>
      {films.map(film => (
        <MovieCard
          key={film.id} film={film}
          saveToFavourites={saveToFavourites}
          removeFromFavourites={removeFromFavourites}
          isFavourite={film.id in favouritesMovies}
        />
      ))}
      {props.total_pages > 1 ?
        <Buttons
          nextPage={nextPage}
          prevPage={prevPage}>
        </Buttons> :
        <div style={{textAlign: "center"}}>No results</div>
      }
    </StyledGridContainer>
  )
}

const mapStateToProps = state => ({
  favouritesMovies: state.storage.storeItem
})

export default connect(mapStateToProps, {saveToFavourites, removeFromFavourites})(Movies)




