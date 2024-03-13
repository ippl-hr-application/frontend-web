import axios from "axios";
import { setToken } from "../reducers/authReducers";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const api_url = import.meta.env.VITE_REACT_API_URL;

export const login = (email, password, navigate) => async (dispatch) => {
   try {
      const respons = await axios.post(`${api_url}/auth/login`, {
         email,
         password,
      });
      const data = respons.data;
      const { token } = data;

      // save token
      dispatch(setToken(token));
      // redirect to home
      // navigate("/");
      toast.success(respons?.data?.message);
      setTimeout(() => {
         navigate("/");
      }, 2000); // Ganti nilai 1000 dengan durasi yang diinginkan (dalam milidetik)

   } catch (error) {
      if (axios.isAxiosError(error)) {
         toast.error(error?.response?.data?.message);
         return;
      }
      else {
         toast.error("Terjadi kesalahan pada server. Silakan coba lagi nanti.");
      }
   }
};


