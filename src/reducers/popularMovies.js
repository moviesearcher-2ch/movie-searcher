import {GET_POPULAR_MOVIES} from '../actions/actions'

const initalState = {
  total_pages: 0,
  results: [],
  page: null
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
    default:
      return state
  }
}

