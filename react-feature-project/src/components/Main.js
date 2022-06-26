import React from 'react';

function Main() {
	return (
		<main className="main-container">
			<h1 className="main-container--heading">Fun fact about React</h1>
			<ul className="main-container__list">
				<li>
					<span>Was first released in 2013</span>
				</li>
				<li>
					<span>Was originally created by Jordan Walke</span>
				</li>
				<li>
					<span>Has well over 100K stars on GitHub</span>
				</li>
				<li>
					<span>Is maintained by Facebook</span>
				</li>
				<li>
					<span>
						Powers thousands of enterprise apps, including mobile apps
					</span>
				</li>
			</ul>
		</main>
	);
}

export default Main;
