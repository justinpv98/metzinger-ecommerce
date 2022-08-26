import axios from "axios";
const API_URL = `${process.env.REACT_APP_BASE_URL}/api/orders`;

export const createOrder = async (orderData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(`${API_URL}/`, orderData, config);

  return response.data;
};

export const getOrders = async (userId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(`${API_URL}/${userId}`, config);

  return response.data;
};

const orderService = {
  createOrder,
  getOrders,
};

export default orderService;
