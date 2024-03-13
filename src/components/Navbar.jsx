import { useEffect, useState } from "react";
import LogoMeraih from "../assets/Logo Meraih.svg"
import { NavLink, Link } from "react-router-dom"
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
   const [openHamburger, setOpenHamburger] = useState(false);
   const [navbar, setNavbar] = useState(false);

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

   // logic navbar on scroll to blur background
   const changeBackground = () => {
      if (window.scrollY >= 80) {
         setNavbar(true);
      } else {
         setNavbar(false);
      }
   };
   window.addEventListener("scroll", changeBackground);

   return (
      <nav className={`w-full shadow-md fixed z-20 bg-white pb-2 ${navbar ? "bg-opacity-60 backdrop-blur-sm shadow-slate-500 shadow-sm duration-500" : ""}`}>
         <div className="flex justify-between items-center mx-4 mt-2">
            {/* logo */}
            <Link to={'/'} className="lg:hidden">
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
                  className="text-blue-700"
                  onClick={handleHamburgerClick}
               >
                  {openHamburger ? (
                     <RxCross2 className="w-10 h-10" />
                  ) : (
                     <FiMenu className="w-10 h-10" />
                  )}
               </button>
               <div className={`${openHamburger ? "translate-y-0" : "-translate-y-[380px] ease-in-out"
                  } transition-transform duration-300 ease-in-out absolute top-4 right-4 mt-14 z-50 bg-gradient-to-r bg-white  border border-blue-700 px-5 py-6 rounded-md shadow-lg flex flex-col gap-2`}
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
                     className="w-full cursor-pointer text-blue-700 hover:text-blue-800 font-medium"
                     as={Link}
                     to="/login">
                     Sign In
                  </NavLink>
                  <div className="border-none px-4 py-2 bg-blue-700 rounded-2xl text-white">
                     <button>
                        Coba Gratis
                     </button>
                  </div>
                  <NavLink className="border-none px-4 py-2 bg-blue-700 rounded-2xl text-white mt-2 text-center"
                     to={'/register'}>
                     <button className="">Sign Up</button>
                  </NavLink>
               </div>
            </div>

            <div className="hidden container mx-auto lg:flex justify-between">
               {/* Navmenu Website */}
               <div className="hidden lg:flex lg:items-center lg:gap-14">
                  <Link to={'/'} className="">
                     <img
                        src={LogoMeraih}
                        alt="LogoMeraih"
                        className="w-14 h-14 lg:w-20 lg:h-20"
                     />
                  </Link>
                  <div className="hidden lg:flex lg:gap-32">
                     {Menus.map((item, index) => (
                        <NavLink
                           key={index}
                           to={item.link}
                           // className="text-lg hover:text-blue-700 hover:scale-105 duration-300 ease-in-out"
                           className={({ isActive }) =>
                              isActive
                                 ? "border-0 bg-blue-600 text-white py-1 px-4 rounded-3xl flex items-center"
                                 : "text-lg hover:text-blue-700 hover:scale-105 duration-300 ease-in-out flex items-center"
                           }
                        >
                           {item.name}
                        </NavLink>
                     ))}
                  </div>
               </div>

               {/* login dan coba gratis */}
               <div className="hidden lg:flex items-center gap-7">
                  <NavLink
                     type="button"
                     className="cursor-pointer text-blue-700 hover:text-blue-800 font-medium text-lg"
                     as={Link}
                     to="/login">
                     Sign In
                  </NavLink>
                  <div className="w-px h-8 bg-black"></div>
                  <button className="border-none px-6 py-2 bg-blue-700 hover:bg-blue-800 duration-300 rounded-2xl text-white font-medium text-lg">
                     Coba Gratis
                  </button>
               </div>
            </div>
         </div>
      </nav>
   )
}

export default Navbar