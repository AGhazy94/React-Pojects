import React from 'react';
import classes from './Card.module.css';
import star from '../images/Star 1.png';

function Card(props) {
	return (
		<div className={classes.card}>
			<div>
				<img
					className={classes['card__photo']}
					src={`./images/${props.img}`}
					alt=""
				/>
				{<span className={props.status ? classes['card__photo--status'] : classes['hidden'] }>{props.status}</span>}
			</div>
			<div className={classes['card__info']}>
				<img className={classes['card__info--star']} src={star} alt="star" />
				<span className={classes['card__info--rate']}>{props.rate}</span>
				<span className={classes['card__info--count']}>{props.rateCount}</span>
				<span className={classes['card__info--location']}>
					• {props.location}
				</span>
			</div>
			<p className={classes['card__desc']}>{props.title}</p>
			<p className={classes['']}>
				<span className={classes['card__pricing']}>From ${props.price} </span>/
				person
			</p>
		</div>
	);
}

export default Card;
