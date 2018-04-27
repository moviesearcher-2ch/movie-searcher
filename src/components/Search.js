import React from 'react'
import PropTypes from 'prop-types'
import Grid from 'material-ui/Grid'
import TextField from 'material-ui/TextField'
import {DebounceInput} from 'react-debounce-input'

const Search = ({searchMovies, getQuery}) => {
  Search.propTypes = {
    searchMovies: PropTypes.func.isRequired,
    getQuery: PropTypes.func.isRequired
  }

  const textField = props => (
    <TextField {...props}
      style={{ width: "500px", marginBottom: "10px" }}
    />
  )

  return (
    <Grid container justify="center">
      <DebounceInput 
        element={textField}
        minLength={2}
        debounceTimeout={300}
        onChange={getQuery}
      />
    </Grid>
  )
}

export default Search