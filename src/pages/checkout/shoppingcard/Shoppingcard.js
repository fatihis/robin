import React, { useState } from "react";
import "./shoppingcard.css";
import whitehoodie from "../../../assets/whitehoodie2x.png";
import blackhoodie from "../../../assets/blackhoodie2x.png";

export default function Shoppingcard() {
  return (
    <div className="shopping-cart-main-wrapper  px-64 py-18  w-full h-full flex ">
      <div className="shopping-cart-main-container  h-screen w-full  flex flex-col">
        <h2 className="shopping-cart-header-text mt-2 mb-2 font-bold text-xl">
          Shopping Cart
        </h2>
        {/* table start */}
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Product
                      </th>

                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Size
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Price
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={blackhoodie}
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              T-Shirt Summer Vibes
                            </div>
                            <div className="text-sm text-gray-500">#261311</div>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          XL
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        $89.99
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          X
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={whitehoodie}
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              Basic Slim Fit T-Shirt
                            </div>
                            <div className="text-sm text-gray-500">#261311</div>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          XL
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        $89.99
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          X
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* table end */}
        <div className="shopping-cart-total-cost-container w-auto h-auto flex mt-1">
          <span className="mr-2">Total cost:</span>
          <span className="font-bold">$159,98</span>
          <div className="flex-1  flex justify-end">
            <button className="shopping-cart-proceed-button absolute text-white font-bold py-2 px-4 rounded-full">
              Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
