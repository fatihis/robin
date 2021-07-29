import React from "react";
import "./home.css";
import shippingicon from "../../assets/shipping2x.png";
import smileicon from "../../assets/happy2x.png";
import moneybackicon from "../../assets/moneyback2x.png";
export default function home() {
  return (
    <div className="home-main-wrapper">
      {/* banner start */}
      <div className="home-banner-container w-full"></div>
      {/* banner end */}
      {/* perks start */}
      <div className="home-perks-wrapper w-full flex justify-center items-center">
        <div className="home-perks-container flex h-full bg-black">
          <div className="home-perk-item flex flex-1">
            <div className="home-perk-item-image-container flex justify-center items-center flex-1">
              <img
                className="home-perk-item-image"
                src={shippingicon}
                alt="profile icon"
              ></img>
            </div>
            <div className="home-perk-item-text-container"></div>
          </div>
          <div className="home-perk-item flex flex-1">
            <div className="home-perk-item-image-container flex justify-center items-center flex-1">
              <img
                className="home-perk-item-image"
                src={smileicon}
                alt="profile icon"
              ></img>
            </div>
            <div className="home-perk-item-text-container"></div>
          </div>
          <div className="home-perk-item flex flex-1">
            <div className="home-perk-item-image-container flex justify-center items-center flex-1">
              <img
                className="home-perk-item-image"
                src={moneybackicon}
                alt="profile icon"
              ></img>
            </div>
            <div className="home-perk-item-text-container"></div>
          </div>
        </div>
      </div>
      {/* perks end */}
      {/* features start */}
      <div className="home-featured-wrapper w-full flex justify-center items-center">
        <div className="home-featured-container h-full bg-black"></div>
      </div>
      {/* features end */}
    </div>
  );
}
