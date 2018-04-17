export const GET_POPULAR_MOVIES = 'GET_POPULAR_MOVIES'

export const API_KEY = `api_key=e32e5fdd234cb8c56f917056fb6571d5`
export const URL = `https://api.themoviedb.org/3/`

export const getPopularMovies = (page = 1) => dispatch => {
  fetch(`${URL}movie/popular?${API_KEY}&language=en-US&page=${page}`)
    .then(res => res.json())
    .then(data => dispatch({
      type: GET_POPULAR_MOVIES,
      payload: data
    })
  )
}

