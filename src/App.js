import React, { useState } from 'react';
import './App.css';
import Africa from './regions/Africa';
import Asia from './regions/Asia';
import Europe from './regions/Europe';
import NorthAmerica from './regions/NorthAmerica';
import SouthAmerica from './regions/SouthAmerica';
import Home from './Home';

function App() {
  const [selectedContinent, setSelectedContinent] = useState(null);

  const renderContinent = () => {
    if (selectedContinent === null) {
      return <Home />;
    }

    switch (selectedContinent) {
      case 'Africa':
        return <Africa />;
      case 'Asia':
        return <Asia />;
      case 'Europe':
        return <Europe />;
      case 'North America':
        return <NorthAmerica />;
      case 'South America':
        return <SouthAmerica />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app-container">
    <div class="margin-content">
        <button className="margin-button" onClick={() => setSelectedContinent(null)}>Home</button>
        <button className="margin-button" onClick={() => setSelectedContinent('Africa')}>Africa</button>
        <button className="margin-button" onClick={() => setSelectedContinent('Asia')}>Asia</button>
        <button className="margin-button" onClick={() => setSelectedContinent('Europe')}>Europe</button>
        <button className="margin-button" onClick={() => setSelectedContinent('North America')}>N America</button>
        <button className="margin-button" onClick={() => setSelectedContinent('South America')}>S America</button>
        <button className="margin-button" onClick={() => setSelectedContinent('About us')}>About us</button>

     </div>
      <div className="top-div">
      <button onClick={() => setSelectedContinent(null)}>Home</button>
        <button onClick={() => setSelectedContinent('Africa')}>Africa</button>
        <button onClick={() => setSelectedContinent('Asia')}>Asia</button>
        <button onClick={() => setSelectedContinent('Europe')}>Europe</button>
        <button onClick={() => setSelectedContinent('North America')}>N America</button>
        <button onClick={() => setSelectedContinent('South America')}>S America</button>
      </div>
      <div className="video-div">
         <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/8g1hjEHdaWg"
          title="YouTube video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="table-div">
        {renderContinent()}
      </div>
    </div>
  );
}

export default App;
