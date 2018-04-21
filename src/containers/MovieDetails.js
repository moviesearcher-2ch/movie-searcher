import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getDetails, getRecomendations} from '../actions/actions'
import Grid from 'material-ui/Grid';
import PropTypes from 'prop-types';
import MovieDescription from '../components/MovieDescription'
import Recomendations from '../components/Recomendations'

class MovieDetails extends Component {  
  componentWillMount() {
    const {filmId} = this.props.match.params
    this.props.getDetails(filmId)
    this.props.getRecomendations(filmId)
  }
  
  render() {
    const {details, recomendations} = this.props.fetcher
    
    return (
      <Grid style={{overflow: "hidden"}}>
        <Grid container justify="center">
          {Object.keys(details).length === 0 ?
            <h1>Loading . . .</h1> :
            <MovieDescription details={details} />}
        </Grid>
        <Grid container justify="center" spacing={8}>
          {recomendations.slice(0, 6).map(film =>
            <Recomendations 
              key={film.id} 
              film={film} />
          )}
        </Grid>
      </Grid>
    )
  }
}

MovieDetails.propTypes = {
  getDetails: PropTypes.func.isRequired,
  getRecomendations: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  fetcher: state.fetcher
})

export default connect(mapStateToProps, {getDetails, getRecomendations})(MovieDetails)