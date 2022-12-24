import React from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import { Counter } from './features/counter/Counter';
import Header from './componets/Header';
import './App.css';
import Home from './componets/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
