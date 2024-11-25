import instance from "./index";
import axios from "axios";

const register = async (userInfo) => {
  const response = await instance.post(
    "/mini-project/api/auth/register",
    userInfo
  );
  localStorage.setItem("token", response.token);
  console.log("login data", response);
  return response;
};

async function Login(userInfo) {
  const response = await instance.post(
    "/mini-project/api/auth/login",
    userInfo
  );
  localStorage.setItem("token", response.token);
  console.log("login data", response);
  return response;
}

export { register, Login };
