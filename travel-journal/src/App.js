import classes from './App.module.css';
import CardList from './components/CardList';
import Header from './components/Header';

function App() {
  return (
    <div className={classes.container}>
      <Header />
      <CardList />
    </div>
  );
}

export default App;
