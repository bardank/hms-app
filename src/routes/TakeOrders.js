import React from "react";
import Navbar from "../components/Navbar";
import search from "../assets/icons/search.svg";
import Table from "../components/Table";
import Add from "../assets/icons/add.svg";
import Subtract from "../assets/icons/subtract.svg";

const TakeOrders = () => {
  return (
    <div className="min-h-screen w-screen">
      <Navbar />
      <section className="section_wrapper flex box-border ">
        <div className="sidebar h-full p-3">
          <div className="rounded-md shadow-lg h-full">
            <div className=" flex justify-center items-center bg-primary h-10 rounded-t-md">
              <h5 className="text-center text-white font-semibold">Dine in</h5>
            </div>
            <div className="flex pt-8 pb-4 justify-center">
              <button className="bg-primary py-2 px-4 text-white text-sm hover:opacity-90 rounded-md">
                Select Table
              </button>
            </div>
            <div className="px-2">
              <h4 className="underline underline-offset-8 text-secondary decoration-secondary">
                Selected table
              </h4>
              <div className=" text-primary pt-4">
                <button className="border pt-1 px-2 text-sm border-primary rounded-md border-3">
                  Table <br /> 2
                </button>
              </div>
              <div className="pt-4">
                <Table />
                <div className="float-right pt-2">
                  <button className="p-1 rounded-md bg-primary text-white text-sm">
                    place order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main h-full p-3">
          <div className="rounded-md shadow-lg h-full w-full box-border p-4">
            <div className="flex items-center shadow-md px-2 rounded-md">
              <img src={search} className="w-6 h-6  " alt="search" />
              <input
                type="text"
                placeholder="Search your food"
                className="py-2 px-2 w-full"
              />
            </div>
            <ul className="flex w-full flex-nowrap shrink-0 py-4 px-2 overflow-x-scroll ">
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
              <li className="flex p-2 border-b-2">
                <div className="w-4/5">
                  <h6 className="">Burger</h6>
                  <span className="text-sm font-semibold">रू 125</span>
                  <p className="text-xs font-light">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quaerat natus dicta ipsa, officiis explicabo vero sit
                    provident molestiae esse
                  </p>
                </div>
                <div className="w-1/5 px-2">
                  <div className="flex flex-col justify-center items-center">
                    <img
                      src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80"
                      alt=""
                      className="object-cover rounded-md h-16 w-16"
                    />
                    <button className="px-2 w-16 py-1 text-center rounded-md mt-2 text-xs bg-primary text-white">
                      Add
                    </button>
                  </div>
                </div>
              </li>
              <li className="flex p-2">
                <div className="w-4/5">
                  <h6 className="font-semibold">Burger</h6>
                  <span className="text-sm font-semibold">रू 125</span>
                  <p className="text-xs font-light">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quaerat natus dicta ipsa, officiis explicabo vero sit
                    provident molestiae esse
                  </p>
                </div>
                <div className="w-1/5 px-2">
                  <div className="flex flex-col justify-center items-center">
                    <img
                      src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80"
                      alt=""
                      className="object-cover rounded-md h-16 w-16"
                    />
                    <div className="flex justify-between items-center w-16 ">
                      <img src={Add} alt="" className="h-4 cursor-pointer" />
                      <p>2</p>
                      <img src={Subtract} alt="" className="h-4 cursor-pointer" />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TakeOrders;
