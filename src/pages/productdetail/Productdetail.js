import React, { useState } from "react";
import "./productdetail.css";
import whitehoodie from "../../assets/whitehoodie2x.png";
import blackhoodie from "../../assets/blackhoodie2x.png";
import fabrics from "../../assets/fabrics.png";
import descIcon from "../../assets/descriptionicon.png";
import productcleaning from "../../assets/productcleaning.png";
import classNames from "classnames";
import Magnifier from "react-magnifier";
import { useParams } from "react-router-dom";
export default function Productdetail() {
  const tagOne = true;
  let { productId } = useParams();
  const hasDiscount = true;
  const product_price = "89.90";
  const discounted_product_price = "119.90";
  const [sState, setsState] = useState(false);
  const [mState, setmState] = useState(false);
  const [lState, setlState] = useState(false);
  const [xlState, setxlState] = useState(false);
  const [chooseSizeState, setchooseSizeState] = useState(false);
  const [quantityState, setquantityState] = useState(0);
  const [bigImageSource, setbigImageSource] = useState(whitehoodie);

  const setBigImage = (img) => {
    setbigImageSource(img);
  };
  var sBtnClass = classNames({
    activeButton: sState,
    passiveButton: !sState,
  });
  var mBtnClass = classNames({
    activeButton: mState,
    passiveButton: !mState,
  });
  var lBtnClass = classNames({
    activeButton: lState,
    passiveButton: !lState,
  });
  var xlBtnClass = classNames({
    activeButton: xlState,
    passiveButton: !xlState,
  });
  var chooseSizeClass = classNames({
    activeSize: chooseSizeState,
    passiveSize: !chooseSizeState,
  });
  var chooseSizeWrapperClass = classNames({
    activeWrapperSize: chooseSizeState,
    passiveWrapperSize: !chooseSizeState,
  });
  const sizesOnClick = () => {
    setchooseSizeState(!chooseSizeState);
  };
  const sizeOnClick = (size) => {
    if (size === "s") {
      setsState(true);
      setmState(false);
      setlState(false);
      setxlState(false);
    } else if (size === "m") {
      setsState(false);
      setmState(true);
      setlState(false);
      setxlState(false);
    } else if (size === "l") {
      setsState(false);
      setmState(false);
      setlState(true);
      setxlState(false);
    } else if (size === "xl") {
      setsState(false);
      setmState(false);
      setlState(false);
      setxlState(true);
    }
  };

  const updateCart = (action) => {
    if (action === "+") {
      setquantityState(quantityState + 1);
    } else if (action === "-") {
      if (quantityState > 0) {
        setquantityState(quantityState - 1);
      }
    }
  };
  return (
    <div className="pd-main-container px-24  w-full h-full flex flex-col xl:p-0">
      <div className="pd-showcase-container h-screen  flex lg:flex-col lg:h-auto ">
        <div className="pd-showcase-img-wrapper flex flex-1 md:flex-col-reverse">
          <div className="pd-showcase-img-thumbnail-container p-8 w-full md:flex md:flex-wrap">
            <div className="pd-showcase-img-thumbnail w-full p-2 h-32 md:w-auto">
              <img
                draggable={false}
                onClick={() => setBigImage(whitehoodie)}
                className="home-featured-item-image"
                src={whitehoodie}
                alt="product thumbnail one"
              ></img>
            </div>
            <div className="pd-showcase-img-thumbnail w-full p-2 h-32 md:w-auto">
              <img
                draggable={false}
                onClick={() => setBigImage(blackhoodie)}
                className="home-featured-item-image"
                src={blackhoodie}
                alt="product thumbnail two"
              ></img>
            </div>
            <div className="pd-showcase-img-thumbnail w-full p-2 h-32 md:w-auto">
              <img
                draggable={false}
                onClick={() => setBigImage(whitehoodie)}
                className="home-featured-item-image"
                src={whitehoodie}
                alt="product thumbnail three"
              ></img>
            </div>
            <div className="pd-showcase-img-thumbnail w-full p-2 h-32 md:w-auto">
              <img
                draggable={false}
                onClick={() => setBigImage(blackhoodie)}
                className="home-featured-item-image"
                src={blackhoodie}
                alt="product thumbnail four"
              ></img>
            </div>
          </div>
          <div className="pd-showcase-img-big-container w-full ">
            {/* <img
              className="home-featured-item-image"
              src={whitehoodie}
              alt="product photo"
            ></img> */}
            <Magnifier src={bigImageSource} zoomFactor={2.0} />
          </div>
        </div>
        <div className="pd-showcase-detail-container p-8 flex-1">
          <div className="pd-showcase-detail-tag-id-container w-full h-10 flex ">
            <div className="pd-showcase-detail-tag-container flex-1">
              {tagOne && (
                <div className="pd-showcase-detail-tag rounded-full pointer-events-none flex items-center justify-center text-sm font-bold w-16 h-full">
                  <span className="pointer-events-none">SALE</span>
                </div>
              )}
            </div>
            <div className="pd-showcase-detail-id-container flex-1 flex justify-end">
              <span className="pd-showcase-detail-id ">
                Product id : {productId}
              </span>{" "}
            </div>
          </div>
          <div className="pd-showcase-detail-name-price-wrapper  flex w-full h-20 mt-6 xl:h-36 xl:flex-col">
            <div className="pd-showcase-detail-name-price-container flex-col flex flex-1  w-full h-full">
              <div className="pd-showcase-detail-name-container flex-1 ">
                <span className="pd-showcase-detail-name flex-1">
                  Hoodie Summer Vibes
                </span>
              </div>
              <div className="pd-showcase-detail-price-container flex">
                {hasDiscount && (
                  <span className="pd-showcase-detail-price pointer-events-none pd-showcase-detail-price-discounted xl:text-xl">
                    {product_price} ₺
                  </span>
                )}
                {!hasDiscount && (
                  <span className="pd-showcase-detail-price pointer-events-none xl:text-xl">
                    {product_price} ₺
                  </span>
                )}
                {hasDiscount && (
                  <span className="pd-showcase-detail-old-price pointer-events-none line-through space-x-12 xl:text-xl ">
                    {" "}
                    {discounted_product_price} ₺
                  </span>
                )}
              </div>
            </div>
            <div className="pd-showcase-detail-series-container relative flex-1 w-full h-full">
              <span className="pd-showcase-detail-series absolute bottom-0 right-0 tracking-wider">
                Robin Originals
              </span>
            </div>
          </div>
          <div className="pd-showcase-detail-sizes-container w-full h-24 pt-4 flex flex-col">
            <span className="pd-showcase-detail-sizes-text text-sm mb-2">
              Sizes:
            </span>
            <div className="pd-showcase-detail-sizes-container w-full h-10 flex flex">
              <div className="pd-showcase-detail-sizes-set w-full h-10 flex ">
                <button
                  onClick={() => sizesOnClick()}
                  class={
                    " border-2 hover:bg-gray-300 py-2 px-4 text-black text-xs font-bold rounded-full"
                  }
                >
                  CHOOSE SIZE
                </button>
                <div className="${chooseSizeWrapperClass}">
                  <button
                    onClick={() => sizeOnClick("s")}
                    class={
                      "ml-4 border-2 hover:bg-gray-300 py-2 px-4 text-black text-xs font-bold rounded-full " +
                      sBtnClass +
                      " " +
                      chooseSizeClass
                    }
                  >
                    S
                  </button>
                  <button
                    onClick={() => sizeOnClick("m")}
                    class={
                      "ml-4 border-2 hover:bg-gray-300 py-2 px-4 text-black text-xs font-bold rounded-full " +
                      mBtnClass +
                      " " +
                      chooseSizeClass
                    }
                  >
                    M
                  </button>
                  <button
                    onClick={() => sizeOnClick("l")}
                    class={
                      "ml-4 border-2 hover:bg-gray-300 py-2 px-4 text-black text-xs font-bold rounded-full " +
                      lBtnClass +
                      " " +
                      chooseSizeClass
                    }
                  >
                    L
                  </button>
                  <button
                    onClick={() => sizeOnClick("xl")}
                    class={
                      "ml-4 border-2 hover:bg-gray-300 py-2 px-4 text-black text-xs font-bold rounded-full " +
                      xlBtnClass +
                      " " +
                      chooseSizeClass
                    }
                  >
                    XL
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="pd-showcase-detail-add-to-cart-wrapper w-full h-24 pt-4 flex-col gap-2 flex ">
            <span className="pd-showcase-detail-sizes-text text-sm mb-2">
              Quantity:
            </span>
            <div className="pd-showcase-detail-add-to-cart-container h-3/5 w-32  rounded-full flex">
              <div className="pd-showcase-detail-add-to-cart-minus border-l-2 rounded-l-full flex justify-center items-center flex-1 h-full">
                <button
                  onClick={() => updateCart("-")}
                  class="py-2 px-4  text-black text-sm font-bold rounded-l-full "
                >
                  -
                </button>
              </div>
              <div className="pd-showcase-detail-add-to-cart-quantity   flex justify-center items-center h-full">
                <span className="py-2 px-4 border-b-2 border-t-2">
                  {quantityState}
                </span>
              </div>
              <div className="pd-showcase-detail-add-to-cart-plus border-r-2  rounded-r-full flex justify-center items-center flex-1 h-full">
                <button
                  onClick={() => updateCart("+")}
                  class="py-2 px-4 text-black text-sm font-bold rounded-r-full "
                >
                  +
                </button>
              </div>
              <div className="pd-showcase-detail-add-to-cart-button-container h-full w-32 rounded-full flex ">
                <button
                  // onClick={() => sizeOnClick("l")}
                  class="pd-showcase-detail-add-to-cart-button ml-4 border-2 py-2 px-4 text-black w-32 text-xs font-bold rounded-full "
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pd-showcase-detail-description-wrapper h-48 w-full self self-center flex mt-3 xl:h-auto">
        <div className="pd-showcase-detail-description-container h-full flex-1 flex flex-col items-center justify-center">
          <div className="pd-showcase-detail-description-img-container flex-1 flex items-center justify-center">
            <img
              draggable={false}
              className="w-auto h-auto"
              src={descIcon}
              alt="description thumb"
            ></img>
          </div>

          <div className="pd-showcase-detail-description-text-container flex-1 w-3/4 flex flex-col items-center justify-center text-center">
            <h3 className="mb-2 font-bold">Details and product description</h3>
            <span className="text-sm">
              White Summer Vibes T-shirt in the line with a colorful print. Made
              of jersey cotton. T-shirt fits perfectly with jeans, pants or
              shorts.
            </span>
          </div>
        </div>
        <div className="pd-showcase-detail-fabrics-container h-full flex-1 flex flex-col items-center justify-center">
          <div className="pd-showcase-detail-fabrics-img-container flex-1 flex items-center justify-center">
            <img
              draggable={false}
              className="w-auto h-auto"
              src={fabrics}
              alt="fabrics thumb"
            ></img>
          </div>
          <div className="pd-showcase-detail-fabrics-text-container flex-1 w-3/4 flex flex-col items-center justify-center text-center">
            <h3 className="mb-2 font-bold">Material(s) and care</h3>
            <span className="text-sm">
              White Summer Vibes T-shirt in the line with a colorful print. Made
              of jersey cotton. T-shirt fits perfectly with jeans, pants or
              shorts.
            </span>
            <img
              draggable={false}
              className="w-auto h-auto"
              src={productcleaning}
              alt="productcleaning thumb"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
