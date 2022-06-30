import React, {useEffect} from "react";
import { useQuery } from "@apollo/client";
import { useParams, useNavigate } from "react-router-dom";
import { ReactComponent as Back } from "../../assets/icons/Back.svg";
import { MY_ORDERS } from "../../query/order/order";

const MyOrders = ({ ...props }) => {
  const navigation = useNavigate();
  const params = useParams();
  const { loading, error, data, refetch } = useQuery(MY_ORDERS, {
    variables: { billed: false, table : parseInt(params.id) },
  });

  useEffect(()=>{
    refetch({ billed: false, table: parseInt(params.id) });
  },[])

  const goBack = () => {
    navigation(`/table/${params.id}`);
  };

  return (
    <section className="">
      <div className="p-4">
        <div className="block">
          <Back className="h-6 w-6 cursor-pointer" onClick={goBack} />
        </div>
        <h2 className="font-semibold text-2xl text-primary py-4 text-center">
          My orders
        </h2>
        <ul>
          {data &&
            data.orders.data.map((item, i) => (
              <li className="pb-6" key={i}>
                <div>
                  <h4 className="text-center font-semibold">Order {i + 1}</h4>
                </div>
                <div className="w-full px-8">
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
                            <td className="text-sm">{key}</td>
                            <td className="text-center text-sm">{value.qty}</td>
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
                Seems like you have not ordered anything yet
              </p>
              <p
                className="text-center text-primary underline cursor-pointer"
                onClick={goBack}
              >
                lets order something for you 😊
              </p>
            </li>
          )}
          {error && !loading && (
            <li>
              <p className="text-center">Something went wrong</p>
            </li>
          )}
          {loading && (!data || !error) && (
            <li>
              <p className="text-center">loading...</p>
            </li>
          )}
        </ul>
      </div>
    </section>
  );
};

export default MyOrders;
