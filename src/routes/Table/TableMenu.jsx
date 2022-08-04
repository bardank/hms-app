import React, { Fragment, useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import Menu from "../../components/Menu";
import Navbar from "../../components/Table/Navbar";
import PlaceOrder from "../../components/Table/PlaceOrder";
import { CREATE_ORDER } from "../../query/order/order";
import { MY_ORDERS, UPDATE_ORDER } from "../../query/order/order";

const MenuTable = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const params = useParams();

  const [placeOrder, setPlaceOrder] = useState(false);
  const [orderData, setOrderData] = useState({});
  const [total, setTotal] = useState(0);
  const [createOrder, { data, loading, error }] = useMutation(CREATE_ORDER);
  const [updateOrder] = useMutation(UPDATE_ORDER);
  const myOrders = useQuery(MY_ORDERS, {
    variables: { cleared: false, table: parseInt(params.id) },
  });

  useEffect(() => {
    if (placeOrder) {
      myOrders.refetch({ cleared: false, table: parseInt(params.id) });
    }
  }, [placeOrder]);

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
    if (parseInt(params.id) > 0) {
      let details = {
        total,
        details: { ...orderData },
        orderedBy: "customer",
      };
      createOrder({
        variables: {
          table: parseInt(params.id),
          cleared: false,
          details: details,
          confirmOrder: false,
          confirmedBy: "",
        },
      });

      setOrderData({});
      setTotal(0);
      setPlaceOrder(false);
      navigation(`${location.pathname}/myorders`);
    }
  };

  return (
    <Fragment>
      <section className="relative min-h-screen w-screen">
        {placeOrder && parseInt(params.id) > 0 ? (
          <PlaceOrder
            onAdd={onAdd}
            onRemove={onRemove}
            onPlaceOrder={onPlaceOrder}
            orderData={orderData}
            total={total}
            loading={loading}
            submitOrder={submitOrder}
            prevOders={myOrders.data}
          />
        ) : (
          <Menu onAdd={onAdd} onRemove={onRemove} orderData={orderData} />
        )}
        <Navbar
          data={data}
          onPlaceOrder={onPlaceOrder}
          placeOrder={placeOrder}
          total={total}
          showPlaceOrder={Object.keys(orderData).length > 0}
        />
      </section>
    </Fragment>
  );
};

export default MenuTable;
