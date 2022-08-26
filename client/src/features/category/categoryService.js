import axios from "axios";
const API_URL = `${process.env.REACT_APP_BASE_URL}/api/categories`;

export const getCategory = async (category) => {
  const response = await axios.get(`${API_URL}/${category}`);

  return response.data;
};

const categoryService = {
  getCategory,
};

export default categoryService;
