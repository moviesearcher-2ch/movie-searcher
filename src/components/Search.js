import React from 'react'
import PropTypes from 'prop-types'
import Grid from 'material-ui/Grid'
import TextField from 'material-ui/TextField'
import {DebounceInput} from 'react-debounce-input'

const Search = ({getQuery}) => {
  Search.propTypes = {
    getQuery: PropTypes.func.isRequired
  }

  const textField = props => (
    <TextField {...props}
      type="search"
      label="Search field"
      style={{ width: "500px", marginBottom: "10px" }}
    />
  )

  return (
    <Grid container justify="center">
      <DebounceInput 
        autoFocus
        element={textField}
        minLength={2}
        debounceTimeout={300}
        onChange={getQuery}
      />
    </Grid>
  )
}

export default Search