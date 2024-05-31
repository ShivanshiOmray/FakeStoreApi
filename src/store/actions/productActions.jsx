import { toast } from "react-toastify";
import { addProduct } from "../reducers/productSlice";

export const asyncAddProduct = () => (dispatch, getstate) => {
  try {
    const data = JSON.parse(localStorage.getItem("products")) || [];
    dispatch(addProduct(data));
  } catch (error) {
    toast.error(error);
  }
};
