import React, { Fragment } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ReactComponent as Add } from "../../assets/icons/add.svg";
import { ReactComponent as Subtract } from "../../assets/icons/subtract.svg";
import { ReactComponent as Back } from "../../assets/icons/Back.svg";
import OrderTable from "./OrderTable";

const PlaceOrder = ({
  prevOders,
  loading,
  submitOrder,
  orderData,
  onPlaceOrder,
  onAdd,
  onRemove,
  total,
  ...props
}) => {
  const navigation = useNavigate();
  const params = useParams();
  const goBack = () => {
    navigation(`/table/${params.id}`);
  };

  return (
    <div className="w-screen h-screen">
      <div className="pt-2 pb-8 px-4">
        <div className="block">
          <Back className="h-6 w-6 cursor-pointer" onClick={onPlaceOrder} />
        </div>
        <h2 className="font-semibold text-lg pt-2 pb-4 text-center">
          {" "}
          Confirm Your Orders
        </h2>

        <div className="w-full px-4">
          <table className="w-full ">
            <thead className="text-center border-b border-gray-400">
              <tr>
                <th className="text-sm font-semibold py-2">Qty</th>
                <th className="text-sm font-semibold py-2"> Name</th>
                <th className="text-sm font-semibold py-2">price</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(orderData).map(([key, value]) => (
                <tr className="text-center border-b border-gray-400" key={key}>
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
          <div className="p-4 pt-8">
            <div className=" py-2">
              <button
                className={
                  "text-sm rounded font-semibold py-3 px-4 bg-primary text-white " +
                  (loading && " opacity-30")
                }
                onClick={submitOrder}
              >
                {loading ? "please wait" : "place order"}
              </button>
            </div>
            <div className="bg-gray-200 rounded-md p-4">
              <p className="ext-sm font-semibold px-2 text-red-500">Note:</p>
              <p className="text-sm font-semibold px-2 text-red-500">
                Once the order is placed, it cannot be canceled.
              </p>
            </div>
          </div>
        </div>
        <h2 className="text-lg font-semibold text-center">Your orders</h2>
        <OrderTable data={prevOders} />
        {prevOders.orders.data.length === 0 && (
          <Fragment>
            <p className="text-center">
              Seems like you have not ordered anything yet
            </p>
            <p
              className="text-center text-red-600 underline cursor-pointer"
              onClick={goBack}
            >
              lets order something for you 😊
            </p>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default PlaceOrder;
