import React, { Fragment } from "react";
import search from "../assets/icons/search.svg";
import Add from "../assets/icons/add.svg";
import Subtract from "../assets/icons/subtract.svg";
import { useQuery } from "@apollo/client";
import { GET_MENU } from "../query/menu/menu";

const Menu = ({ onAdd, orderData }) => {
    const img_url = "http://localhost:1337"
  const { loading, error, data } = useQuery(GET_MENU);
  return (
    <Fragment>
      <div className="rounded-md shadow-lg h-full w-full box-border p-4">
        <div className="flex items-center shadow-md px-2 rounded-md">
          <img src={search} className="w-6 h-6  " alt="search" />
          <input
            type="text"
            placeholder="Search your food"
            className="py-2 px-2 w-full"
          />
        </div>
        <ul className="flex w-full flex-nowrap py-4 px-2 overflow-x-scroll ">
          <li className="px-2 shrink-0">
            <div className="rounded-md relative cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80"
                alt=""
                className="object-cover rounded-md w-24 h-24"
              />
              <div className="absolute bottom-0 left-0 w-full text-center bg-dark rounded-b-md ">
                <div className="flex justify-center items-center text-white py-2 ">
                  Burgers
                </div>
              </div>
            </div>
          </li>
          <li className="px-2 shrink-0">
            <div className="rounded-md relative cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80"
                alt=""
                className="object-cover rounded-md w-24 h-24"
              />
              <div className="absolute bottom-0 left-0 w-full text-center bg-dark rounded-b-md ">
                <div className="flex justify-center items-center text-white py-2 ">
                  Burgers
                </div>
              </div>
            </div>
          </li>
          <li className="px-2 shrink-0">
            <div className="rounded-md relative cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80"
                alt=""
                className="object-cover rounded-md w-24 h-24"
              />
              <div className="absolute bottom-0 left-0 w-full text-center bg-dark rounded-b-md ">
                <div className="flex justify-center items-center text-white py-2 ">
                  Burgers
                </div>
              </div>
            </div>
          </li>
          <li className="px-2 shrink-0">
            <div className="rounded-md relative cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80"
                alt=""
                className="object-cover rounded-md w-24 h-24"
              />
              <div className="absolute bottom-0 left-0 w-full text-center bg-dark rounded-b-md ">
                <div className="flex justify-center items-center text-white py-2 ">
                  Burgers
                </div>
              </div>
            </div>
          </li>
          <li className="px-2 shrink-0">
            <div className="rounded-md relative cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80"
                alt=""
                className="object-cover rounded-md w-24 h-24"
              />
              <div className="absolute bottom-0 left-0 w-full text-center bg-dark rounded-b-md ">
                <div className="flex justify-center items-center text-white py-2 ">
                  Burgers
                </div>
              </div>
            </div>
          </li>
        </ul>

        <ul className="flex flex-col mt-4">
          {data &&
            data.foods.data.map((item, i) => (
              <li className="flex p-2 border-b-2">
                <div className="w-4/5">
                  <h6 className="">{item.attributes.title}</h6>
                  <span className="text-sm font-semibold">
                    रू {item.attributes.price}
                  </span>
                  <p className="text-xs font-light">
                    {item.attributes.descriptions}
                  </p>
                </div>
                <div className="w-1/5 px-2">
                  <div className="flex flex-col justify-center items-center">
                    <img
                      src={`${img_url}${item.attributes.img.data.attributes.url}`}
                      alt=""
                      className="object-cover rounded-md h-16 w-16"
                    />
                    {orderData[item.attributes.title] ? (
                      <div className="flex justify-between items-center w-16 ">
                        <img src={Add} alt="" className="h-4 cursor-pointer" />
                        <p>2</p>
                        <img
                          src={Subtract}
                          alt=""
                          className="h-4 cursor-pointer"
                        />
                      </div>
                    ) : (
                      <button
                        className="px-2 w-16 py-1 text-center rounded-md mt-2 text-xs bg-primary text-white"
                        onClick={(e) => onAdd(item.attributes.title)}
                      >
                        Add
                      </button>
                    )}
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default Menu;


