import {
  GET_MOVIE_DETAILS,
  GET_RECOMENDATIONS,
  SEARCH_MOVIES
} from '../actions/actions'


const initalState = {
  total_pages: 0,
  results: [],
  page: 1,
  details: {},
  recomendations: [],
  filter: ''
}

export default function (state = initalState, action) {
  switch (action.type) {
    case GET_MOVIE_DETAILS:
      return {
        ...state,
        details: action.payload
      }
    case GET_RECOMENDATIONS:
      return {
        ...state,
        recomendations: action.payload.results.slice(0, 8)
      }
    case SEARCH_MOVIES:
      return {
        ...state,
        total_pages: action.payload.data.total_pages,
        results: action.payload.data.results,
        page: action.payload.data.page,
        filter: action.payload.filter
      }   
    default:
      return state
  }
}

