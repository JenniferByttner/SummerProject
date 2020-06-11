
import React from 'react';
import LogoBML from './LogoBML.svg';
import './App.css';
import {
    Link
  } from "react-router-dom";


export function Header() {
  return (
    <div className="App">
      <header className="header">
        <img src={LogoBML} className="App-logo" alt="logo" />
        <nav className="header">
        <p><Link className="Menu-link" to="/">Home</Link></p>
        <p><Link className="Menu-link"  to="/about">About</Link></p>
        <p><Link className="Menu-link" to="/users">Users</Link></p>
        </nav>       
      </header>
    </div>
  );
}

export default Header;

