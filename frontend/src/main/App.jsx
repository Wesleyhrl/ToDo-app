import React from 'react';
import './App.css'
import Menu from '../template/menu.jsx';
import Routes from './routes.jsx';
import { BrowserRouter } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Routes />
      </BrowserRouter>
    </div>
  );
}


