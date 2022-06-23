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

//  <InputData
//               id={"email"}
//               label={"Email"}
//               onChange={onChange}
//               value={formData.email}
//               type={"email"}
//             />
//             <InputData
//               id={"password"}
//               label={"Password"}
//               onChange={onChange}
//               value={formData.password}
//               type={"password"}
//             />

// export const InputData = ({ id, onChange, type, label, value }) => {
//   return (
//     <div className="flex flex-col space-y-1">
//       <label htmlFor="email" className="text-sm font-semibold text-gray-500">
//         {label}
//       </label>
//       <input
//         type={type}
//         id={id}
//         onChange={(e) => onChange(e)}
//         value={value}
//         autoFocus={type == "email"}
//         className="px-4 py-2 transition duration-300 border border-gray-300 rounded "
//       />
//     </div>
//   );
// };
export default App;
