import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getDetails} from '../actions/actions'
import Grid from 'material-ui/Grid';
import PropTypes from 'prop-types';
import MovieDescription from '../components/MovieDescription'

class MovieDetails extends Component {  

  componentWillMount() {
    const {filmId} = this.props.match.params
    this.props.getDetails(filmId)
  }

  render() {
    const {data} = this.props.fetcher
    return (
      <Grid item xs={12} style={{overflow: "hidden", marginTop: "8px"}}>
        <Grid container justify="center">
          {Object.keys(data).length === 0 ? 
            <h1>Loading . . .</h1> : 
            <MovieDescription data={data}/>}
        </Grid>
    </Grid>
    )
  }
}

const mapStateToProps = state => ({
  fetcher: state.fetcher
})

export default connect(mapStateToProps, {getDetails})(MovieDetails)