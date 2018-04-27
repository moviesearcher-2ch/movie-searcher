import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getPopular, searchMovies} from '../actions/actions'
import Search from '../components/Search'
import Movie from '../components/Movie'
import Grid from 'material-ui/Grid'

class Mainpage extends Component {
  componentDidMount() {
    this.props.getPopular()
  }

  nextPage() {
    const {total_pages, page} = this.props.fetcher
    const {getPopular} = this.props
    let next = page
 
    if (page >= total_pages) {
      getPopular()
    } 
    else {
      next++
      getPopular(next)
    }
  }

  prevPage() {
    const {total_pages, page} = this.props.fetcher
    const {getPopular} = this.props
    let prev = page

    if (page <= 1) {
      getPopular(total_pages)
    }
    else {
      prev--
      getPopular(prev)
    }
  }

  getQuery(e) {
    const value = e.target.value.toLowerCase()
    
    if (value) {
      this.props.searchMovies(value) 
    }
    else {
      this.props.getPopular()
    } 
  }

  render() {
    const {results} = this.props.fetcher
    
    return (
      <Grid item xs={12} style={{overflow: "hidden", marginTop: "8px"}}>
        <Search 
          getQuery={this.getQuery.bind(this)}
        /> 
        <Movie
          films={results}
          nextPage={this.nextPage.bind(this)}
          prevPage={this.prevPage.bind(this)}
        />
      </Grid>
    )
  }
}

const mapStateToProps = state => ({
  fetcher: state.fetcher
})

export default connect(mapStateToProps, {getPopular, searchMovies})(Mainpage)
