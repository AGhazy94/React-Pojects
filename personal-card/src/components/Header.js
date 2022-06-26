import React from 'react';
import classes from './Header.module.css';
import profilePic from '../images/Ahmed-PP.jpg';
import linkedInIcon from '../images/linkedin.png';
import emailIcon from '../images/Mail.png';

function Header() {
	return (
		<header className={classes.header}>
			<img className={classes.header__img} src={profilePic} alt="Ahmed Ghazy" />
			<div className={classes.header__info}>
				<h2 className={classes['header__info--name']}>Ahmed Ghazy</h2>
				<p className={classes['header__info--title']}>Frontend Developer</p>
			</div>
			<div className={classes.header__contact}>
				<a href='mailto:ahmed.h.ghazy@gmail.com' target='_blank' rel='noreferrer noopener' className={classes['header__contact__email']}>
					<img
						className={classes['header__contact__email--icon']}
						src={emailIcon}
						alt="email"
					/>
					<p className={classes['header__contact__email--text']}>Email</p>
				</a>
				<a href='https://www.linkedin.com/in/ahmedhg94/' target='_blank' rel='noreferrer noopener' className={classes['header__contact__linkedin']}>
					<img
						className={classes['header__contact__linkedin--icon']}
						src={linkedInIcon}
						alt="LinkedIn"
					/>
					<p className={classes['header__contact__linkedin--text']}>LinkedIn</p>
				</a>
			</div>
		</header>
	);
}

export default Header;
