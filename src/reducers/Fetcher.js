import {GET_POPULAR_MOVIES, GET_MOVIE_DETAILS, GET_RECOMENDATIONS} from '../actions/actions'

const initalState = {
  total_pages: 0,
  results: [],
  page: 1,
  details: {},
  recomendations: []
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
          details: action.payload
      }
      case GET_RECOMENDATIONS:
      return {
        ...state,
        recomendations: action.payload.results
      }

    default:
      return state
  }
  
}

