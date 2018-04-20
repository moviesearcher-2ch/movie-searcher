export const GET_POPULAR_MOVIES = 'GET_POPULAR_MOVIES'
export const GET_MOVIE_DETAILS= 'GET_MOVIE_DETAILS'

export const API_KEY = `?api_key=e32e5fdd234cb8c56f917056fb6571d5`
export const URL = `https://api.themoviedb.org/3/movie/`

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
    .then(data => dispatch({
      type: GET_MOVIE_DETAILS,
      payload: data
    })
  ).catch(e => e)
}

