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
         <div className="w-full">
            <div className="bg-fixed" style={{ backgroundImage: `url(${GambarLogin})` }}>
               <div className="px-4 py-4 ">
                  <div className="border-2 rounded-2xl p-8 shadow-md backdrop-blur-md">
                     {/* heading */}
                     <div className="mb-6">
                        <h1 className="text-3xl font-bold mb-1">Sign In</h1>
                        <p className="text-sm">Silahkan masukkan detail login anda untuk masuk</p>
                     </div>
                     {/* form login */}
                     <form action="submit" onSubmit={handleLogin} className="flex flex-col gap-4">
                        <div className="relative ">
                           <label htmlFor="email" className=" w-2/3 font-medium flex flex-col-reverse gap-2">
                              <input
                                 id="email"
                                 type="email"
                                 name="email"
                                 className="border-2 py-2 px-4 rounded-3xl shadow-md"
                                 value={email}
                                 onChange={(event) => {
                                    setEmail(event.target.value);
                                    setErrorMessageEmail("");
                                 }}
                              />
                              Email Address
                           </label>
                           {errorMessageEmail && <p className="text-color-warn text-xs mb-2">{errorMessageEmail}</p>}
                           <BsPerson className="absolute top-10 right-40 w-6 h-6" />
                        </div>
                        <div className="relative mt-2">
                           <label htmlFor="password" className=" w-2/3 font-medium flex flex-col-reverse gap-2">
                              <input
                                 id="password"
                                 type={showPassword ? "text" : "password"}
                                 name="password"
                                 className="border-2 py-2 px-4 rounded-3xl shadow-md"
                                 value={password}
                                 onChange={(event) => {
                                    setPassword(event.target.value);
                                    // Hapus pesan kesalahan saat pengguna mulai mengetik ulang OKEEE
                                    setErrorMessagePass("");
                                 }}
                              />
                              Password
                              <button
                                 className="absolute top-11 right-40"
                                 type="button"
                                 aria-label="toggle password visibility"
                                 onClick={togglePassword}
                              >
                                 {showPassword ? (
                                    <BsEye className="border-none" />
                                 ) : (
                                    <BsEyeSlash className="border-none" />
                                 )}
                              </button>
                           </label>
                           {errorMessagePass && <p className="text-color-warn text-xs mb-2">{errorMessagePass}</p>}
                        </div>
                        <div className="flex justify-between mt-2">
                           <label htmlFor="remember me" className="flex items-center gap-2">
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
                           <Link to={"/verify-email"} className="text-blue-600 py-1 px-3 shadow-sm bg-white rounded-3xl">
                              Lupa Kata Sandi?
                           </Link>
                        </div>
                        <div className="flex flex-col gap-4 items-center">
                           <button className="border-none bg-blue-600 text-white px-4 py-3 rounded-3xl w-full font-medium">
                              Sign In
                           </button>
                           <div className="h-px w-1/2 bg-black mt-2"></div>
                           <p>Atau</p>
                           <div className="flex flex-col gap-3">
                              {/* tombol google */}
                              <button className="flex items-center gap-2 border-2 bg-white rounded-3xl py-2 px-4 shadow-md">
                                 <FcGoogle className="w-6 h-6" />
                                 <p>
                                    Masuk dengan Google
                                 </p>
                              </button>

                              {/* tombol id karyawan */}
                              <button className="flex items-center gap-2 border-2 bg-white rounded-3xl py-2 px-4 shadow-md">
                                 <FaAddressCard className="w-6 h-6" />
                                 <p>
                                    Masuk dengan ID Karyawan
                                 </p>
                              </button>

                              {/* tombol WA */}
                              <button className="flex items-center gap-2 border-2 bg-white rounded-3xl py-2 px-4 shadow-md">
                                 <ImWhatsapp className="w-6 h-6 bg-green-500 text-white rounded-full" />
                                 <p>
                                    Masuk dengan ID Karyawan
                                 </p>
                              </button>
                           </div>
                        </div>
                     </form>
                  </div>
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