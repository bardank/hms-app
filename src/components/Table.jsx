import React from "react";
import Trash from "../assets/icons/trash.svg";
import Add from "../assets/icons/add.svg";
import Subtract from "../assets/icons/subtract.svg";
const Table = () => {
  return (
    <table className="w-full shadow-inner">
      <thead className="text-center">
        <th></th>
        <th className="text-xs font-normal py-2">Qty</th>
        <th className="text-xs font-normal py-2"> Name</th>
      </thead>
      <tbody>
        <tr className="text-xs font-light text-center">
          <td className="">
            <img src={Trash} alt="" className="h-4" />
          </td>
          <td className="py-2">
            <div className="flex justify-between">
              <img src={Add} alt="" className="h-4 cursor-pointer" />
              <p className="cursor-default">2</p>
              <img src={Subtract} alt="" className="h-4 cursor-pointer" />
            </div>
          </td>
          <td>Momo asdas </td>
        </tr>
        <tr>
          <td className="text-center font-normal text-primary">Total</td>
          <td></td>
          <td className="text-center">500</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
