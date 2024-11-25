import React from "react";
import { Navigate } from "react-router-dom";
import Account from "./Account";
import { checkToken } from "../API/storage";

const Home = () => {
  if (!checkToken()) {
    return <Navigate to="/login" />;
  }

  return <Account />;
  return (
    <div>
      <img className="homeImage" />
      <div>Welcome to TBK! thsis is the home page</div>
    </div>
  );
};

export default Home;
