import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Table from "../components/Table";
import Menu from "../components/Menu";

const TakeOrders = () => {
  const [orderData, setOrderData] = useState([{}]);

  const onAdd = (item) => {
    if (orderData.item) {
      setOrderData((prev) => ({ ...prev, [item]: orderData.item + 1 }));
    } else {
      setOrderData((prev) => ({ ...prev, [item]: 1 }));
    }
  };

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
          <Menu onAdd={onAdd} orderData={orderData} />
        </div>
      </section>
    </div>
  );
};

export default TakeOrders;
