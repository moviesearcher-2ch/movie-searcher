import React from "react"
import PropTypes from 'prop-types';
import Button from 'material-ui/Button'
import Grid from 'material-ui/Grid'

const Buttons = ({nextPage, prevPage}) => {
  Buttons.propTypes = {
    nextPage: PropTypes.func.isRequired,
    prevPage: PropTypes.func.isRequired
  }
  
  return (
    <Grid container justify="center">
      <Button 
        variant="raised" 
        color="primary" 
        style={{marginTop: "5px"}}
        onClick={nextPage}>
        Next page
      </Button>
      <Button 
        variant="raised" 
        color="primary" 
        style={{marginLeft: "10px", marginTop: "5px"}}
        onClick={prevPage}>
        Prev page
      </Button>
    </Grid>
  )
}

export default Buttons