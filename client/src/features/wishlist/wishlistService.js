import axios from "axios";
const API_URL = "http://localhost:5000/api/wishlists";

export const createWishlist = async (userId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(`${API_URL}/`, { userId }, config);

  if (response.data) {
    localStorage.setItem("wishlist", JSON.stringify(response.data));
  }

  return response.data;
};

export const getAllWishlistItems = async (wishlistId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(`${API_URL}/${wishlistId}`, config);

  return response.data;
};

export const addWishlistItem = async (itemData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(`${API_URL}/items`, itemData, config);

  return response.data;
};

export const removeWishlistItem = async (wishlistItemId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(
    `${API_URL}/items/${wishlistItemId}`,
    config
  );

  return response.data;
};


const wishlistService = {
  createWishlist,
  getAllWishlistItems,
  addWishlistItem,
  removeWishlistItem
}

export default wishlistService;