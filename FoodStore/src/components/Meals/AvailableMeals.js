import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import { useEffect, useState } from 'react';

const AvailableMeals = () => {
	const [meals, setMeals] = useState([]);
	const [isLoading, setIsLoading] = useState(true)
	const [hasError, setHasError] = useState();

	useEffect(() => {
		const fetchMeals = async () => {

			const res = await fetch(
				'https://reactstore-b150c-default-rtdb.europe-west1.firebasedatabase.app/meals.json'
			);

			if(!res.ok){
				throw new Error('Something went Wrong!');
			}

			const data = await res.json();

			const loadedMeals = [];

			for (const key in data) {
				loadedMeals.push({
					id: key,
					name: data[key].name,
					description: data[key].description,
					price: data[key].price,
				});
			}

			setMeals(loadedMeals);
			setIsLoading(false)
		};

			fetchMeals().catch(error => {
				setIsLoading(false)
				setHasError(error.message)
			});

	}, []);

	const mealsList = meals.map((meal) => (
		<MealItem
			id={meal.id}
			key={meal.id}
			name={meal.name}
			description={meal.description}
			price={meal.price}
		/>
	));

	if (isLoading) {
		return <section className={classes.MealsLoading}>
			<p>Loading...</p>
		</section>
	}

	if (hasError) {
		return <section className={classes.MealsError}>
			<p>{hasError}</p>
		</section>
	}

	return (
		<section className={classes.meals}>
			<Card>
				<ul>{mealsList}</ul>
			</Card>
		</section>
	);
};

export default AvailableMeals;
