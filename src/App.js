import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./routes/Login";
import TakeOrders from "./routes/TakeOrders";
import Table from "./routes/Table";
import MenuTable from "./routes/TableMenu";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/takeorders" element={<TakeOrders />} />
        <Route path="/table/:id" element={<MenuTable />} />
        <Route path="/table" element={<Table />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
