import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getPopularMovies} from '../actions/actions'
import Movie from '../components/Movie'

class Test extends Component {
  componentDidMount() {
    this.props.getPopularMovies()
  }

  nextPage() {
    const {total_pages, page} = this.props.popularMovies
    const {getPopularMovies} = this.props
    let next = page
 
    if (page >= total_pages) {
      getPopularMovies()
    } 
    else {
      next++
      getPopularMovies(next)
    }
  }

  prevPage() {
    const {total_pages, page} = this.props.popularMovies
    const {getPopularMovies} = this.props
    let prev = page

    if (page <= 1) {
      getPopularMovies(total_pages)
    }
    else {
      prev--
      getPopularMovies(prev)
    }
  }

  render() {
    const {results} = this.props.popularMovies

    return (
      <Movie
       films={results} 
       nextPage={this.nextPage} 
       prevPage={this.prevPage}
      />
    )
  }
}

const mapStateToProps = state => ({
  popularMovies: state.popularMovies
})

export default connect(mapStateToProps, {getPopularMovies})(Test)
