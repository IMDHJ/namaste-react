import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

  const onlineStatus = useOnlineStatus();

  const[btnName, setBtnName] = useState("Login");
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          ></img>
        </div>
        <div className="nav-items">
          <ul>
          <li>Online Status: {onlineStatus ? "🟢" : "🔴" }</li>
            <li><Link to="grocery">Grocery</Link></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li>Cart</li>
            <button className="login-btn" onClick={() => {
              btnName === "Login" ? setBtnName("LogOut") : setBtnName("Login")}}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;