import React from "react";
import { ReactComponent as Add } from "../assets/icons/add.svg";
import { ReactComponent as Subtract } from "../assets/icons/subtract.svg";

//take order table
const Table = ({ total, orderData, onRemove, onAdd }) => {
  return (
    <table className="w-full border border-gray-300 rounded-md">
      <thead className="text-center border-b border-gray-300">
        <tr>
          <th className="text-sm font-semibold py-2">Qty</th>
          <th className="text-sm font-semibold py-2"> Name</th>
          <th className="text-sm font-semibold py-2">price</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(orderData).map(([key, value]) => (
          <tr className="text-center border-b border-gray-300" key={key}>
            <td>
              <div className="flex justify-between items-center">
                <button>
                  <Add
                    className="h-4 cursor-pointer"
                    onClick={(e) => onAdd(key, value.price)}
                  />
                </button>
                <span className="">{value.qty}</span>
                <button>
                  <Subtract
                    className="h-4 cursor-pointer"
                    onClick={(e) => onRemove(key)}
                  />
                </button>
              </div>
            </td>
            <td className="text-sm">{key}</td>
            <td className="text-center text-sm">{value.price}</td>
          </tr>
        ))}
        <tr className="text-center">
          <td></td>
          <td>Subtotal</td>
          <td>{total}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
