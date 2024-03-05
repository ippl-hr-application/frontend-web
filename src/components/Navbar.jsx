import { useEffect, useState } from "react";
import LogoMeraih from "../assets/Logo Meraih.svg"
import { NavLink, Link } from "react-router-dom"
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
   const [openHamburger, setOpenHamburger] = useState(false);

   const handleHamburgerClick = (e) => {
      e.stopPropagation();
      setOpenHamburger(!openHamburger);
      // setSelectedIcon(null);
   };

   // logic ketika diklik diluar hamburgermenu maka otomatis tertutup dan begitu juga ketika klik pindah halaman
   useEffect(() => {
      const closeHamburgerMenu = () => {
         setOpenHamburger(false);
      };

      // Menambahkan event listener ke window
      window.addEventListener("click", closeHamburgerMenu);
   }, []);


   const Menus = [
      {
         name: "Fitur",
         link: "/fitur"
      },
      {
         name: "Tentang",
         link: "/tentang"
      },
      {
         name: "Harga",
         link: "/harga",
      }
   ]

   return (
      <nav className="w-full shadow-md">
         <div className="flex justify-between items-center mx-4 mt-2">
            {/* logo */}
            <Link to={'/'}>
               <img
                  src={LogoMeraih}
                  alt="LogoMeraih"
                  className="w-14 h-14 lg:w-20 lg:h-20"
               />
            </Link>
            {/* Navmenu Mobile */}
            <div className="flex lg:hidden">
               {/* Navmenu */}
               <button
                  className="text-blue-600"
                  onClick={handleHamburgerClick}
               >
                  {openHamburger ? (
                     <RxCross2 className="w-10 h-10" />
                  ) : (
                     <FiMenu className="w-10 h-10" />
                  )}
               </button>
               <div className={`${openHamburger ? "translate-y-0" : "-translate-y-[340px]"
                  } transition-transform duration-300 ease-in-out absolute top-4 right-4 mt-14 z-50 bg-gradient-to-r bg-white  border border-blue-600 px-5 py-6 rounded-md shadow-lg flex flex-col gap-2`}
               >
                  {Menus.map((item, index) => (
                     <NavLink
                        key={index}
                        to={item.link}
                        className=""
                     >
                        {item.name}
                     </NavLink>
                  ))}
                  <div className="h-px bg-slate-700 my-2">
                  </div>
                  <NavLink
                     type="button"
                     className="w-full cursor-pointer text-blue-600 hover:text-blue-800 font-medium"
                     as={Link}
                     to="/login">
                     Sign In
                  </NavLink>
                  <div className="border-none px-4 py-2 bg-blue-600 rounded-2xl text-white">
                     <button>
                        Coba Gratis
                     </button>
                  </div>
               </div>
            </div>

            {/* Navmenu Website */}
            <div className="hidden lg:flex lg:gap-32 lg:-ml-[500px]">
               {Menus.map((item, index) => (
                  <NavLink
                     key={index}
                     to={item.link}
                     className="text-lg hover:text-blue-600 hover:scale-105 duration-300 ease-in-out"
                  >
                     {item.name}
                  </NavLink>
               ))}
            </div>

            {/* login dan coba gratis */}
            <div className="hidden lg:flex items-center gap-7">
               <NavLink
                  type="button"
                  className="cursor-pointer text-blue-600 hover:text-blue-800 font-medium text-lg"
                  as={Link}
                  to="/login">
                  Sign In
               </NavLink>
               <div className="w-px h-8 bg-black"></div>
               <button className="border-none px-6 py-2 bg-blue-600 hover:bg-blue-700 duration-300 rounded-2xl text-white font-medium text-lg">
                  Coba Gratis
               </button>
            </div>
         </div>
      </nav>
   )
}

export default Navbar