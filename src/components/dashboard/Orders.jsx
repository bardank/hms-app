import React, { useEffect, useState, useRef, Fragment } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { MY_ORDERS, CLEARED_ORDER, LIVE_ORDERS } from "../../query/order/order";
import { useUserStore } from "../../store";
import moment from "moment";
import OrderDisplayTable from "../OrderDisplayTable";

const Orders = ({ ...props }) => {
  const [tableNo, setTableNo] = useState(1);
  const [live, setLive] = useState(true);
  const user = useUserStore((state) => state.user);
  const { loading, error, data, refetch } = useQuery(MY_ORDERS, {
    variables: { cleared: false, table: tableNo },
  });
  const liveOrders = useQuery(LIVE_ORDERS, {
    variables: { cleared: false },
  });

  const printEl = useRef(null);

  const [updateOrder] = useMutation(CLEARED_ORDER);

  useEffect(() => {
    if (live) {
      liveOrders.refetch({ cleared: false });
    } else {
      refetch({ cleared: false, table: tableNo });
    }
  }, [live, tableNo]);

  useEffect(() => {
    if (!user.email || user.email.length < 5) {
      // navigation("/");
    }
    return () => {};
  }, [user]);

  const onTableSelect = (tableNo) => {
    setTableNo(tableNo);
    if (live) {
      setLive(false);
    }
  };
  const print = (e) => {
    window.print();
  };
  const markAsPaid = () => {
    updateOrder({
      variables: {
        id: data.orders.data[0].id,
        cleared: true,
      },
    });
    refetch({ cleared: false, table: tableNo });
  };
  return (
    <section className="section">
      <div className="left">
        <div className="pt-4">
          <div className="flex justify-center">
            <Link
              className="border-0 rounded-md px-6 py-4 text-primary transition-all"
              to="/dashboard/takeorders"
            >
              Take orders
            </Link>
            <button
              className={
                live
                  ? " border-0 rounded-md px-6 py-2 text-white bg-red-500 transition-all"
                  : "border-red-500 text-red-500 border-2 rounded-md px-6 py-2 transition-all"
              }
              onClick={(e) => setLive(true)}
            >
              Live
            </button>
          </div>
          <Table onTableSelect={onTableSelect} tableNo={tableNo} live={live} />
        </div>
      </div>
      <div className="right">
        <div className="p-4">
          <h2
            className={
              "font-semibold text-2xl text-primary pb-4 text-center " +
              (live && "text-red-500")
            }
          >
            {live ? "Live orders" : "Current orders"}
          </h2>
          {live ? (
            <Fragment>
              {liveOrders.data &&
                liveOrders.data.orders.data.length > 0 &&
                liveOrders.data.orders.data.map((item, i) => (
                  <ul key={item.id}>
                    <li className="py-4">
                      <div>
                        <h4 className="text-center text-2xl font-semibold">
                          Table {item.attributes.tableNo}
                        </h4>
                      </div>
                    </li>
                    <li className="pb-6" key={i}>
                      <div className=" px-8">
                        <div>
                          <p>
                            <span className="font-semibold text-red-600">
                              {moment(item.attributes.orderedAt).format(
                                "h:mm a "
                              )}
                            </span>
                            {moment(item.attributes.orderedAt).format(
                              "MMM DD "
                            )}{" "}
                            ordered by
                            <span className="text-primary">
                              {" "}
                              {item.attributes.orderedBy}
                            </span>
                          </p>
                        </div>

                        <OrderDisplayTable order={item} />
                        {item.attributes.details.orderedBy === "customer" && (
                          <button
                            onClick={print}
                            className="text-white rounded bg-primary px-4 py-2 my-4"
                          >
                            Confirm order
                          </button>
                        )}
                      </div>
                    </li>
                  </ul>
                ))}
              <ul>
                {liveOrders.error && !liveOrders.loading && (
                  <li className="pb-6">
                    <p className="text-center">Something went wrong</p>
                  </li>
                )}
                {liveOrders.loading && (!liveOrders.data || !liveOrders.error) && (
                  <li className="pb-6">
                    <p className="text-center">loading...</p>
                  </li>
                )}
              </ul>
            </Fragment>
          ) : (
            <ul>
              {data && data.orders.data.length > 0 && (
                <li className="py-4">
                  <div>
                    <h4 className="text-center font-semibold">
                      Table {data.orders.data[0].attributes.tableNo}
                    </h4>
                  </div>
                </li>
              )}
              <li></li>
              {data &&
                data.orders.data.length > 0 &&
                data.orders.data.map((order, i) => (
                  <li className="pb-6" key={order.id}>
                    <div className=" px-8">
                      <div>
                        <p>
                          <span className="font-semibold text-red-600">
                            {moment(order.attributes.orderedAt).format(
                              "h:mm a "
                            )}
                          </span>
                          {moment(order.attributes.orderedAt).format("MMM DD ")}{" "}
                          ordered by
                          <span className="text-primary">
                            {" "}
                            {order.attributes.orderedBy}
                          </span>
                        </p>
                      </div>

                      <OrderDisplayTable order={order} />
                      {order.attributes.details.orderedBy === "customer" && (
                        <button
                          onClick={print}
                          className="text-white rounded bg-primary px-4 py-2 my-4"
                        >
                          Confirm order
                        </button>
                      )}
                    </div>
                  </li>
                ))}
              {data && data.orders.data.length > 0 && (
                <li className="py-4">
                  <button
                    className="text-center text-white bg-red-500 px-3 py-2 rounded-md font-normal"
                    onClick={markAsPaid}
                  >
                    Clear Table
                  </button>
                </li>
              )}
              {!loading && data && data.orders.data.length === 0 && !error && (
                <li>
                  <p className="text-center">
                    Seems like table {tableNo} has not ordered anything yet
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
          )}
        </div>
      </div>
    </section>
  );
};

const Live = ({ ...props }) => {
  return <div>{props.children}</div>;
};

export default Orders;


const Table = ({ onTableSelect, tableNo, live }) => {
  const tables = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const location = useLocation();

  return (
    <div className="p-2">
      <h2 className="text-xl font-semibold text-center py-4">
        Pick your table
      </h2>
      {/* {console.log(location)} */}
      <div className="flex justify-center flex-wrap">
        {tables.map((item, i) => (
          <div className="p-4 shrink-0" key={i}>
            <button
              className={
                !live && parseInt(tableNo) === parseInt(item)
                  ? " border-2 border-transparent rounded-md p-2 text-white bg-primary transition-all"
                  : "border-primary text-primary border-2 rounded-md p-2 transition-all"
              }
              onClick={(e) => onTableSelect(item)}
            >
              Table {item}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
