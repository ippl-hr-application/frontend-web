import { useState } from "react";
import GambarLupaPassword from "../assets/GambarLupaPassword.png"
import LogoMeraih from "../assets/Logo Meraih.svg"
import CopyRight from "../components/CopyRight"
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const LupaPassword = () => {
   const [email, setEmail] = useState("");
   const [errorMessageEmail, setErrorMessageEmail] = useState("");

   const handleRiset = (event) => {
      event.preventDefault();

      if (!email) {
         setErrorMessageEmail(<p className="text-red-600 mt-1 ml-2">Silahkan isi email anda!</p>);
         return;
      }
   }
   return (
      <div className="container mx-auto">
         {/* heading */}
         <div className="flex flex-col justify-center text-center items-center gap-4 mt-3">
            <img src={LogoMeraih} alt="LogoMeraih" className="w-24" />
            <div className="flex flex-col gap-1 ">
               <h2 className="text-xl font-bold lg:text-2xl ">Lupa Kata Sandi</h2>
               <p className="text-xs font-light">Masukkan Email anda untuk ubah kata sandi</p>
            </div>
         </div>
         {/* Card Lupa password*/}
         <form onSubmit={handleRiset} className="flex flex-col border-2 p-10 mx-4 mt-4 rounded-2xl shadow-md lg:flex lg:flex-row lg:justify-center lg:gap-6 lg:border-none lg:shadow-none lg:items-center lg:mt-0 lg:py-2">
            <img src={GambarLupaPassword} alt="Gambar Lupa Password" />
            <div className="flex flex-col gap-4 relative lg:border-2 lg:shadow-lg lg:p-10 lg:rounded-3xl lg:justify-center lg:items-start lg:h-80 lg:w-1/3 lg:gap-8">
               <div className="flex flex-col gap-2 lg:w-full">
                  <label htmlFor="email">Email Address</label>
                  <input
                     type="email"
                     name="email"
                     id="email"
                     value={email}
                     placeholder="Email address"
                     className="placeholder:text-sm placeholder:font-light border-2 rounded-3xl py-2 px-4 lg:py-3"
                     onChange={(event) => {
                        setEmail(event.target.value);
                        setErrorMessageEmail("");
                     }}
                  />
                  <MdOutlineEmail className="absolute text-slate-400 right-5 top-10 w-6 h-6 lg:top-[121px] lg:right-14 " />
                  {errorMessageEmail && <p className="text-color-warn text-xs mb-2">{errorMessageEmail}</p>}
               </div>
               {/* ini masih sementara sembari nunggu API */}
               <Link as={Link} to={"/verify-sandi"} className="border-2 py-2 px-4 rounded-3xl bg-blue-700 text-white w-full lg:py-3 lg:font-medium text-center">
                  <button >
                     Kirim
                  </button>
               </Link>
            </div>
         </form>

         {/* copyright */}
         <div>
            <CopyRight />
         </div>
      </div>
   )
}

export default LupaPassword