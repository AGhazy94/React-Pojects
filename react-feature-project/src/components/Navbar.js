import React from 'react';
import reactLogo from '../images/reactjs-icon.png';

function Navbar() {
	return (
		<nav className='nav-container'>
			<div className='nav-container__logo'>
				<img className='nav-container__logo--img' src={reactLogo} alt="ReactJS Logo" />
        <h4 className='nav-container__logo--heading'>ReactFacts</h4>
			</div>
			<p className='nav-container--title'>React Course - Project 1</p>
		</nav>
	);
}

export default Navbar;
