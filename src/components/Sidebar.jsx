import React, { useState, useEffect } from "react";
import Table from "./Table";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { MY_ORDERS } from "../query/order/order";
import axios from "axios";
import OrderDisplayTable from "./OrderDisplayTable";

const Sidebar = ({
  onAdd,
  onRemove,
  orderData,
  total,
  tableNo,
  onSelectTable,
  placeOrder,
  myOrders : {loading, error, data, refetch}
}) => {
  const tables = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


  useEffect(() => {
    refetch({ cleared: false, table: parseInt(tableNo) });
  }, [tableNo]);


  return (
    <div className="sidebar">
      <div className="shadow-lg min-h-full">
        <div className=" flex justify-center items-center bg-primary h-10 border-t-4 border-white">
          <h5 className="text-center text-white font-semibold">Dine in</h5>
        </div>
        <div className="flex pt-8 pb-4 justify-center">
          <div className="flex flex-col space-y-1">
            <div>
              <select
                value={tableNo}
                onChange={(e) => onSelectTable(e)}
                className="bg-primary py-2 px-4 text-white text-sm hover:opacity-90 rounded-md"
              >
                {tables.map((table, item) =>
                  tables.length !== parseInt(table) - 1 ? (
                    <option value={table} key={item}>
                      {table}
                    </option>
                  ) : null
                )}
              </select>
            </div>
          </div>
        </div>
        <div className="px-2">
          <h4 className="underline underline-offset-8 text-secondary decoration-secondary">
            Selected table
          </h4>
          <div className=" text-red-500 pt-4">
            <button className="border pt-1 px-2 text-sm border-red-600 font-medium  rounded-md border-3">
              Table <br /> {tableNo}
            </button>
          </div>
          <div className="pt-4 ">
            <div className="pb-2">
              <Table
                onAdd={onAdd}
                onRemove={onRemove}
                orderData={orderData}
                total={total}
              />
            </div>
            <div className="float-right py-2">
              {total > 0 && (
                <button
                  onClick={placeOrder}
                  className="py-2 px-2 rounded-md bg-primary text-white text-sm"
                >
                  place order
                </button>
              )}
            </div>
            {data &&
              data.orders.data.length > 0 &&
              data.orders.data.map((order, i) => (
                <div className="py-4" key={order.id}>
                  <OrderDisplayTable order={order} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
