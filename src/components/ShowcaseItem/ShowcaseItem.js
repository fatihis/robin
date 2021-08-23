import React from "react";
import "./ShowcaseItem.css";
import whitehoodie from "../../assets/whitehoodie2x.png";
export default function ShowcaseItem(props) {
  return (
    <div className="showcase-item-container flex flex-col p-3 flex-1">
      <a href="/p/12312">
        <div className="showcase-item-img-container flex-start">
          {true && <div className="showcase-item-discount-container"></div>}
          <img
            className="showcase-item-image"
            src={props.itemImage}
            alt="item image"
          ></img>
        </div>
      </a>

      <div className="showcase-item-text-container flex flex-col showcase-item-text-container pl-4">
        <span className="text-xs font-medium">{props.itemText}</span>
        <span className="text-lg font-semibold">{props.itemPrice}</span>
      </div>
      <div className="showcase-item-add-button-container relative w-full">
        <button
          onClick={props.onClick}
          class="showcase-item-add-button hover:bg-blue-700 absolute text-white font-bold py-2 px-4 rounded-full"
        >
          +
        </button>
      </div>
    </div>
  );
}
