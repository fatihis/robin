import React from "react";
import AddressForm from "../../../components/AddressForm/AddressForm";
import DonationOption from "../../../components/DonationOption/DonationOption";
import "./addressanddelivery.css";
export default function Addressanddelivery() {
  return (
    <div className="address-donation-main-wrapper  px-28 py-18  w-full h-full flex ">
      <div className="address-donation-main-container h-full w-full  flex flex-col ">
        <h2 className="address-donation-header-text mt-2 mb-2 font-bold text-xl">
          Address data and type of donation
        </h2>
        <div className="address-donation-flex mt-10  h-full w-full flex xl:flex-col xl:items-center xl:justify-center ">
          {/* address container start */}
          <div className="address-container flex-1 flex  mt-4">
            <AddressForm></AddressForm>
          </div>
          {/* address container end */}
          <div className="donation-container flex-1 flex">
            <div className="flex flex-col items-center justify-center w-full h-full">
              <div className="flex-1">
                <DonationOption></DonationOption>
              </div>

              <div className=" flex justify-end items-baseline">
                <button className="shopping-cart-proceed-button absolute text-white font-bold py-2 px-4 mt-1 rounded-full">
                  Complete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
