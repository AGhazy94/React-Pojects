import React from 'react';
import classes from './Navbar.module.css';
import logo from '../images/logo.png';

function Navbar() {
	return (
		<nav className={classes.container}>
			<img src={logo} alt="airbnb logo" />
		</nav>
	);
}

export default Navbar;
