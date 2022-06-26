import React from 'react';
import classes from './Hero.module.css';
import photoGrid from '../images/photo grid.png';

function Hero() {
	return (
		<section className={classes.container}>
			<img src={photoGrid} alt="nice" />
			<div className={classes['container__lead']}>
				<h2>Online Experiences</h2>
				<p>
					Join unique interactive activities led by one-of-a-kind hosts—all
					without leaving home.
				</p>
			</div>
		</section>
	);
}

export default Hero;
