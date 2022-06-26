import classes from './App.module.css';
import CardList from './components/CardList';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {

	return (
		<div className={classes.container}>
			<Navbar />
			<Hero />
			<CardList />
		</div>
	);
}

export default App;
