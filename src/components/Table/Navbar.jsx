import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import { ReactComponent as Home } from "../../assets/icons/Home.svg";
import { ReactComponent as Arrows } from "../../assets/icons/DoubleRight.svg";

// import { ReactComponent as Bill } from "../../assets/icons/bill.svg";

const Navbar = ({
  data,
  showPlaceOrder,
  onPlaceOrder,
  placeOrder,
  total,
  ...props
}) => {
  const location = useLocation();
  const navigation = useNavigate();

  const onClick = (path) => {
    navigation(path);
  };
  return (
    <nav className="fixed bottom-0 right-0">
      {showPlaceOrder && !placeOrder && (
        <div
          className="py-2 px-4 text-white bg-red-500 cursor-pointer flex justify-between items-center"
          onClick={onPlaceOrder}
        >
          Place order of रू {total > 0 ? total : ""}
          <Arrows className="w-4 h-4" />
        </div>
      )}
      <div
        className="py-2 w-screen flex justify-center items-center bg-primary text-center"
        onClick={(e) => onClick(`${location.pathname}/myorders`)}
      >
        <div className="text-center text-white font-semibold text-xl">
          My Orders
        </div>
      </div>

      {/* <ul className="flex px-2 py-2 w-screen bg-primary">
        <NavItem>
          <Home className="text-red-500  stroke-red-200" />
        </NavItem>
        <NavItem>
          <Bill className="stroke-white" />
        </NavItem>
      </ul> */}
    </nav>
  );
};

export default Navbar;

export const NavItem = ({ img, ...props }) => {
  return (
    <li className="w-1/2 flex justify-center items-center text-center">
      {props.children}
    </li>
  );
};
