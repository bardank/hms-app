import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Login from "./routes/Login";
import TakeOrders from "./components/dashboard/TakeOrders";
import LiveOrders from "./components/dashboard/LiveOrders";
import Table from "./routes/Table/Table";
import MenuTable from "./routes/Table/TableMenu";
import MyOrders from "./components/Table/MyOrders";
import { useUserStore } from "./store";
import { GET_USER } from "./query/auth";
import PrivateRouter from "./components/PrivateRoute";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const setUser = useUserStore((state) => state.setUser);
  const user = useUserStore((state) => state.user);
  const { data, loading, error, refetch } = useQuery(GET_USER);

  useEffect(() => {
    if (localStorage.getItem("qr-waiter") && data && user.email === "") {
      // refetch();
      setUser(localStorage.getItem("qr-waiter"), data.me);
    }
    return () => {};
  }, [data]);

  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard/liveorders/*" element={<LiveOrders />} />
          <Route path="/dashboard/takeorders" element={<TakeOrders />} />
          <Route path="/dashboard" element={<TakeOrders />} />
        </Route>
        <Route path="/table/:id/myorders" element={<MyOrders />} />
        <Route path="/table/:id" element={<MenuTable />} />
        <Route path="/table" element={<Table />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
