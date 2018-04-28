import React, {Component} from 'react'
import {connect} from 'react-redux'
import {searchMovies} from '../actions/actions'
import Search from '../components/Search'
import Movie from '../components/Movie'
import Grid from 'material-ui/Grid'

class Mainpage extends Component {
  componentDidMount() {
    this.props.searchMovies()
  }

  nextPage() {
    const {total_pages, page, filter} = this.props.fetcher
    const {searchMovies} = this.props
    let next = page
 
    if (page >= total_pages) {
      searchMovies(filter)
    } 
    else {
      next++
      searchMovies(filter, next)
    }
  }

  prevPage() {
    const {total_pages, page, filter} = this.props.fetcher
    const {searchMovies} = this.props
    let prev = page

    if (page <= 1) {
      searchMovies(filter, total_pages)
    }
    else {
      prev--
      searchMovies(filter, prev)
    }
  }

  getQuery(e) {
    const value = e.target.value.toLowerCase()    
    this.props.searchMovies(value)
  }

  render() {
    const {results, total_pages} = this.props.fetcher
    
    return (
      <Grid item xs={12} style={{overflow: "hidden", marginTop: "8px"}}>
        <Search 
          getQuery={this.getQuery.bind(this)}
        /> 
        <Movie
          films={results}
          total_pages={total_pages}
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

export default connect(mapStateToProps, {searchMovies})(Mainpage)
