import React from "react";
import logo from "../assets/logo.svg";
import logout from "../assets/icons/logout.svg";

const Navbar = () => {
  return (
    <nav className="navbar bg-primary text-white w-screen px-4  flex justify-between items-center">
      <div>
        <img src={logo} className="h-12 w-12" alt="Logo" />
        {/* <Logo height={24} className="w-24 h-24"/> */}
      </div>
      <NavList>
        <NavItem>Take orders</NavItem>
        <NavItem>Orders List</NavItem>
      </NavList>
      <NavList>
        <li className="font-semibold text-sm"> 12:15 pm</li>
      </NavList>
      <NavList>
        <li className="font-semibold text-sm"> 15th Aug 2018</li>
      </NavList>
      <NavList>
        <li>
          <img
            src={
              "https://images.unsplash.com/photo-1512485800893-b08ec1ea59b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            }
            className="h-12 w-12 rounded-full p-1 object-cover bg-white"
            alt="Logo"
          />
        </li>
        <li>
          <span className="px-4 font-medium text-md">John</span>
        </li>
        <li>
          <img src={logout} alt="logout" className="h-8 w-8" />
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
  return <li className=" px-4  cursor-pointer">{props.children}</li>;
};
