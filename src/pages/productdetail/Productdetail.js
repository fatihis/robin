import React from "react";
import "./productdetail.css";
import whitehoodie from "../../assets/whitehoodie2x.png";
import blackhoodie from "../../assets/blackhoodie2x.png";
export default function Productdetail() {
  return (
    <div className="pd-main-container px-24  w-full h-full">
      <div className="pd-showcase-container h-screen  flex">
        <div className="pd-showcase-img-wrapper flex flex-1">
          <div className="pd-showcase-img-thumbnail-container p-8 w-full">
            <div className="pd-showcase-img-thumbnail w-full p-2 h-32">
              <img
                className="home-featured-item-image"
                src={whitehoodie}
                alt="product thumbnail one"
              ></img>
            </div>
            <div className="pd-showcase-img-thumbnail w-full p-2 h-32">
              <img
                className="home-featured-item-image"
                src={blackhoodie}
                alt="product thumbnail two"
              ></img>
            </div>
            <div className="pd-showcase-img-thumbnail w-full p-2 h-32">
              <img
                className="home-featured-item-image"
                src={whitehoodie}
                alt="product thumbnail three"
              ></img>
            </div>
            <div className="pd-showcase-img-thumbnail w-full p-2 h-32">
              <img
                className="home-featured-item-image"
                src={blackhoodie}
                alt="product thumbnail four"
              ></img>
            </div>
          </div>
          <div className="pd-showcase-img-big-container w-full">
            <img
              className="home-featured-item-image"
              src={whitehoodie}
              alt="product thumbnail three"
            ></img>
          </div>
        </div>
        <div className="pd-showcase-detail-container flex-1"></div>
      </div>
    </div>
  );
}
