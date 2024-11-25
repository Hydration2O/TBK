import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

const ProfileNavBar = () => {
  return (
    <div className="navBar">
      <div className="bankName">
        <img
          src="https://media1.giphy.com/avatars/Ozow/FusZsQuJoSz7.gif"
          className="bank-logo"
          alt="bank Logo"
        />
        <h1>TBK Total Bank of Kuwait</h1>
      </div>
      <nav>
        <NavLink to="/account">
          <button class="button"> Account</button>
        </NavLink>
        <NavLink to="/profile">
          <button class="button"> profile</button>
        </NavLink>
        <NavLink to="/transactions">
          <button class="button"> Transactions</button>
        </NavLink>
        <NavLink to="/userslist">
          <button class="button"> Users</button>
        </NavLink>
      </nav>
    </div>
  );
};

export default ProfileNavBar;
