import React from 'react'
import classes from './Header.module.css'
import trollFace from '../images/Troll Face.png'

function Header() {
  return (
    <header className={classes.headerContainer}>
      <div className={classes.headerContainer__logo}>
      <img src={trollFace} alt='Troll Face' />
      <h2>Meme Generator</h2>
      </div>
      <h4>React Course - Project 3</h4>
    </header>
  )
}

export default Header