import React from 'react'
import {StyledGridContainer} from '../styled/Styles'

const Contact = () => {
  return (
    <StyledGridContainer>
      <div>
        <h3>Some information about me</h3>
        <p>I hope that you enjoy my app. If you want to contact me, please use these links:</p>
        <div><a href="http://t.me/nameiseva">Telegram</a></div>
        <div><a href="https://github.com/mynameiseva">Github</a></div>
      </div>
    </StyledGridContainer>
  )
}

export default Contact