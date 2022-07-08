import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import Navbar from "../Navbar";
import Menu from "../Menu";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { Modal } from "react-daisyui";
import { CREATE_ORDER } from "../../query/order/order";
import Sidebar from "../Sidebar";

const TakeOrders = () => {
  const [showTableModel, setShowTableModel] = useState(true);
  // const navigation = useNavigate();
  // const location = useLocation();
  const params = useParams();

  const [placeOrder, setPlaceOrder] = useState(false);
  const [orderData, setOrderData] = useState({});
  const [total, setTotal] = useState(0);
  const [createOrder, { data, loading, error }] = useMutation(CREATE_ORDER);

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

  const onPlaceOrder = () => {
    setPlaceOrder(!placeOrder);
  };

  const submitOrder = () => {
    let details = { total, details: { ...orderData } };
    createOrder({
      variables: {
        table: parseInt(params.id),
        billed: false,
        details: details,
      },
    });
    setOrderData({});
    setTotal(0);
    setPlaceOrder(false);
    // navigation(`${location.pathname}/myorders`);
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
        />
        <div className="main h-full p-3">
          <Menu onAdd={onAdd} onRemove={onRemove} orderData={orderData} />
        </div>
      </section>
    </div>
  );
};

export default TakeOrders;
