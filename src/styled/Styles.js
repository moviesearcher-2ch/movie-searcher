import styled, {injectGlobal} from "styled-components"

import Button from 'material-ui/Button'
import Grid from 'material-ui/Grid'
import {GridListTileBar} from 'material-ui/GridList'
import TextField from 'material-ui/TextField'
import Typography from 'material-ui/Typography'
import Divider from 'material-ui/Divider'
import {Link} from 'react-router-dom'

injectGlobal`
  body {
    font-family: 'Roboto', sans-serif; 
    margin: 0;
    padding: 0;
    text-decoration: none;
  }

  li {
    list-style: none;
  }
`

export const StyledButton = styled(Button).attrs({
  variant: "raised", 
  color: "primary",
  marginleft: props => props.px
})`
  && {
    margin-left: ${props => props.marginleft};
    margin-top: 5px;
  }
`

export const StyledGridItem = styled(Grid).attrs({
  item: true
})`
  && {
    margin-top: 8px;
    overflow: hidden;
  }
`

export const StyledGridContainer = styled(Grid).attrs({
  container: true,
  spacing: 8,
  justify: "center"
})`
  && {
    margin-bottom: 3px;
  }
`

export const StyledGridListTileBar = styled(GridListTileBar).attrs({
  titlePosition: "bottom",
  actionPosition: "left"
})``

export const StyledTextField = styled(TextField).attrs({
  type: "search",
  label: "Search the movie"
})`
  && {
    width: 500px;
    margin-bottom: 8px;
    margin-top: 2px;
  }
`

export const StyledTypography = styled(Typography).attrs({
  component: props => props.component || "p",
  variant: props => props.variant || "subheading"
})`
 && {
   margin-top: 8px;
 } 
`

export const StyledDivider = styled(Divider).attrs({
  light: true
})` 
  && {
    margin-top: 8px;
  }
`
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #FFFFFF;
  &:hover {
    background: #82B1FF;
  }
`