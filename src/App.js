import './App.css';
import NavBar from './components/molecules/NavBar/NavBar';
import Home from './components/organisms/Home';
import Search from './components/organisms/Search';
import {Switch,  Route, BrowserRouter as Router} from 'react-router-dom';



function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/search/:name" component={Search}/>
      </Switch>
    </Router>
  );
}

export default App;
