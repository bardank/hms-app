import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Logout } from "../assets/icons/logout.svg";
import moment from "moment";
import { useUserStore } from "../store";

const Navbar = ({ ...props }) => {
  const date = new Date();
  const removeUser = useUserStore((state) => state.removeUser);
  const onLogout = () => {
    removeUser();
  };

  return (
    <nav className="navbar bg-primary text-white w-screen px-4  flex justify-between items-center">
      <div>
        <Logo className="h-12 w-12" />
        {/* <Logo height={24} className="w-24 h-24"/> */}
      </div>
      <NavList>
        {/* <NavItem>
        
        </NavItem> */}
        <NavItem>
          <Link to={"/dashboard/liveorders"}>Live-orders</Link>
        </NavItem>
      </NavList>
      <NavList>
        <li className="font-semibold text-sm">
          <p>
            {moment(date).format("h:mm a")}
            <span className="px-4">{moment(date).format("MMMM dddd")}</span>
          </p>
        </li>
      </NavList>
      <NavList>
        <li className="font-semibold text-sm"></li>
      </NavList>
      <NavList>
        <li>
          <img
            src={
              "https://images.unsplash.com/photo-1512485800893-b08ec1ea59b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            }
            className="h-12 w-12 rounded-full p-1 object-cover "
            alt="Logo"
          />
        </li>
        <li>
          <span className="px-4 font-medium text-md">John</span>
        </li>
        <li>
          <button onClick={onLogout}>
            <Logout className="h-6 w-6 cursor-pointer" />
          </button>
        </li>
      </NavList>
    </nav>
  );
};

export default Navbar;

export const NavList = ({ ...props }) => {
  return <ul className="flex items-center">{props.children}</ul>;
};

export const NavItem = ({ ...props }) => {
  return <li className=" px-4  cursor-pointer underline">{props.children}</li>;
};
