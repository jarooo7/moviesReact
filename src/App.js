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
      <Image src="http://static.tvmaze.com/uploads/images/medium_landscape/266/665606.jpg"></Image>
      <Card></Card>
    </div>
  );
}

export default App;
