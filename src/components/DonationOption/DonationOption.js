import React from "react";
import "./DonationOption.css";
import donationOptionOne from "../../assets/losevicon.png";
import donationOptionTwo from "../../assets/kizilayicon.png";
export default function DonationOption() {
  return (
    <div>
      {/* <!-- Component Start --> */}
      <h3 className="address-donation-header-text mt-2 mb-2 font-bold text-lg">
        Charities
      </h3>
      <form class="grid grid-cols-3 gap-2 w-full max-w-screen-sm">
        <div>
          <input
            class="hidden"
            id="radio_1"
            type="radio"
            name="radio"
            checked
          />
          <label
            class="flex flex-col p-4 border-2 border-gray-400 cursor-pointer"
            for="radio_1"
          >
            <img
              className="home-perk-item-image"
              src={donationOptionOne}
              alt="profile icon"
            ></img>
            <span class="text-xs font-semibold mt-1 uppercase">Lösev</span>
            <span class="text-xl font-bold mt-2">%25*</span>
            <ul class="text-sm mt-2">
              <li>
                <a class="text-sm mt-2" href="https://www.losev.org.tr/v6">
                  www.losev.org.tr
                </a>
              </li>
              <li>*percentage of profit</li>
            </ul>
          </label>
        </div>
        <div>
          <input class="hidden" id="radio_2" type="radio" name="radio" />
          <label
            class="flex flex-col p-4 border-2 border-gray-400 cursor-pointer"
            for="radio_2"
          >
            <img
              className="home-perk-item-image"
              src={donationOptionOne}
              alt="profile icon"
            ></img>
            <span class="text-xs font-semibold mt-1 uppercase">Lösev</span>
            <span class="text-xl font-bold mt-2">%25*</span>
            <ul class="text-sm mt-2">
              <li>
                <a class="text-sm mt-2" href="https://www.losev.org.tr/v6">
                  www.losev.org.tr
                </a>
              </li>
              <li>*percentage of profit</li>
            </ul>
          </label>
        </div>
        <div>
          <input class="hidden" id="radio_3" type="radio" name="radio" />
          <label
            class="flex flex-col p-4 border-2 border-gray-400 cursor-pointer"
            for="radio_3"
          >
            <img
              className="home-perk-item-image"
              src={donationOptionOne}
              alt="profile icon"
            ></img>
            <span class="text-xs font-semibold mt-1 uppercase">Lösev</span>
            <span class="text-xl font-bold mt-2">%25*</span>
            <ul class="text-sm mt-2">
              <li>
                <a class="text-sm mt-2" href="https://www.losev.org.tr/v6">
                  www.losev.org.tr
                </a>
              </li>
              <li>*percentage of profit</li>
            </ul>
          </label>
        </div>
      </form>
      {/* <!-- Component End  --> */}
    </div>
  );
}
