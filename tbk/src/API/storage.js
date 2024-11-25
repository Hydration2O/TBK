import { jwtDecode } from "jwt-decode";

const getToken = () => localStorage.getItem("token");
const checkToken = () => {
  const token = getToken();
  if (token) {
    const decode = jwtDecode(token);
    const cureentTime = Date.now() / 1000;
    if (decode.exp < cureentTime) {
      //   deleteToken();
      return false;
    }
    return true;
  }
  return false;
};
export { checkToken };
