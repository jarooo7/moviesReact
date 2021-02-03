import './App.css';
import NavBar from './components/molecules/NavBar/NavBar';
import Home from './components/organisms/Home';
import Fav from './components/organisms/Fav';
import Search from './components/organisms/Search';
import {Switch,  Route, BrowserRouter as Router} from 'react-router-dom';



function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/fav" exact component={Fav}/>
        <Route path="/search/:name" component={Search}/>
      </Switch>
    </Router>
  );
}

export default App;
