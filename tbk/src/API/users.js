import instance from "./index";
import axios from "axios";

async function Register(data) {
  const response = await instance.post(`/mini-project/api/auth/register`, data);
  return response;
}

async function Login(data) {
  const response = await instance.post(`/mini-project/api/auth/login`, data);
  return response;
}

export { Register, Login };
