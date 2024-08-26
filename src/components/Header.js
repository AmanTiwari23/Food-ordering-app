import { useContext, useState } from "react";
import { LOGO_URL } from "../Utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnname, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);

  const cartItems = useSelector((store)=> store.cart.items);
   
  return (
    <div className="flex justify-between bg-green-100 shadow-lg mb-2">
      <div className="logo-container">
        <img className="logo w-40" src={LOGO_URL} />
      </div>

      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status : {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">contact us</Link>
          </li>
          <li className="px-4">
            {" "}
            <Link to="/grocery"> Grocery </Link>
          </li>
          <li className="px-4 font-bold">
            <Link to="/cart">Cart- ({cartItems.length} Items)</Link></li>
          <button
            className="px-4 h-0"
            onClick={() => {
              btnname === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnname}
          </button>

          <li className="px-4">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
