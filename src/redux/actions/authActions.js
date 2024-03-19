import axios from "axios";
import { setToken, setUser } from "../reducers/authReducers";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const api_url = import.meta.env.VITE_REACT_API_URL;

export const login = (email, password, navigate) => async (dispatch) => {
   try {
      const respons = await axios.post(`${api_url}/auth/login`, {
         email,
         password,
      });
      const { data } = respons.data;
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

export const getMe =
   (navigate, navigatePathSuccess, navigatePathError) =>
      async (dispatch, getState) => {
         try {
            let { token } = getState().auth;
            const response = await axios.get(`${api_url}/auth/me`, {
               headers: {
                  Authorization: `Bearer ${token}`,
               },
            });
            const { data } = response.data;

            dispatch(setUser(data));
            if (navigatePathSuccess) navigate(navigatePathSuccess);
         } catch (error) {
            if (axios.isAxiosError(error)) {
               //if token is not valid
               if (error.response.status === 401) {
                  dispatch(logout());
               }
               // arahin ke halaman yang diizinkan
               if (navigatePathError) navigate(navigatePathError);
               return;
            }

            alert(error?.message);
         }
      };

export const logout = () => (dispatch) => {
   dispatch(setToken(null));
   dispatch(setUser(null));
};

export const register = (full_name, email, phone_number, company_name, industry, password, navigate) => async () => {
   try {
      const response = await axios.post(
         `${api_url}/auth/register`,
         {
            full_name,
            email,
            phone_number,
            company_name,
            industry,
            password
         }
      );

      // Check for successful registration
      if (response.status === 201) {
         alert("Registration Successful !");
         navigate("/login");
      } else {
         alert("Registration Failed!, Please try again!");
      }
   } catch (error) {
      if (axios.isAxiosError(error)) {
         alert(error?.response?.data?.message);
         return;
      }
      alert(error?.message);
   }
};