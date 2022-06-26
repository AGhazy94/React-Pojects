import React from 'react';
import appData from '../data';
import Card from './Card';
import classes from './CardList.module.css';

function CardList() {
	const data = appData.map((item) => {
		return (
			<Card
				key={item.id}
				img={item.img}
				status={item.status}
				rate={item.stats.rating}
				rateCount={item.stats.reviewCount}
				location={item.location}
				title={item.title}
				price={item.price}
			/>
		);
	});

	return <div className={classes['card__container']}>{data}</div>;
}

export default CardList;
