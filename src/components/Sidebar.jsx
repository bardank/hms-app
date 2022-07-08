import React from "react";
import Table from "./Table";

const Sidebar = ({ onAdd, onRemove, orderData, total }) => {
  const tables = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="sidebar">
      <div className="shadow-lg h-full">
        <div className=" flex justify-center items-center bg-primary h-10 border-t-4 border-white">
          <h5 className="text-center text-white font-semibold">Dine in</h5>
        </div>
        <div className="flex pt-8 pb-4 justify-center">
          <div className="flex flex-col space-y-1">
            <div>
              <select className="bg-primary py-2 px-4 text-white text-sm hover:opacity-90 rounded-md">
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
          <div className=" text-primary pt-4">
            <button className="border pt-1 px-2 text-sm border-primary rounded-md border-3">
              Table <br /> 2
            </button>
          </div>
          <div className="pt-4">
            <Table
              onAdd={onAdd}
              onRemove={onRemove}
              orderData={orderData}
              total={total}
            />
            <div className="float-right pt-2">
              <button className="p-1 rounded-md bg-primary text-white text-sm">
                place order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
