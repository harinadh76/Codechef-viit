import './App.css';
import {Routes,Route} from "react-router-dom"

import Navbar from "./components/Navbar/Navbar"

import Home from './components/Home'
import Gallery from './components/Gallery';


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/gallery' element={<Gallery/>} exact/>
      </Routes>
    </>
  );
}

export default App;
