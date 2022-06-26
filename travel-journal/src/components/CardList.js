import React from 'react';
import Card from './Card';
import cardData from '../data';
import classes from './CardList.module.css';

function CardList() {
	const cardList = cardData.map((item, index) => {
		return <Card key={index} {...item} />;
	});

	return <section className={classes.container}>{cardList}</section>;
}

export default CardList;
