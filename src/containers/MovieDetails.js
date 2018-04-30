import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getDetails, getRecomendations, removeFromFavourites, saveToFavourites} from '../actions/actions'
import PropTypes from 'prop-types';
import {CircularProgress} from 'material-ui/Progress';
import MovieDescription from '../components/MovieDescription'
import Recomendations from '../components/Recomendations'
import {StyledGridContainer, StyledGridItem} from '../styled/Styles'

class MovieDetails extends Component {  
  componentDidMount() {
    const {filmId} = this.props.match.params
    this.props.getDetails(filmId)
    this.props.getRecomendations(filmId)
  }

  componentWillReceiveProps(nextProps) { 
    const {filmId} = this.props.match.params
    const nextfilmId = nextProps.match.params.filmId

    if (filmId !== nextfilmId) {
      this.props.getDetails(nextfilmId)
      this.props.getRecomendations(nextfilmId)
    }
  }

  render() {
    const style = {margin: "0 auto", width: "780px"}
    const {details, recomendations} = this.props.fetcher
    console.log(saveToFavourites)
    return (
      <StyledGridItem>
        <StyledGridContainer style={style}>
          {Object.keys(details).length === 0 ?
            <CircularProgress /> :
            <MovieDescription 
              details={details} 
              saveToFavourites={saveToFavourites}
              removeFromFavourites={removeFromFavourites}
              isFavourite={details.id in this.props.favouritesMovies}
            />}
          {recomendations.map(film =>
            <Recomendations key={film.id} film={film}/>
          )}
        </StyledGridContainer>
      </StyledGridItem>
    )
  }
}

MovieDetails.propTypes = {
  getDetails: PropTypes.func.isRequired,
  getRecomendations: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  fetcher: state.fetcher,
  favouritesMovies: state.storage.storeItem
})

export default connect(mapStateToProps, {getDetails, getRecomendations, removeFromFavourites, saveToFavourites})(MovieDetails)