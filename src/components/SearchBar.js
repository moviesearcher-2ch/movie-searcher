import React from 'react'
import PropTypes from 'prop-types'
import {DebounceInput} from 'react-debounce-input'
import {StyledTextField, StyledGridContainer} from '../styled/Styles'

const Search = ({getQuery}) => {
  Search.propTypes = {
    getQuery: PropTypes.func.isRequired
  }
  return (
    <StyledGridContainer>
      <DebounceInput
        autoFocus
        element={StyledTextField}
        minLength={2}
        debounceTimeout={300}
        onChange={getQuery}
      />
    </StyledGridContainer>
  )
}

export default Search