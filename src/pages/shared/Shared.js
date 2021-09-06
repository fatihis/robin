import React from "react";

import Listing from "../listing/Listing";
//import Home from "../home/Home";
import Shoppingcard from "../checkout/shoppingcard/Shoppingcard";
import "./shared.css";
import Productdetail from "../productdetail/Productdetail";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "../../assets/robintemp.png";
import searchicon from "../../assets/searchicon.png";
import carticon from "../../assets/carticon.png";
import profileicon from "../../assets/profileicon.png";
import Addressanddelivery from "../checkout/addressanddelivery/Addressanddelivery";
export default function Shared() {
  return (
    <Router>
      <div className="shared-main-wrapper">
        <div className="shared-header-container bg-white h-24 flex flex-row sm:flex-col sm:mb-4">
          <a
            href="/"
            className="shared-logo-container flex-1 bg-green flex justify-center items-center"
          >
            <img
              className="shared-logo "
              src={logo}
              alt="robinhoodie logo"
            ></img>
          </a>
          <div className="shared-nav-elements-container flex px-14 bg-gray justify-center items-center ">
            <div className="shared-nav-item flex-1 flex  items-center justify-end md:justify-center">
              <a href="/">
                <p className="jj text-right text-xs font-bold">HOME</p>
              </a>
            </div>
            <div className="shared-nav-item flex-1 flex  items-center justify-center">
              <a href="/listing">
                <p className="text-right text-xs font-bold">PRODUCTS</p>
              </a>
            </div>
            <div className="shared-nav-item flex-1 flex   items-center justify-start  md:justify-center">
              <a href="/about-us">
                <p className="text-left text-xs font-bold">ABOUT US</p>
              </a>
            </div>
          </div>
          <div className="shared-header-icons flex flex-1 flex-row bg-green pr-24 lg:pr-0">
            <div className="shared-icon-container flex flex-1 items-center justify-end">
              <img
                className="shared-icon max-w-xs"
                src={searchicon}
                alt="search icon"
              ></img>
            </div>
            <a
              className="shared-icon-container flex flex-1 items-center justify-center"
              href="/cart/:uid"
            >
              <img
                className="shared-icon max-w-xs"
                src={carticon}
                alt="cart icon"
              ></img>
            </a>
            <div className="shared-icon-container flex flex-1 items-center justify-start">
              <img
                className="shared-icon max-w-xs"
                src={profileicon}
                alt="profile icon"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <Switch>
        <Route path="/" exact component={Productdetail} />
        <Route path="/products" component={Listing} />
        <Route path="/p/:productId" component={Productdetail} />
        <Route path="/cart/:uid" component={Shoppingcard} />
        <Route
          path="/address-and-delivery/:uid"
          component={Addressanddelivery}
        />
        {/* <Route path="*">
        <NoMatch />
      </Route> */}
      </Switch>
      <div className="shared-footer container bg-white h-48"></div>
    </Router>
  );
}
