import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="wrapper">
      <h2><strong>All Games<span>( 4 )</span></strong></h2>
      <div class="cards">
        <figure class="card">
          <img src="https://mrreiha.keybase.pub/codepen/hover-fx/1.jpg" />
          <figcaption>Dota 2</figcaption>
        </figure>

        <figure class="card">
          <img src="https://mrreiha.keybase.pub/codepen/hover-fx/2.jpg" />
          <figcaption>Stick Fight</figcaption>
        </figure>

        <figure class="card">
          <img src="https://mrreiha.keybase.pub/codepen/hover-fx/3.jpg" />
          <figcaption>Minion Masters</figcaption>
        </figure>

        <figure class="card">
          <img src="https://mrreiha.keybase.pub/codepen/hover-fx/4.jpg" />
          <figcaption>KoseBoz!</figcaption>
        </figure>

      </div>
    </div>
  );
}

export default App;
