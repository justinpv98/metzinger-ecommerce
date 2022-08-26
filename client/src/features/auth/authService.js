import axios from "axios";
const API_URL = `${process.env.REACT_APP_BASE_URL}/api/auth`;

export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

export const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);

  if (response.data.message) {
    throw Error(response.data.message);
  } else {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

export const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("cart");
};

export const updatePersonalInfo = async (userData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };


  const response = await axios.put(`${API_URL}/update`, userData, config);

  return response.data;
};

const authService = {
  register,
  login,
  logout,
  updatePersonalInfo,
};

export default authService;
