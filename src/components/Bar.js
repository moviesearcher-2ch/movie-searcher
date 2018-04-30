import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import ToolbarTitle from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import blue from 'material-ui/colors/blue'
import {StyledLink} from '../styled/Styles'


const Bar = () => {
  return (
    <AppBar position="static" style={{background: blue[500]}}>
      <Toolbar>
        <Typography variant="title" color="inherit">
          Movie Searcher
        </Typography>
        <StyledLink to="/">
          <ToolbarTitle>Home</ToolbarTitle>
        </StyledLink>
        <StyledLink to="/favourites">
          <ToolbarTitle>Favourites</ToolbarTitle>
        </StyledLink>
        <StyledLink to="/contact">
          <ToolbarTitle>Contact me</ToolbarTitle>
        </StyledLink>
      </Toolbar>
    </AppBar>
  )
}

export default Bar