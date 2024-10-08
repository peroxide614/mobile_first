import React from 'react';
import './App.css';
import apartment from './image/apart_img.png';
import map from './image/street_img.png';
import star from './image/star.png';
import calendar from './image/calendar_icon.png';
import usericon from './image/user_icon.png';

import homeicon from './image/house_icon.svg';
import bookedicon from './image/booked_icon.svg';
import savedicon from './image/liked_icon.png';
import profileicon from './image/profile_icon.svg';

function App() {
  return (
    <div className="full-page">
      <div className="hotel-img-wrapper">
        <div>
          <img src={apartment} className="hotel-img"></img>
        </div>
        <div className="int-ext">
          <button className="int-ext-button test">Interior</button>
          <div className="int-ext-divider"></div>
          <button className="int-ext-button">Exterior</button>
        </div>
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
              <div className="text-inside-box-two">
                20 Aug, Sat - 21 Aug, Sun
              </div>
            </div>
          </div>
          <div className="block-w-dates">
            <img src={usericon} className="usericon"></img>
            <div className="wrapper-of-text">
              <div className="text-inside-box">Guests and Rooms</div>
              <div className="text-inside-box-two">1 Guest/ 1 Room</div>
            </div>
          </div>
        </div>
      </div>
      <div className="hotel-description">
        <div>
          <div className="description-start">About the Hotel</div>
          <div className="description-container">
            <div className="description-main">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur tempus urna at turpis condimentum
              lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
              condimentum ac, vestibulum eu nisl. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nunc vulputate libero et velit
              interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad
              litora torquent per conubia nostra
            </div>
            <div className="text-fade"></div>
          </div>
          <div className="description-end">Read more</div>
        </div>
        <div className="description-image">
          <img src={map} className="description-map"></img>
          <button className="gradient-button">Book Hotel</button>
        </div>
      </div>
      <footer className="buttons-bottom">
        <div className="footer-button">
          <img className="button-icon" src={homeicon}></img>
          <div className="button-place">Home</div>
        </div>
        <div className="footer-button">
          <img className="button-icon" src={bookedicon}></img>
          <div className="button-place">Booked</div>
        </div>
        <div className="footer-button">
          <img className="button-icon" src={savedicon}></img>
          <div className="button-place">Saved</div>
        </div>
        <div className="footer-button">
          <img className="button-icon" src={profileicon}></img>
          <div className="button-place">Profile</div>
        </div>
      </footer>
    </div>
  );
}
export default App;
