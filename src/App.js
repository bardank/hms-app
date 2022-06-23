import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./routes/Login";
import TakeOrders from "./routes/TakeOrders";



function App() {
  return (
    <Router>
        <Routes>
          <Route path="/takeorders" element={<TakeOrders />} />
          <Route path="/" element={<Login />} />
        </Routes>
    </Router>
  );
}

export default App;
