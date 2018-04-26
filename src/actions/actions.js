export const GET_POPULAR_MOVIES = 'GET_POPULAR_MOVIES'
export const GET_MOVIE_DETAILS = 'GET_MOVIE_DETAILS'
export const GET_RECOMENDATIONS = 'GET_RECOMENDATIONS'
export const SEARCH_MOVIES = 'SEARCH_MOVIES'
export const SAVE_TO_FAVOURITES = 'SAVE_TO_FAVOURITES'
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES'

const API_KEY = `?api_key=e32e5fdd234cb8c56f917056fb6571d5`
const URL = `https://api.themoviedb.org/3/movie/`

export const getPopular = (page = 1) => dispatch => {
  fetch(`${URL}popular${API_KEY}&page=${page}`)
    .then(res => res.json())
    .then(data => dispatch({
      type: GET_POPULAR_MOVIES,
      payload: data
    })
  ).catch(e => e)
}

export const getDetails = id => dispatch => {
  fetch(`${URL}${id}${API_KEY}`)
    .then(res => res.json())
    .then(details => dispatch({
      type: GET_MOVIE_DETAILS,
      payload: details
    })
  ).catch(e => e)
}

export const getRecomendations = id => dispatch => {
  fetch(`${URL}${id}/recommendations${API_KEY}&page=1`)
    .then(res => res.json())
    .then(recomendations => dispatch({
      type: GET_RECOMENDATIONS,
      payload: recomendations
    })
  ).catch(e => e)
}

export const searchMovies = (query = '', page = 1) => dispatch => {
  const url = `https://api.themoviedb.org/3/search/movie`
  fetch(`${url}${API_KEY}&query=${query}&page=${page}`)
    .then(res => res.json())
    .then(searchResults => dispatch({
      type: SEARCH_MOVIES,
      payload: searchResults
    })
  ).catch(e => e)
} 

export const saveToFavourites = (key, value) => {
  const serializedFilm = JSON.stringify(value)
  localStorage.setItem(key, serializedFilm)
  
  return {
    type: SAVE_TO_FAVOURITES,
    payload: value
  }
}

export const removeFromFavourites = key => {
  localStorage.removeItem(key)
  
  return { 
    type: REMOVE_FROM_FAVOURITES,
    payload: {key}
  }
}
