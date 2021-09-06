import React from "react";
import "./home.css";
import json from "../../utils/products/products.json";
import shippingicon from "../../assets/shipping2x.png";
import smileicon from "../../assets/happy2x.png";
import moneybackicon from "../../assets/moneyback2x.png";
import whitehoodie from "../../assets/whitehoodie2x.png";
import blackhoodie from "../../assets/blackhoodie2x.png";
import ShowcaseItem from "../../components/ShowcaseItem/ShowcaseItem";
export default function Home() {
  const alerter = () => {
    window.location.pathname = "/p/11223344";
  };
  //fetching featured products
  // fetch("../../utils/products/products.json", {
  //   headers: {
  //     "Content-Type": "application/json",
  //     Accept: "application/json",
  //   },
  // })
  //   .then((response) => response.json())
  //   .then((data) => console.log(data));

  return (
    <div className="home-main-wrapper">
      {/* banner start */}
      <div className="home-banner-container w-full"></div>
      {/* banner end */}
      {/* perks start */}
      <div className="home-perks-wrapper w-full flex justify-center items-center md:h-full">
        <div className="home-perks-container flex h-full md:w-full sm:flex-col sm:gap-2">
          <div className="home-perk-item flex flex-1">
            <div className="home-perk-item-image-container flex justify-center items-start flex-1">
              <img
                className="home-perk-item-image"
                src={shippingicon}
                alt="profile icon"
              ></img>
            </div>
            <div className="home-perk-item-text-container flex flex-col align-center">
              <h6 className="home-perk-item-text-title text-sm mb-2 font-bold">
                Free shipping
              </h6>
              <p className="home-perk-item-text text-xs font-semibold">
                On purchases over 150₺
              </p>
            </div>
          </div>
          <div className="home-perk-item flex flex-1">
            <div className="home-perk-item-image-container flex justify-center items-start flex-1">
              <img
                className="home-perk-item-image"
                src={smileicon}
                alt="profile icon"
              ></img>
            </div>
            <div className="home-perk-item-text-container flex flex-col align-center">
              <h6 className="home-perk-item-text-title text-sm mb-2 font-bold">
                Make Smile In Need
              </h6>
              <p className="home-perk-item-text text-xs font-semibold">
                %5 of our income directly goes in charities which you have
                choosen
              </p>
            </div>
          </div>
          <div className="home-perk-item flex flex-1">
            <div className="home-perk-item-image-container flex justify-center items-start flex-1">
              <img
                className="home-perk-item-image"
                src={moneybackicon}
                alt="profile icon"
              ></img>
            </div>
            <div className="home-perk-item-text-container flex flex-col align-center">
              <h6 className="home-perk-item-text-title text-sm mb-2 font-bold">
                %100 Money Back Guaranteed
              </h6>
              <p className="home-perk-item-text text-xs font-semibold">
                Money back guarantee for all products
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* perks end */}
      {/* features start */}
      <div className="home-featured-wrapper w-full flex justify-center items-center h-auto">
        <div className="home-featured-container flex h-full bg-black md:flex-col sm:h-full">
          <div className="home-featured-item home-featured-item-one flex-1 flex">
            <div className="home-featured-item-image-container flex-1 ">
              <img
                className="home-featured-item-image"
                src={blackhoodie}
                alt="hoodie example one"
              ></img>
            </div>
            <div className="home-featured-item-text-container flex justify-center items-center flex-1">
              <div className="home-featured-item-inner-text-container flex-1">
                <h5 className="home-featured-item-text font-bold text-xl mb-4 sm:text-sm">
                  New collection available now
                </h5>
                <button class="bg-white hover:bg-gray-300 text-black text-xs font-bold py-2 px-4 rounded-full">
                  VIEW ALL
                </button>
              </div>
            </div>
          </div>
          <div className="home-featured-item home-featured-item-two flex-1 flex">
            <div className="home-featured-item-image-container flex-1">
              <img
                className="home-featured-item-image"
                src={whitehoodie}
                alt="hoodie example two"
              ></img>
            </div>
            <div className="home-featured-item-text-container flex justify-center items-center flex-1">
              <div className="home-featured-item-inner-text-container flex-1">
                <h5 className="home-featured-item-text font-bold text-xl mb-4 sm:text-sm">
                  Redefining the modern design
                </h5>
                <button class="bg-white hover:bg-gray-300 text-black text-xs font-bold py-2 px-4 rounded-full">
                  CHECK MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* features end */}
      {/* showcase start */}

      <div className="home-showcase-wrapper w-full flex justify-center items-center">
        <div className="home-showcase-container flex  h-full flex-wrap justify-center">
          <ShowcaseItem
            itemImage={whitehoodie}
            itemText={"Rob"}
            itemPrice={"119.90 ₺"}
            onClick={alerter}
          />
          <ShowcaseItem
            itemImage={blackhoodie}
            itemText={"Jamal"}
            itemPrice={"139.90 ₺"}
            onClick={alerter}
          />
          <ShowcaseItem
            itemImage={whitehoodie}
            itemText={"Düsseldorf"}
            itemPrice={"189.90 ₺"}
            onClick={alerter}
          />
          <ShowcaseItem
            itemImage={blackhoodie}
            itemText={"Beverly"}
            itemPrice={"169.90 ₺"}
            onClick={alerter}
          />
          <ShowcaseItem
            itemImage={whitehoodie}
            itemText={"Prolaterya"}
            itemPrice={"129.90 ₺"}
            onClick={alerter}
          />
        </div>
      </div>
    </div>
  );
}
