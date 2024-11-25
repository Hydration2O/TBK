import instance from "./index";

async function AddNewUser(data) {
  const response = await instance.post(`/mini-project/api/auth/register`, data);
  return response;
}
// ----------------------------------------------
async function LogUserByName(data) {
  const response = await instance.post(`/mini-project/api/auth/login`, data);
  return response;
}

export { AddNewUser, LogUserByName };
