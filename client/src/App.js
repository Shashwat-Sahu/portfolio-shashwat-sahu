import React from 'react';
import './App.css';
import NavBar from './components/navbar'
import {BrowserRouter,Router} from 'react-router-dom'
import Home from './components/home'

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Home/>
    </BrowserRouter>
  );
}

export default App;
