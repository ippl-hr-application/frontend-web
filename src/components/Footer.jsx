import CopyRight from "./CopyRight"
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import logoMeraih from "../assets/Logo Meraih.svg"
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { IoArrowUp } from "react-icons/io5";

const Footer = ({ linkRef, goto }) => {

   const [showScrollToTop, setShowScrollToTop] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         const scrollY = window.scrollY;
         const windowHeight = window.innerHeight;
         const documentHeight = Math.max(
            document.body.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.clientHeight,
            document.documentElement.scrollHeight,
            document.documentElement.offsetHeight
         );

         // Tentukan batasan scroll di mana button harus muncul
         const threshold = documentHeight - windowHeight - 2300;

         // Tampilkan atau sembunyikan button berdasarkan batasan scroll
         setShowScrollToTop(scrollY > threshold);
      };

      // Tambahkan event listener untuk mendengarkan perubahan posisi scroll
      window.addEventListener("scroll", handleScroll);

      // Membersihkan event listener ketika komponen di-unmount
      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);

   const handleScrollToTop = () => {
      // Menggunakan ref dari Navbar untuk kembali ke atas
      goto(linkRef.current);
   };


   return (
      <div className="container mx-auto">
         <div className="px-4 pt-7 bg-blue-100 bg-opacity-60 flex flex-col gap-6 lg:flex lg:flex-row lg:justify-center lg:items-end">
            {/* section samping kiri */}
            <div className="flex flex-col gap-6 lg:w-2/3 ">
               {/* logo */}
               <img
                  src={logoMeraih}
                  alt="LogoMeraih"
                  className="w-20 h-20 cursor-pointer"
                  onClick={() => goto(linkRef.current)}
               />
               {/* deskripsi */}
               <p className="text-xs font-light tracking-wide leading-6 lg:text-base lg:w-2/3">
                  Kami membuat manajemen tim global menjadi sangat mudah, membebaskan bisnis dari kompleksitas. Dengan Meraih, Anda dapat dengan mudah mempekerjakan kontraktor dan karyawan di seluruh dunia tanpa perlu membuka badan hukum tambahan. Kami membantu Anda merampingkan pengelolaan HR untuk tim global Anda dan mengonsolidasikan proses penggajian.
               </p>
            </div>
            {/* section samping kanan */}
            <div className="flex flex-col gap-8">
               {/* menu footer */}
               <ul className="flex flex-row gap-4 lg:gap-8">
                  <li className=" hover:text-blue-700 cursor-pointer lg:text-lg">Fitur</li>
                  <li className=" hover:text-blue-700 cursor-pointer lg:text-lg">Layanan</li>
                  <li className=" hover:text-blue-700 cursor-pointer lg:text-lg">Bantuan</li>
               </ul>
               <div className="h-px w-full bg-slate-600 lg:mb-4"></div>
               {/* hubungi kami */}
               <ul className="flex flex-row gap-5">
                  <li><FaInstagram className="w-6 h-6 text-blue-700 hover:bg-blue-700 hover:rounded-full hover:text-white duration-300 lg:w-8 lg:h-8" /></li>
                  <li><FaFacebook className="w-6 h-6 text-blue-700 hover:bg-blue-700 hover:rounded-full hover:text-white duration-300 lg:w-8 lg:h-8" /></li>
                  <li>< BsTwitterX className="w-6 h-6 text-blue-700 hover:bg-blue-700 hover:rounded-full hover:text-white duration-300 lg:w-8 lg:h-8" /></li>
                  <li><FaTiktok className="w-6 h-6 text-blue-700 hover:bg-blue-700 hover:rounded-full hover:text-white duration-300 lg:w-8 lg:h-8" /></li>
                  <li><FaWhatsapp className="w-6 h-6 text-blue-700 hover:bg-blue-700 hover:rounded-full hover:text-white duration-300 lg:w-8 lg:h-8" /></li>
               </ul>
            </div>
            {/* Button Scroll to Top */}
            {showScrollToTop && (
               <button
                  className="fixed bottom-5 right-10 md:right-32 lg:right-10 bg-blue-500 text-white rounded-full p-2 cursor-pointer hover:bg-blue-700 animate-bounce"
                  onClick={handleScrollToTop}
               >
                  <IoArrowUp className="w-6 h-6" />
               </button>
            )}
            {/* copyright mode hp dan tablet */}
            <div className="flex justify-center lg:hidden">
               <CopyRight />
            </div>
         </div>
         {/* copyright mode > labtop */}
         <div className="hidden lg:flex bg-blue-100 bg-opacity-60 lg:justify-center lg:items-center lg:flex-col lg:pt-10">
            <div className="h-px w-2/3 bg-slate-700"></div>
            <CopyRight />
         </div>
      </div >
   )
}

export default Footer

Footer.propTypes = {
   linkRef: PropTypes.object,
   goto: PropTypes.func
}