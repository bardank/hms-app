import React, { Fragment, useState } from "react";
import { ReactComponent as Search } from "../assets/icons/search.svg";
import { ReactComponent as Add } from "../assets/icons/add.svg";
import { ReactComponent as Subtract } from "../assets/icons/subtract.svg";
import { useQuery } from "@apollo/client";
import { GET_MENU } from "../query/menu/menu";
import { GET_CATEGORY } from "../query/menu/category";
import { config } from "../utils/config";

const Menu = ({ onAdd, orderData, onRemove }) => {
  const [searchFood, setSearchFood] = useState("");
  const { loading, error, data, refetch } = useQuery(GET_MENU, {
    variables: { search: searchFood },
  });
  const categroyData = useQuery(GET_CATEGORY, {
    variables: { title: searchFood },
  });
  const onSearchChange = (e) => {
    setSearchFood(e.target.value);
    refetch({ search: e.target.value });
    categroyData.refetch({ title: e.target.value });
  };
  return (
    <Fragment>
      <div className="rounded-md md:shadow-lg h-full w-full box-border p-4 pb-28">
        <div className="flex items-center shadow-md px-2 rounded-md">
          <Search
            className="w-6 h-6"
            onClick={(e) => refetch({ search: searchFood })}
            alt="search"
          />
          <input
            type="text"
            placeholder="Search your food"
            className="py-2 px-2 w-full"
            onChange={(e) => onSearchChange(e)}
          />
        </div>
        <ul className="flex w-full flex-nowrap py-4 px-2 overflow-x-scroll ">
          {categroyData.data &&
            categroyData.data.categories.data.map((item, i) => (
              <li className="px-2 shrink-0" key={item.id}>
                <div className="rounded-md relative cursor-pointer">
                  <img
                    src={`${config.imgUrl}${item.attributes.img.data.attributes.url}`}
                    alt=""
                    className="object-cover rounded-md w-24 h-24"
                  />
                  <div className="absolute bottom-0 left-0 w-full text-center bg-dark rounded-b-md ">
                    <div className="flex justify-center items-center text-white py-2 ">
                      {item.attributes.title}
                    </div>
                  </div>
                </div>
              </li>
            ))}
        </ul>

        <ul className="flex flex-col mt-4">
          {data &&
            data.foods.data.map((item, i) => (
              <li className="flex p-2 border-b-2" key={item.id}>
                <div className="w-4/5">
                  <h6 className="capitalize">{item.attributes.title}</h6>
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
                      src={`${config.imgUrl}${item.attributes.img.data.attributes.url}`}
                      alt=""
                      className="object-cover rounded-md h-16 w-16"
                    />
                    {orderData[item.attributes.title] &&
                    orderData[item.attributes.title].qty > 0 ? (
                      <div className="flex justify-between items-center w-20">
                        <button>
                          <Add
                            className="h-4 cursor-pointer"
                            onClick={(e) =>
                              onAdd(
                                item.attributes.title,
                                item.attributes.price
                              )
                            }
                          />
                        </button>
                        <p className="">
                          {orderData[item.attributes.title].qty}
                        </p>
                        <button>
                          <Subtract
                            className="h-4 cursor-pointer"
                            onClick={(e) => onRemove(item.attributes.title)}
                          />
                        </button>
                      </div>
                    ) : (
                      <button
                        className="px-2 w-16 py-1 text-center rounded-md mt-2 text-xs bg-primary text-white"
                        onClick={(e) =>
                          onAdd(item.attributes.title, item.attributes.price)
                        }
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
