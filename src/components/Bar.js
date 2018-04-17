import React from 'react'

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import ToolbarTitle from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography';
import blue from 'material-ui/colors/blue'

import {Link} from 'react-router-dom'

const Bar = () => {
  return (
    <AppBar position="static" style={{background: blue[500]}}>
      <Toolbar>
        <Typography variant="title" color="inherit">
          Movie Searcher
        </Typography>
        <Link to='/home'>
          <ToolbarTitle>Home</ToolbarTitle>
        </Link> 
        <Link to='/home'>
          <ToolbarTitle>About Us</ToolbarTitle>
        </Link> 
        <Link to='/home'>
          <ToolbarTitle>Another Page</ToolbarTitle>
        </Link>  
      </Toolbar>
    </AppBar>
  )
}

export default Bar