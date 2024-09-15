import { useContext, useState } from "react";
import { LOGO_URL } from "../Utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnname, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex items-center justify-between bg-gradient-to-r from-green-100 via-orange-100 to-red-50 shadow-lg p-2 mx-auto max-w-screen sticky top-0 z-10">
      <div className="logo-container flex items-center">
        <img className=" w-32" src={LOGO_URL} alt="logo" />
      </div>

      <div className="flex flex-grow justify-end items-center">
        <ul className="flex space-x-8">
          <li className="text-gray-700 font-semibold">
            Online Status : {onlineStatus ? "✅" : "🔴"}
          </li>
          <li>
            {" "}
            <Link
              to="/"
              className="text-lg font-semibold text-gray-700 hover:text-orange-500 hover:underline transition-all duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-lg font-semibold text-gray-700 hover:text-orange-500 hover:underline transition-all duration-200"
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-lg font-semibold text-gray-700 hover:text-orange-500 hover:underline transition-all duration-200"
            >
              contact us
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="/grocery"
              className="text-lg font-semibold text-gray-700 hover:text-orange-500 hover:underline transition-all duration-200"
            >
              {" "}
              Grocery{" "}
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="text-lg font-semibold text-gray-700 hover:text-orange-500 hover:underline transition-all duration-200"
            >
              Cart-({cartItems.length}Items)
            </Link>
          </li>
          <button
            className="text-lg font-semibold text-gray-700 hover:text-orange-500 hover:underline transition-all duration-200"
            onClick={() => {
              btnname === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnname}
          </button>

          <li className="text-lg font-semibold text-gray-700 hover:text-orange-500 hover:underline transition-all duration-200">
            {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
