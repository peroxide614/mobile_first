import React from 'react';
import './App.css';
import apartment from './image/apart_img.png';

function App() {
  return (
    <div className="full-page">
      <div className="hotel-img">
        <img src={apartment}>
          {/* <div className="int-ext"> Interior | Exterior</div> */}
        </img>
      </div>
      <div className="hotel-info">
        <div className="hotel-name"></div>
        <div className="hotel-price"></div>
        <div className="hotel-options"></div>
      </div>
    </div>
  );
}
export default App;
