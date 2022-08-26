import axios from "axios";
const API_URL = `${process.env.REACT_APP_BASE_URL}/api/products`;

export const getProduct = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);

  return response.data;
};

const productService = {
  getProduct,
};

export default productService;
