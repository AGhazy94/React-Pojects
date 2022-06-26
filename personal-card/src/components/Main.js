import React from 'react';
import classes from './Main.module.css';

function Main() {
	return (
		<main className={classes.main}>
			<div className={classes.main__container}>
				<h3>About</h3>
				<p>
					I am a frontend developer with real world experience, I love making
					everything simple and pixel-perfect, as well I am obsessed with
					learning about new technologies.
				</p>
			</div>
			<div className={classes.main__container}>
				<h3>Interests</h3>
				<p>
					Video Games, Coffee fanatic, Music, Reading, Learning about new
					cultures, and Psychology. 
				</p>
			</div>
		</main>
	);
}

export default Main;
