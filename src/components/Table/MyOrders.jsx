import React, {useEffect} from "react";
import { useQuery } from "@apollo/client";
import { useParams, useNavigate } from "react-router-dom";
import { ReactComponent as Back } from "../../assets/icons/Back.svg";
import { MY_ORDERS } from "../../query/order/order";
import OrderTable from "./OrderTable";
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
          {/* {console.log(data.orders.data[0].attributes.details)} */}
          <OrderTable data={data} />

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
