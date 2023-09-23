import api from "./api";

export const findAll = async () => {
  return await api.get("/sanPham");
};

export const create = async (kategori) => {
  return await api.post("/sanPham", kategori);
};

export const update = async (kategori, id) => {
  return await api.put(`/sanPham/${id}`, kategori);
};

export const deleteById = async (id) => {
  return await api.delete(`/sanPham/${id}`);
};
export const findProductById = async (id) => {
  return await api.get(`/sanPham/${id}`);
};
