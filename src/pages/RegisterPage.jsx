import { PiWhatsappLogoThin } from "react-icons/pi";
import { MdOutlineCorporateFare } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import LogoMeraih from "../assets/Logo Meraih.svg"
import GambarLogin from "../assets/GambarLogin.png"
import { useState } from "react";
import CopyRight from "../components/CopyRight";
import { Link } from "react-router-dom";
import ButtonBackToHome from "../components/ButtonBackToHome";

const RegisterPage = () => {
   const [nama, setNama] = useState("");
   const [Perusahaan, setPerusahaan] = useState("");
   const [hp, setHp] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [errorMessageNama, setErrorMessageNama] = useState("");
   const [errorMessagePerusahaan, setErrorMessagePerusahaan] = useState("");
   const [errorMessageHp, setErrorMessageHp] = useState("");
   const [errorMessageEmail, setErrorMessageEmail] = useState("");
   const [errorMessagePass, setErrorMessagePass] = useState("");

   const [showPassword, setShowPassword] = useState(false);

   const handleRegis = (event) => {
      event.preventDefault();

      if (!nama) {
         setErrorMessageNama(<p className="text-red-600 mt-2 ml-2">Silahkan isi nama anda!</p>);
         return;
      }
      if (!Perusahaan) {
         setErrorMessagePerusahaan(<p className="text-red-600 mt-2 ml-2">Silahkan isi nama instansi anda!</p>);
         return;
      }
      if (!hp) {
         setErrorMessageHp(<p className="text-red-600 mt-2 ml-2">Silahkan isi nomor hp anda!</p>);
         return;
      }
      if (!email) {
         setErrorMessageEmail(<p className="text-red-600 mt-2 ml-2">Silahkan isi email anda!</p>);
         return;
      }
      if (!password) {
         setErrorMessagePass(<p className="text-red-600 mt-2 ml-2">Silahkan isi password anda!</p>);
         return;
      }

      // fungsi redux jika sudah ada API
      // dispatch(login(email, password, navigate)); 
   }

   const togglePassword = () => {
      setShowPassword(!showPassword);
   };

   return (
      <>
         <nav className="mx-4 mt-2">
            <Link to={'/'}>
               <img src={LogoMeraih} alt="LogoMeraih" className="w-20 p-2" />
            </Link>
         </nav>

         <div className="w-full">
            <div className="px-4 py-2 lg:flex">
               {/* button back to home */}
               <div className="flex lg:hidden mb-4">
                  <ButtonBackToHome />
               </div>
               {/* card form Regis */}
               <div className="border-2 rounded-2xl py-8 px-14 shadow-lg border-slate-300 bg-blue-100 lg:bg-transparent lg:w-1/2 lg:border-none lg:shadow-none">
                  {/* button back to home */}
                  <div className="hidden lg:flex mb-4">
                     <ButtonBackToHome />
                  </div>
                  {/* heading */}
                  <div className="mb-6 flex flex-col justify-center text-center items-center lg:items-start">
                     <h1 className="text-3xl font-bold mb-1 text-blue-700 lg:text-4xl">Sign Up</h1>
                     <p className="text-sm font-light lg:text-base">Silahkan masukkan detail Register anda untuk masuk</p>
                     <img src={GambarLogin} alt="GambarLogin" className="h-60 lg:hidden" />
                  </div>
                  {/* form Regis */}
                  <form action="submit" onSubmit={handleRegis} className="flex flex-col gap-4">
                     {/* Nama Lengkap */}
                     <div className="relative">
                        <label htmlFor="nama lengkap" className="w-full font-medium flex flex-col-reverse gap-2">
                           <input
                              id="nama lengkap"
                              type="text"
                              name="nama lengkap"
                              className="border-2 py-2 px-4 rounded-3xl shadow-md lg:px-6 lg:py-3 lg:border-[1px] placeholder:font-light placeholder:text-sm"
                              placeholder="Nama"
                              value={nama}
                              onChange={(event) => {
                                 setNama(event.target.value);
                                 setErrorMessageNama("");
                              }}
                           />
                           Nama Lengkap
                        </label>
                        {errorMessageNama && <p className="text-color-warn text-xs mb-2">{errorMessageNama}</p>}
                        <AiOutlineUser className="absolute top-10 right-4 w-6 h-6 text-slate-400 lg:top-11" />
                     </div>
                     {/* Nama Perusahaan */}
                     <div className="relative">
                        <label htmlFor="perusahaan" className="w-full font-medium flex flex-col-reverse gap-2">
                           <input
                              id="perusahaan"
                              type="text"
                              name="perusahaan"
                              className="border-2 py-2 px-4 rounded-3xl shadow-md lg:px-6 lg:py-3 lg:border-[1px] placeholder:font-light placeholder:text-sm"
                              placeholder="Nama instansi tempat kerjamu"
                              value={Perusahaan}
                              onChange={(event) => {
                                 setPerusahaan(event.target.value);
                                 setErrorMessagePerusahaan("");
                              }}
                           />
                           Nama Perusahaan
                        </label>
                        {errorMessagePerusahaan && <p className="text-color-warn text-xs mb-2">{errorMessagePerusahaan}</p>}
                        <MdOutlineCorporateFare className="absolute top-10 right-4 w-6 h-6 text-slate-400 lg:top-11" />
                     </div>
                     {/* Nomor Handphone */}
                     <div className="relative">
                        <label htmlFor="hp" className="w-full font-medium flex flex-col-reverse gap-2">
                           <input
                              id="hp"
                              type="telepon"
                              name="hp"
                              className="border-2 py-2 px-4 rounded-3xl shadow-md lg:px-6 lg:py-3 lg:border-[1px] placeholder:font-light placeholder:text-sm"
                              placeholder="+62 xxxx xxxx xxxx"
                              value={hp}
                              onChange={(event) => {
                                 setHp(event.target.value);
                                 setErrorMessageHp("");
                              }}
                           />
                           Nomor Handphone
                        </label>
                        {errorMessageHp && <p className="text-color-warn text-xs mb-2">{errorMessageHp}</p>}
                        <PiWhatsappLogoThin className="absolute top-10 right-4 w-6 h-6 text-slate-400 lg:top-11" />
                     </div>
                     {/* Email Kerja */}
                     <div className="relative">
                        <label htmlFor="perusahaan" className="w-full font-medium flex flex-col-reverse gap-2">
                           <input
                              id="perusahaan"
                              type="email"
                              name="perusahaan"
                              className="border-2 py-2 px-4 rounded-3xl shadow-md lg:px-6 lg:py-3 lg:border-[1px] placeholder:font-light placeholder:text-sm"
                              placeholder="Masukkan email kerja anda"
                              value={email}
                              onChange={(event) => {
                                 setEmail(event.target.value);
                                 setErrorMessageEmail("");
                              }}
                           />
                           Email Kerja
                        </label>
                        {errorMessageEmail && <p className="text-color-warn text-xs mb-2">{errorMessageEmail}</p>}
                        <MdOutlineEmail className="absolute top-10 right-4 w-6 h-6 text-slate-400 lg:top-11" />
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
                     <div className="">
                        <button className="border-2 bg-blue-700 py-3 px-4 font-medium text-white rounded-3xl w-full mt-4 text-sm">Sign Up</button>
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
      </>
   )
}

export default RegisterPage