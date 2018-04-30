import React from 'react'
import PropTypes from 'prop-types'
import {StyledButton, StyledGridContainer} from '../styled/Styles'

const Buttons = ({nextPage, prevPage}) => {
  Buttons.propTypes = {
    nextPage: PropTypes.func.isRequired,
    prevPage: PropTypes.func.isRequired
  }

  return (
    <StyledGridContainer>
      <StyledButton onClick={prevPage}>PREV PAGE</StyledButton>
      <StyledButton onClick={nextPage} px="10px">NEXT PAGE</StyledButton>
    </StyledGridContainer>
  )
}

export default Buttons