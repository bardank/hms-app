import React, { useEffect, useState } from "react";
import { ReactComponent as Search } from "../assets/icons/search.svg";
import { useQuery } from "@apollo/client";
import {  useNavigate, Link } from "react-router-dom";
import { MY_ORDERS } from "../query/order/order";
import { useUserStore } from "../store";

const LiveOrders = ({ ...props }) => {
  const [searchFood, setSearchFood] = useState("");
  const navigation = useNavigate();
  const user = useUserStore((state) => state.user);
  const { loading, error, data, refetch } = useQuery(MY_ORDERS, {
    variables: { billed: false },
  });

  useEffect(() => {
    refetch({ billed: false });
  }, []);

  useEffect(() => {
    if (!user.email || user.email.length < 5) {
        navigation("/");
    }
    return () => {};
  }, [user]);

  const onSearchChange = (e) => {
    setSearchFood(e.target.value);
  };

  const onTableSelect= (tableNo)=>{
    refetch({ billed: false, table : tableNo });
  }
  return (
    <section className="section">
      <div className="left">
        {/* <div className="flex items-center shadow-md mx-2 my-4 px-2 rounded-md">
          <Search
            className="w-6 h-6"
            onClick={(e) => refetch({ search: searchFood })}
            alt="search"
          />
          <input
            type="text"
            placeholder="Enter table number"
            className="py-2 px-2 w-full"
            onChange={(e) => onSearchChange(e)}
          />
        </div> */}
        <div className="pt-4">
          <Table onTableSelect={onTableSelect} />
        </div>
      </div>
      <div className="right">
        <div className="p-4">
          <h2 className="font-semibold text-2xl text-primary pb-4 text-center">
            Current orders
          </h2>

          <ul>
            {data &&
              data.orders.data.map((item, i) => (
                <li className="pb-6" key={i}>
                  <div>
                    <h4 className="text-center font-semibold">
                      Table {item.attributes.tableNo}
                    </h4>
                  </div>
                  <div className=" px-8">
                    <table className="w-full border border-gray-300 ">
                      <thead className="text-center bg-primary ">
                        <tr className="text-white">
                          <th className="text-sm font-semibold py-2">Name</th>
                          <th className="text-sm font-semibold py-2">Qty</th>
                          <th className="text-sm font-semibold py-2">Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.entries(item.attributes.details.details).map(
                          ([key, value]) => (
                            <tr
                              className="text-center border-b border-gray-200"
                              key={key}
                            >
                              <td className="text-center text-sm">{key}</td>
                              <td className="text-center text-sm">
                                {value.qty}
                              </td>
                              <td className="text-center text-sm">
                                {value.price}
                              </td>
                            </tr>
                          )
                        )}
                        <tr className="text-center ">
                          <td className="font-semibold">Subtotal</td>
                          <td></td>
                          <td className="font-semibold">
                            {item.attributes.details.total}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </li>
              ))}
            {!loading && data && data.orders.data.length === 0 && (
              <li>
                <p className="text-center">
                  Seems like table has not ordered anything yet
                </p>
              </li>
            )}
            {error && !loading && (
              <li className="pb-6">
                <p className="text-center">Something went wrong</p>
              </li>
            )}
            {loading && (!data || !error) && (
              <li className="pb-6">
                <p className="text-center">loading...</p>
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LiveOrders;

const Table = ({ onTableSelect }) => {
  const tables = [1, 2, 3, 4, 5, , 6, 7, 8, 9, 10];
  return (
    <div className="p-2">
      <h2 className="text-xl font-semibold text-center py-4">
        Pick your table
      </h2>
      <div className="flex justify-center flex-wrap">
        {tables.map((item, i) => (
          <div className="p-4 shrink-0" key={i}>
            <button
              className="border-primary text-primary border-2 rounded-md p-2"
              onClick={(e) => onTableSelect(i)}
            >
              Table {item}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
