import React, {Component} from 'react'
import {connect} from 'react-redux'
import {searchMovies} from '../actions/actions'
import SearchBar from '../components/SearchBar'
import Movies from './Movies'
import {StyledGridItem} from '../styled/Styles'

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
      <StyledGridItem>    
        <SearchBar 
          getQuery={this.getQuery.bind(this)}
        /> 
        <Movies
          films={results}
          total_pages={total_pages}
          nextPage={this.nextPage.bind(this)}
          prevPage={this.prevPage.bind(this)}
        />
      </StyledGridItem>
    )
  }
}

const mapStateToProps = state => ({
  fetcher: state.fetcher
})

export default connect(mapStateToProps, {searchMovies})(Mainpage)
