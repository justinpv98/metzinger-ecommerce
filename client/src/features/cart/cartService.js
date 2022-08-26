import axios from "axios";
const API_URL =  `${process.env.REACT_APP_BASE_URL}/api/carts`;

export const createCart = async (userId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };


  const response = await axios.post(`${API_URL}/`, { userId }, config);

  if (response.data) {
    localStorage.setItem("cart", JSON.stringify(response.data));
  }

  return response.data;
};

export const getAllCartItems = async (cartId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };


  const response = await axios.get(`${API_URL}/${cartId}`,  config);

  return response.data;
};

export const addCartItem = async (itemData, token) => {


  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };


  const response = await axios.post(
    `${API_URL}/items`,
    itemData,
    config
  );


  return response.data;
};

export const removeAllCartItems = async (cartId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(`${API_URL}/${cartId}`,  config);

  return response.data;
};

export const removeCartItem = async (cartItemId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(
    `${API_URL}/items/${cartItemId}`,
    config
  );

  return response.data;
};

export const updateCartItem = async (cartItemData, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };


    const response = await axios.put(
      `${API_URL}/items/${cartItemData.id}`,
      {id: cartItemData.id, quantity: cartItemData.quantity },
      config
    );
  
    return response.data;
  };

const cartService = {
  createCart,
  getAllCartItems,
  addCartItem,
  removeAllCartItems,
  removeCartItem,
  updateCartItem
};

export default cartService;
