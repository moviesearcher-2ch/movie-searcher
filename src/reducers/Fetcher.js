import {GET_POPULAR_MOVIES, GET_MOVIE_DETAILS} from '../actions/actions'

const initalState = {
  total_pages: 0,
  results: [],
  page: 1,
  data: {},
}

export default function(state = initalState, action) {
  switch (action.type) {
    case GET_POPULAR_MOVIES:
      return {
        ...state,
        total_pages: action.payload.total_pages,
        results: action.payload.results,
        page: action.payload.page
      }
      case GET_MOVIE_DETAILS: 
        return {
          ...state,
          data: action.payload
      }
    default:
      return state
  }
  
}

