import React from "react"
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'
import Grid from 'material-ui/Grid'
import styled from "styled-components"

const Buttons = ({nextPage, prevPage}) => {
  Buttons.propTypes = {
    nextPage: PropTypes.func.isRequired,
    prevPage: PropTypes.func.isRequired
  }

  const StyledButton = styled(Button).attrs({
    variant: "raised", 
    color: "primary",
    marginleft: props => props.px || ""
  })`
    && {
      margin-top: 5px;
      margin-left: ${props => props.marginleft}
    }
  `
  return (
    <Grid container justify="center">
      <StyledButton onClick={prevPage}>PREV PAGE</StyledButton>
      <StyledButton onClick={nextPage} px="10px">NEXT PAGE</StyledButton>
    </Grid>
  )
}

export default Buttons