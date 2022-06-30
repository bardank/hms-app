import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./routes/Login";
import TakeOrders from "./routes/TakeOrders";
import Table from "./routes/Table/Table";
import MenuTable from "./routes/Table/TableMenu";
import MyOrders from "./components/Table/MyOrders";
import LiveOrders from "./routes/LiveOrders";
import { useUserStore } from "./store";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/live-orders" element={<LiveOrders />} />
        <Route path="/takeorders" element={<TakeOrders />} />
        <Route path="/table/:id/myorders" element={<MyOrders />} />
        <Route path="/table/:id" element={<MenuTable />} />
        <Route path="/table" element={<Table />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
