import React from 'react';
import classes from './Footer.module.css';
import twitterLogo from '../images/Twitter Icon footer.png';
import facebookLogo from '../images/Facebook Icon footer.png';
import instagramLogo from '../images/Instagram Icon footer.png';
import githubLogo from '../images/GitHub Icon footer.png';

function Footer() {
	return (
		<footer className={classes.footer}>
			<a href="https://twitter.com"
				target="_blank"
				rel="noreferrer noopener">
				<img src={twitterLogo} alt="Twitter" />
			</a>
			<a href="https://facebook.com"
				target="_blank"
				rel="noreferrer noopener">
				<img src={facebookLogo} alt="Facebook" />
			</a>
			<a href="https://instagram.com"
				target="_blank"
				rel="noreferrer noopener">
				<img src={instagramLogo} alt="Instagram" />
			</a>
			<a
				href="https://github.com/AGhazy94"
				target="_blank"
				rel="noreferrer noopener"
			>
				<img src={githubLogo} alt="Github" />
			</a>
		</footer>
	);
}

export default Footer;
