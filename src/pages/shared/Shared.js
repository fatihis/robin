import React from "react";
import Home from "../home/Home";
import Listing from "../listing/Listing";
import "./shared.css";
import Productdetail from "../productdetail/Productdetail";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import logo from "../../assets/robintemp.png";
import searchicon from "../../assets/searchicon.png";
import carticon from "../../assets/carticon.png";
import profileicon from "../../assets/profileicon.png";
export default function Shared() {
  return (
    <Router>
      <div className="shared-main-wrapper">
        <div className="shared-header container bg-white h-24 flex flex-row">
          <div className="shared-logo-container flex-1 bg-green flex justify-center items-center">
            <img
              className="shared-logo max-w-xs"
              src={logo}
              alt="robinhoodie logo"
            ></img>
          </div>
          <div className="shared-nav-elements-container flex px-14 bg-gray justify-center items-center ">
            <div className="shared-nav-item flex-1 flex  items-center justify-end">
              <p className="text-right text-xs font-bold">HOME</p>
            </div>
            <div className="shared-nav-item flex-1 flex  items-center justify-center">
              <p className="text-right text-xs font-bold">PRODUCTS</p>
            </div>
            <div className="shared-nav-item flex-1 flex   items-center justify-start">
              <p className="text-left text-xs font-bold">ABOUT US</p>
            </div>
          </div>
          <div className="shared-header-icons flex flex-1 flex-row bg-green pr-24 ">
            <div className="shared-icon-container flex flex-1 items-center justify-end">
              <img
                className="shared-icon max-w-xs"
                src={searchicon}
                alt="search icon"
              ></img>
            </div>
            <div className="shared-icon-container flex flex-1 items-center justify-center">
              <img
                className="shared-icon max-w-xs"
                src={carticon}
                alt="cart icon"
              ></img>
            </div>
            <div className="shared-icon-container flex flex-1 items-center justify-start">
              <img
                className="shared-icon max-w-xs"
                src={profileicon}
                alt="profile icon"
              ></img>
            </div>
          </div>
        </div>
        <Route path="/" component={Home} />
        <Route path="/products" component={Listing} />
        <Route path="/product-detail/" component={Productdetail} />
      </div>
      <div className="shared-footer container bg-white h-48"></div>
    </Router>
  );
}
