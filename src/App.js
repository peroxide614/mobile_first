import React from 'react';
import './App.css';
import apartment from './image/apart_img.png';
import star from './image/star.png';
import calendar from './image/calendar_icon.png';

function App() {
  return (
    <div className="full-page">
      <div className="hotel-img-wrapper">
        <div>
          <img src={apartment} className="hotel-img"></img>
        </div>
        <div className="int-ext"> Interior | Exterior</div>
      </div>
      <div className="hotel">
        <div className="hotel-row-wrapper">
          <div className="hotel-info">
            <div className="hotel-name">Raddison Hotel</div>
            <div className="hotel-adress">Thane West</div>
            <div className="hotel-rating-wrapper">
              <img src={star} alt="Star" className="star-icon" />
              <div className="hotel-rating">4.3/5</div>
            </div>
          </div>
          <div className="hotel-price">
            <div className="hotel-offer">Best Offer</div>
            <div className="hotel-current-price">$3,493</div>
            <div className="hotel-previous-price">$ 4,433</div>
            <div className="hotel-price-fees">+ $ 594 taxes and fee</div>
          </div>
        </div>
        <div className="hotel-options">
          <div className="block-w-dates">
            <img src={calendar} className="calendar-logo"></img>
            <div className="wrapper-of-text">
              <div className="text-inside-box">Check In & Check Out</div>
              <div className="text-inside-box">20 Aug, Sat - 21 Aug, Sun</div>
            </div>
          </div>
          <div className="block-w-dates"></div>
        </div>
      </div>
    </div>
  );
}
export default App;
