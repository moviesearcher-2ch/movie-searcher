export const GET_MOVIE_DETAILS = 'GET_MOVIE_DETAILS'
export const GET_RECOMENDATIONS = 'GET_RECOMENDATIONS'
export const SEARCH_MOVIES = 'SEARCH_MOVIES'
export const SAVE_TO_FAVOURITES = 'SAVE_TO_FAVOURITES'
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES'

const API_KEY = `?api_key=e32e5fdd234cb8c56f917056fb6571d5`
const URL = `https://api.themoviedb.org/3/movie/`

export const getDetails = id => async dispatch => {
  try {
    const res = await fetch(`${URL}${id}${API_KEY}`)
    const details = await res.json()
    dispatch({
      type: GET_MOVIE_DETAILS,
      payload: details
    })
  } catch(e) {
    console.log(e)
  }
}

export const getRecomendations = id => async dispatch => {
  try {
    const res = await fetch(`${URL}${id}/recommendations${API_KEY}&page=1`)
    const recomendations = await res.json() 
    dispatch({
      type: GET_RECOMENDATIONS,
      payload: recomendations
    })
  } catch (e) {
      console.log(e)            
  }
}

export const searchMovies = (query = '', page = 1) => async dispatch => {
  const popularMoviesUrl = `${URL}popular${API_KEY}&page=${page}`
  const searchMoviesUrl = `https://api.themoviedb.org/3/search/movie${API_KEY}&query=${query}&page=${page}`
  const url = query === '' ? popularMoviesUrl : searchMoviesUrl
  
  try {
    const res = await fetch(url) 
    const data = await res.json()
    dispatch({
      type: SEARCH_MOVIES,
      payload: {data, filter: query}
    })
  } catch (e) {
    console.log(e)
  }
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
