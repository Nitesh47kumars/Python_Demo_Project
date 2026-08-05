import axios from "axios";

const api = axios.create({
  baseURL: "https://python-demo-project.onrender.com/",
});

export const getProducts = () => api.get("/products/");

export const getProduct = (id) => api.get(`/products/${id}`);

export const createProduct = (product) => api.post("/products/", product);

export const updateProduct = (id, product) =>
  api.put(`/products/${id}`, product);

export const deleteProduct = (id) => api.delete(`/products/${id}`);

export const getAnalytics = () => api.get("/analytics/");

export default api;