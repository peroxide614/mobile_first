import React from 'react';
import './App.css';
import apartment from './image/apart_img.png';
import star from './image/star.png';

function App() {
  return (
    <div className="full-page">
      <div className="hotel-img">
        <img src={apartment}>
          {/* <div className="int-ext"> Interior | Exterior</div> */}
        </img>
      </div>
      <div className="hotel">
        <div className="hotel-info">
          <div className="hotel-name">Raddison Hotel</div>
          <div className="hotel-adress">Thane West</div>
          <div className="hotel-rating-wrapper">
            <img src={star} alt="Star" className="star-icon" />
            <div className="hotel-rating">4.3/5</div>
          </div>
        </div>
        <div className="hotel-price"></div>
        <div className="hotel-options"></div>
      </div>
    </div>
  );
}
export default App;
