import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getPopular} from '../actions/actions'
import Movie from '../components/Movie'
import Buttons from '../components/Buttons'

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

  render() {
    const {results} = this.props.fetcher
    console.log(results)
    return (
      <div>
        <Movie films={results}/>
        <Buttons
          nextPage={this.nextPage.bind(this)} 
          prevPage={this.prevPage.bind(this)}
        />
      </div>   
    )
  }
}

const mapStateToProps = state => ({
  fetcher: state.fetcher
})

export default connect(mapStateToProps, {getPopular})(Mainpage)
