import { useState } from "react";
import GambarLupaPassword from "../assets/GambarLupaPassword.png"
import LogoMeraih from "../assets/Logo Meraih.svg"
import CopyRight from "../components/CopyRight"
import { BsEye, BsEyeSlash } from "react-icons/bs";

const UbahSandi = () => {
   const [sandi, setSandi] = useState("");
   const [ulangiSandi, setUlangiSandi] = useState("");
   const [errorMessageSandi, setErrorMessageSandi] = useState("");
   const [errorMessageUlangiSandi, setErrorMessageUlangiSandi] = useState("");
   const [showPasswordBaru, setShowPasswordBaru] = useState(false);
   const [showPasswordUlangi, setShowPasswordUlangi] = useState(false);

   const handleRiset = (event) => {
      event.preventDefault();

      if (!sandi) {
         setErrorMessageSandi(<p className="text-red-600 mt-1 ml-2">Silahkan isi email anda!</p>);
         return;
      }
      if (!ulangiSandi) {
         setErrorMessageUlangiSandi(<p className="text-red-600 mt-1 ml-2">Ulangi password baru anda!</p>);
         return;
      }
   }

   const togglePasswordBaru = () => {
      setShowPasswordBaru(!showPasswordBaru);
   };

   const togglePasswordUlangi = () => {
      setShowPasswordUlangi(!showPasswordUlangi);
   };

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
            <div className="flex flex-col gap-4 relative lg:border-2 lg:shadow-lg lg:rounded-3xl lg:justify-center lg:items-start lg:py-9 lg:w-1/3 lg:gap-8 lg:px-8">
               {/* Sandi baru */}
               <div className="flex flex-col gap-2 lg:w-full">
                  <label htmlFor="sandi">Kata Sandi Baru</label>
                  <input
                     type={showPasswordBaru ? "text" : "password"}
                     name="sandi"
                     id="sandi"
                     value={sandi}
                     placeholder="Masukkan sandi baru"
                     className="placeholder:text-sm placeholder:font-light border-2 rounded-3xl py-2 px-4 lg:py-3"
                     onChange={(event) => {
                        setSandi(event.target.value);
                        setErrorMessageSandi("");
                     }}
                  />
                  <button
                     className="absolute top-11 right-4 lg:top-[84px] lg:right-12"
                     type="button"
                     aria-label="toggle password visibility"
                     onClick={togglePasswordBaru}
                  >
                     {showPasswordBaru ? (
                        <BsEye className="border-none text-slate-500 lg:w-5 lg:h-5" />
                     ) : (
                        <BsEyeSlash className="border-none text-slate-500 lg:w-5 lg:h-5" />
                     )}
                  </button>
                  {errorMessageSandi && <p className="text-color-warn text-xs mb-2">{errorMessageSandi}</p>}
               </div>
               {/* Ulangi Sandi */}
               <div className="flex flex-col gap-2 lg:w-full">
                  <label htmlFor="ulangiSandi">Ulangi Sandi barumu</label>
                  <input
                     type={showPasswordUlangi ? "text" : "password"}
                     name="ulangiSandi"
                     id="ulangiSandi"
                     value={ulangiSandi}
                     placeholder="Konfirmasi sandi baru"
                     className="placeholder:text-sm placeholder:font-light border-2 rounded-3xl py-2 px-4 lg:py-3"
                     onChange={(event) => {
                        setUlangiSandi(event.target.value);
                        setErrorMessageUlangiSandi("");
                     }}
                  />
                  <button
                     className="absolute top-[136px] right-4 lg:top-[196px] lg:right-12"
                     type="button"
                     aria-label="toggle password visibility"
                     onClick={togglePasswordUlangi}
                  >
                     {showPasswordUlangi ? (
                        <BsEye className="border-none text-slate-500 lg:w-5 lg:h-5" />
                     ) : (
                        <BsEyeSlash className="border-none text-slate-500 lg:w-5 lg:h-5" />
                     )}
                  </button>
                  {errorMessageUlangiSandi && <p className="text-color-warn text-xs mb-2">{errorMessageUlangiSandi}</p>}
               </div>
               {/* ini masih sementara sembari nunggu API */}
               {/* <Link as={Link} to={"/verify-sandi"}> */}
               <button className="border-2 mt-4 py-2 px-4 rounded-3xl bg-blue-700 text-white w-full lg:py-3 lg:font-medium">
                  Kirim
               </button>
               {/* </Link> */}
            </div>
         </form>

         {/* copyright */}
         <div>
            <CopyRight />
         </div>
      </div>
   )
}

export default UbahSandi