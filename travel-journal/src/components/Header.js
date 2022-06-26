import React from 'react'
import classes from './Header.module.css'
import logo from '../Images/logo.png'

function Header() {
  return (
    <header className={classes.container}>
      <img src={logo} alt= "logo" />
      <h5>my travel journal.</h5>
    </header>
  )
}

export default Header