import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getDetails, getRecomendations} from '../actions/actions'
import Grid from 'material-ui/Grid';
import PropTypes from 'prop-types';
import {CircularProgress} from 'material-ui/Progress';
import MovieDescription from '../components/MovieDescription'
import Recomendations from '../components/Recomendations'

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
    const {details, recomendations} = this.props.fetcher

    return (
      <Grid style={{overflow: "hidden"}}>
        <Grid
          container
          justify="space-around"
          spacing={8}
          style={{margin: "0 auto", width: "780px"}}>
          {Object.keys(details).length === 0 ?
            <CircularProgress /> :
            <MovieDescription details={details} />}
            {recomendations.map(film =>
              <Recomendations key={film.id} film={film} />
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