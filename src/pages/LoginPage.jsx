import Navbar from "../components/Navbar"
import GambarLogin from "../assets/GambarLogin.png"
import { BsPerson } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaAddressCard } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";
import CopyRight from "../components/CopyRight";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ButtonBackToHome from "../components/ButtonBackToHome";

const LoginPage = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [rememberMe, setRememberMe] = useState(false);
   const [errorMessageEmail, setErrorMessageEmail] = useState("");
   const [errorMessagePass, setErrorMessagePass] = useState("");
   const [showPassword, setShowPassword] = useState(false);

   const handleLogin = (event) => {
      event.preventDefault();

      if (!email) {
         setErrorMessageEmail(<p className="text-red-600 mt-2 ml-2">Silahkan isi email anda!</p>);
         return;
      }

      if (!password) {
         setErrorMessagePass(<p className="text-red-600 mt-2 ml-2">Silahkan isi password anda!</p>);
         return;
      }

      // Jika Remember Me dicentang, simpan email dan password di localStorage!!
      if (rememberMe) {
         localStorage.setItem("rememberedEmail", email);
         localStorage.setItem("rememberedPassword", password);
      } else {
         // Jika Remember Me tidak dicentang, hapus data dari localStorage
         localStorage.removeItem("rememberedEmail");
         localStorage.removeItem("rememberedPassword");
      }

      // fungsi redux jika sudah ada API
      // dispatch(login(email, password, navigate)); 
   }

   const togglePassword = () => {
      setShowPassword(!showPassword);
   };

   const handleRememberMe = () => {
      setRememberMe(!rememberMe);
   };

   useEffect(() => {
      const rememberedEmail = localStorage.getItem("rememberedEmail");
      const rememberedPassword = localStorage.getItem("rememberedPassword");

      if (rememberedEmail && rememberedPassword) {
         setEmail(rememberedEmail);
         setPassword(rememberedPassword);
         setRememberMe(true);
      }
   }, []);

   return (
      <div>
         <Navbar />
         <div className="w-full pt-16 lg:pt-24">
            <div className="px-4 py-4 lg:flex mt-2">
               {/* button back to HomePage mode mobile*/}
               <div className="flex lg:hidden">
                  <ButtonBackToHome />
               </div>
               {/* card form login */}
               <div className="border-2 mt-2 rounded-2xl py-8 px-14 shadow-lg border-slate-300 bg-blue-100 lg:flex lg:flex-col lg:gap-4 lg:bg-transparent lg:w-1/2 lg:border-none lg:shadow-none">
                  {/* button back to HomePage mode web*/}
                  <div className="hidden lg:flex">
                     <ButtonBackToHome />
                  </div>
                  {/* heading */}
                  <div className="mb-6 flex flex-col justify-center items-center lg:items-start">
                     <h1 className="text-3xl font-bold mb-1 text-blue-700 lg:text-4xl">Sign In</h1>
                     <p className="text-sm font-light lg:text-base">Silahkan masukkan detail login anda untuk masuk</p>
                     <img src={GambarLogin} alt="GambarLogin" className="h-60 lg:hidden" />
                  </div>
                  {/* form login */}
                  <form action="submit" onSubmit={handleLogin} className="flex flex-col gap-4">
                     {/* email */}
                     <div className="relative">
                        <label htmlFor="email" className="w-full font-medium flex flex-col-reverse gap-2">
                           <input
                              id="email"
                              type="email"
                              name="email"
                              className="border-2 py-2 px-4 rounded-3xl shadow-md lg:px-6 lg:py-3 lg:border-[1px]"
                              value={email}
                              onChange={(event) => {
                                 setEmail(event.target.value);
                                 setErrorMessageEmail("");
                              }}
                           />
                           Email Address
                        </label>
                        {errorMessageEmail && <p className="text-color-warn text-xs mb-2">{errorMessageEmail}</p>}
                        <BsPerson className="absolute top-10 right-4 w-6 h-6 text-slate-400 lg:top-11" />
                     </div>
                     {/* password */}
                     <div className="relative mt-2">
                        <label htmlFor="password" className="w-full font-medium flex flex-col-reverse gap-2">
                           <input
                              id="password"
                              type={showPassword ? "text" : "password"}
                              name="password"
                              className="border-2 py-2 px-4 rounded-3xl shadow-md lg:px-6 lg:py-3 lg:border-[1px]"
                              value={password}
                              onChange={(event) => {
                                 setPassword(event.target.value);
                                 // Hapus pesan kesalahan saat pengguna mulai mengetik ulang OKEEE
                                 setErrorMessagePass("");
                              }}
                           />
                           Password
                           <button
                              className="absolute top-11 right-4 lg:top-12 lg:right-5"
                              type="button"
                              aria-label="toggle password visibility"
                              onClick={togglePassword}
                           >
                              {showPassword ? (
                                 <BsEye className="border-none text-slate-500 lg:w-5 lg:h-5" />
                              ) : (
                                 <BsEyeSlash className="border-none text-slate-500 lg:w-5 lg:h-5" />
                              )}
                           </button>
                        </label>
                        {errorMessagePass && <p className="text-color-warn text-xs mb-2">{errorMessagePass}</p>}
                     </div>
                     {/* ingat akun dan lupa sandi */}
                     <div className="flex flex-col gap-2 mt-2 ">
                        <div className="flex justify-between">
                           <label htmlFor="remember me" className="flex items-center gap-2 text-sm font-light">
                              <input
                                 id="remember me"
                                 type="checkbox"
                                 name="checkbox"
                                 className="w-4 h-4 accent-blue-800"
                                 checked={rememberMe}
                                 onChange={handleRememberMe}
                              />
                              Buat saya tetap masuk
                           </label>
                           <Link to={"/verify-email"} className="text-red-700 py-1 px-3 shadow-sm  rounded-3xl text-sm font-light hover:text-red-900">
                              Lupa Kata Sandi ?
                           </Link>
                        </div>
                        <Link to={'/register'} className="font-light text-sm text-blue-700 hover:text-blue-900">
                           Buat Akun
                        </Link>
                     </div>
                     {/* sign in dan  login dengan yg lain */}
                     <div className="flex flex-col gap-4 items-center">
                        <button className="border-none bg-blue-700 text-white px-4 py-3 rounded-3xl w-full font-medium lg:font-semibold lg:py-4 lg:shadow-lg lg:rounded-full lg:hover:bg-blue-800 duration-200">
                           Sign In
                        </button>
                        <div className="h-px w-1/2 bg-black mt-2"></div>
                        <p>Atau</p>
                        <div className="flex flex-col gap-3 lg:gap-6">
                           {/* tombol google */}
                           <button className="flex items-center gap-2 border-2 bg-white rounded-3xl py-2 px-4 shadow-md lg:border-1 lg:py-3 lg:px-10 lg:rounded-full lg:hover:bg-gradient-to-r from-red-500 via-orange-300 to-green-500 ">
                              <FcGoogle className="w-6 h-6 lg:w-8 lg:h-8" />
                              <p>
                                 Masuk dengan Google
                              </p>
                           </button>

                           {/* tombol id karyawan */}
                           <button className="flex items-center gap-2 border-2 bg-white rounded-3xl py-2 px-4 shadow-md lg:border-1 lg:py-3 lg:px-10 lg:rounded-full lg:hover:bg-black duration-300 lg:hover:text-white">
                              <FaAddressCard className="w-6 h-6 lg:w-8 lg:h-8" />
                              <p>
                                 Masuk dengan ID Karyawan
                              </p>
                           </button>

                           {/* tombol WA */}
                           <button className="flex items-center gap-2 border-2 bg-white rounded-3xl py-2 px-4 shadow-md lg:border-1 lg:py-3 lg:px-10 lg:rounded-full lg:hover:bg-green-500 lg:hover:text-white group duration-300">
                              <ImWhatsapp className="w-6 h-6 lg:w-8 lg:h-8 bg-green-500 text-white rounded-full lg:group-hover:text-green-500 lg:group-hover:bg-white" />
                              <p>
                                 Masuk dengan ID Karyawan
                              </p>
                           </button>
                        </div>
                     </div>
                  </form>
               </div>
               {/* card foto mode web */}
               <div className="hidden lg:flex bg-violet-100 p-20">
                  <img src={GambarLogin} alt="GambarLoginWeb" />
               </div>
            </div>

            {/* copyright */}
            <div className="">
               <CopyRight />
            </div>
         </div>
      </div>
   )
}

export default LoginPage