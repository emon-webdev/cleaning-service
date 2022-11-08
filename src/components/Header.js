import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const user = {};

  let activeClass = {
    color: "#1039AD",
    background: "none",
  };

  const mainMenu = (
    <>
      <li>
        <NavLink
          to="/home"
          className="text-[#232F4B] text-[18px] font-medium"
          style={({ isActive }) => (isActive ? activeClass : undefined)}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          className="text-[#232F4B] text-[18px] font-medium"
          style={({ isActive }) => (isActive ? activeClass : undefined)}
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className="text-[#232F4B] text-[18px] font-medium"
          style={({ isActive }) => (isActive ? activeClass : undefined)}
        >
          Blog
        </NavLink>
      </li>
      {user.uid ? (
        <>
          <li>
            <NavLink
              to="/profile"
              className="text-[#232F4B] text-[18px] font-medium"
              style={({ isActive }) => (isActive ? activeClass : undefined)}
            >
              Profile
            </NavLink>
          </li>
          <li>
            <button className="text-[#232F4B] text-[18px] font-medium">
              Sign Out
            </button>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink
              to="/signin"
              className="text-[#232F4B] text-[18px] font-medium"
              style={({ isActive }) => (isActive ? activeClass : undefined)}
            >
              Sign In
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signup"
              className="text-[#232F4B] text-[18px] font-medium"
              style={({ isActive }) => (isActive ? activeClass : undefined)}
            >
              Sign Up
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="md:w-11/12 px-4 md:px-0 mx-auto">
      <div className="navbar justify-between bg-base-100">
        <div className="navbar-start w-max">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {mainMenu}
            </ul>
          </div>
          <Link to="/" className="text-[#232F4B] text-[30px] font-bold text-xl">
            Clean
          </Link>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal p-0">{mainMenu}</ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
