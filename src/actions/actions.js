export const GET_POPULAR_MOVIES = 'GET_POPULAR_MOVIES'
export const GET_MOVIE_DETAILS= 'GET_MOVIE_DETAILS'
export const GET_RECOMENDATIONS= 'GET_RECOMENDATIONS'

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
  fetch(`${URL}${id}/recommendations${API_KEY}&language=en-US&page=1`)
    .then(res => res.json())
    .then(recomendations => dispatch({
      type: GET_RECOMENDATIONS,
      payload: recomendations
    })
  ).catch(e => e)
}

