import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Beers from './components/Beers';
import BeerDetails from './components/BeerDetails';
import RandomBeer from './components/RandomBeer';
import CreateBeer from './components/CreateBeer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/beers' element={<Beers/>}/>
        <Route path='/beers/:beerId' element={<BeerDetails/>}/>
        <Route path='/random-beer' element={<RandomBeer/>}/>
        <Route path='/beers/new' element={<CreateBeer/>}/>
      </Routes>
    </div>
  );
}

export default App;
