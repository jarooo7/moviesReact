import logo from './logo.svg';
import './App.css';
import Button from './components/atoms/Button'
import Image from './components/atoms/Image'
import Card from './components/molecules/Card'


function App() {
  return (
    <div className="App">
      działa
      <Button>Click</Button>
      <Image ></Image>
      <Card
        img="http://static.tvmaze.com/uploads/images/medium_portrait/252/631137.jpg"
        url="#"
        name="To tytuł filmu"
        genre={["horror", "akcji"]}
        lang="polski"
      />
    </div>
  );
}

export default App;
