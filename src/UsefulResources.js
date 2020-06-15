
import React from 'react';
import './App.css';
import Arrow from './Arrow.svg';

export function UsefulResources() {
  return (
      <div>
          <div class="parallax2">
            <h1>Useful Resources</h1>
            
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  </p>         
          </div>
          <div class="line">
              <p class="pulsate">Scrolla ner för att hitta källor</p>
              <img src={Arrow} className="pulsate" alt="logo" />
          </div>
          <div class="flex-container">
      <div>1</div>
      <div>2</div>    
    </div>
    <div class="flex-container">
      <div>1</div>
      <div>2</div>    
    </div>
    </div>
    
  );
}

export default UsefulResources();