import React, { useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import Navbar from "../Navbar";
import Menu from "../Menu";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { Modal } from "react-daisyui";
import { CREATE_ORDER, MY_ORDERS, UPDATE_ORDER } from "../../query/order/order";
import Sidebar from "../Sidebar";
import { useUserStore } from "../../store";

const TakeOrders = ({ ...props }) => {
  const [tableNo, setTableNo] = useState(1);
  const [orderData, setOrderData] = useState({});
  const [total, setTotal] = useState(0);
  const [createOrder, { data, loading, error }] = useMutation(CREATE_ORDER);
  const myOrders = useQuery(MY_ORDERS, {
    variables: { cleared: false, table: tableNo },
  });
  const user = useUserStore((state) => state.user);

  //calculate total
  useEffect(() => {
    let total = 0;
    Object.entries(orderData).map(([key, value]) => {
      total = total + value.qty * value.price;
    });
    setTotal(total);

    return () => {
      setTotal(0);
    };
  }, [orderData]);

  //remove item from order
  const onRemove = (item) => {
    if (orderData[item].qty >= 0) {
      if (orderData[item].qty === 1) {
        let prevData = { ...orderData };
        delete prevData[item];
        setOrderData(prevData);
      } else {
        setOrderData((prev) => ({
          ...prev,
          [item]: { ...prev[item], qty: orderData[item].qty - 1 },
        }));
      }
    }
  };

  //add item from order
  const onAdd = (item, price, discount = 0) => {
    if (orderData[item]) {
      setOrderData((prev) => ({
        ...prev,
        [item]: { ...prev[item], qty: orderData[item].qty + 1 },
      }));
    } else {
      setOrderData((prev) => ({
        ...prev,
        [item]: { price: price, qty: 1, discount },
      }));
    }
  };

  //select table no
  const onSelectTable = (e) => {
    setTableNo(e.target.value);
  };

  const submitOrder = async () => {
    try {
      let details;
      if (parseInt(tableNo) > 0) {
        details = {
          total,
          details: { ...orderData },
          orderedAt: new Date(),
          orderedBy: user.name,
        };
        createOrder({
          variables: {
            table: parseInt(tableNo),
            cleared: false,
            details: details,
            confirmOrder: true,
            confirmedBy: user.name,
          },
        });

        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const body = JSON.stringify({ tableNo, orderData });

        // const print = await axios.post("http://localhost:1337/api/print", body, config);
        // console.log("print")

        setOrderData({});
        setTotal(0);
        myOrders.refetch({ cleared: false, table: parseInt(tableNo) });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen w-screen">
      <Navbar />
      <section className="section_wrapper flex box-border ">
        <Sidebar
          onAdd={onAdd}
          onRemove={onRemove}
          orderData={orderData}
          total={total}
          tableNo={tableNo}
          placeOrder={submitOrder}
          onSelectTable={onSelectTable}
          myOrders={myOrders}
        />
        <div className="main h-full p-3">
          <Menu onAdd={onAdd} onRemove={onRemove} orderData={orderData} />
        </div>
      </section>
    </div>
  );
};

export default TakeOrders;
