import React from 'react';
import logo from './logo.svg';
import LogoBML from './LogoBML.svg';
import './App.css';

function Home() {
  return (
    <div className="App"> 
      <body>
      <div className="parallax">
      <h1>[Insert powerful message]</h1>
      </div>
          <div className="Info-page"> 
               <p>
               “Equal rights for others does not mean less rights for you. It’s not pie.”
           </p>
        </div>   
        <div class="parallax2"></div>
        <div className="Info-page"> 
               <p>
           Edit <code>src/Home.js</code> and save to reload.
           </p>
          <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
            >
          Learn React
        </a>
        </div>   
        <div class="parallax2"></div>
        <div class="parallax">
        <div className="Story"> 
               <p>
           Edit <code>src/Home.js</code> and save to reload.
           </p>
          <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
            >
          Learn React
        </a>
        </div>   
        </div>
      </body>
    </div>
  );
}

export default Home;