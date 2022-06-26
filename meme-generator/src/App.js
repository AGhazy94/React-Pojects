import classes from './App.module.css';
import Header from './components/Header';
import MemeForm from './components/MemeForm';

function App() {
  return (
    <div className={classes.appContainer}>
      <Header />
      <MemeForm />
    </div>
  );
}

export default App;
