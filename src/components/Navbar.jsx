import { useEffect, useState } from "react";
import LogoMeraih from "../assets/Logo Meraih.svg"
import { NavLink, Link, useNavigate } from "react-router-dom"
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { getMe, logout } from "../redux/actions/authActions";
import { RiAccountCircleFill } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";
import { MdOutlineCorporateFare } from "react-icons/md";
import { IoIosHelpCircle } from "react-icons/io";
import { PiSignOutBold } from "react-icons/pi";

const Navbar = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const [openHamburger, setOpenHamburger] = useState(false);
   const [navbar, setNavbar] = useState(false);

   // ambil get me di redux
   const { user, token } = useSelector((state) => state.auth);
   // console.log(user)
   // get me with redux
   useEffect(() => {
      if (token) {
         dispatch(getMe(navigate, null, "/login"));
      }
   }, [dispatch, navigate, token]);

   //logout with redux
   const onLogout = () => {
      dispatch(logout());
      navigate("/login");
   };

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
               <div className={`${openHamburger ? "translate-y-0" : "-translate-y-[520px] ease-in-out"
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

                  <div className="h-px bg-slate-700 my-2"></div>

                  {/* user account */}
                  {user ? (
                     <div className="flex flex-col gap-4">
                        {/* name and email user  */}
                        <div className="flex items-center gap-2">
                           <RiAccountCircleFill className="w-8 h-8 text-primary" />
                           <div>
                              <p className="text-black font-medium text-base">{user?.user?.full_name}</p>
                              <p className="text-sm font-light text-slate-500">{user?.user?.email}</p>
                           </div>
                        </div>
                        {/* menu dropdown account */}
                        <div className="flex flex-col gap-4">
                           <div className="flex gap-2 items-center hover:text-primary group cursor-pointer">
                              <IoSettingsSharp className="w-5 h-5 text-slate-400 group-hover:text-primary" />
                              <p className="text-sm font-light">Account Settings</p>
                           </div>
                           <div className="flex gap-2 items-center hover:text-primary group cursor-pointer">
                              <MdOutlineCorporateFare className="w-5 h-5 text-slate-400 group-hover:text-primary" />
                              <p className="text-sm font-light">Company Settings</p>
                           </div>
                           <div className="flex gap-2 items-center hover:text-primary group cursor-pointer">
                              < IoIosHelpCircle className="w-5 h-5 text-slate-400 group-hover:text-primary" />
                              <p className="text-sm font-light">Help</p>
                           </div>
                           <button
                              onClick={onLogout}
                              className="flex gap-2 items-center hover:text-primary group">
                              <PiSignOutBold className="w-5 h-5 text-slate-400 group-hover:text-primary" />
                              <p className="text-sm font-light">Sign out</p>
                           </button>
                        </div>
                     </div>
                  ) : (
                     //sign in
                     <NavLink className="border-none px-4 py-2 bg-blue-700 rounded-2xl text-white mt-2 text-center"
                        to={'/login'}>
                        <button className="">Sing In</button>
                     </NavLink>
                  )}

                  <div className="h-px bg-slate-700 my-2"></div>

                  {/* coba gratis */}
                  <button className="border-none px-4 py-2 bg-blue-700 rounded-2xl text-white">
                     Coba Gratis
                  </button>
               </div>
            </div>

            {/* Navmenu Website */}
            <div className="hidden container mx-auto lg:flex justify-between lg:items-center">
               <div className="hidden lg:flex lg:items-center lg:gap-14">
                  {/* logo */}
                  <Link to={'/'} className="">
                     <img
                        src={LogoMeraih}
                        alt="LogoMeraih"
                        className="w-14 h-14 lg:w-20 lg:h-20"
                     />
                  </Link>
                  {/* navmenu */}
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
               <>
                  {/* login dan coba gratis */}
                  <div className="hidden lg:flex items-center gap-7">
                     {/* user account */}
                     {user ? (
                        <div className="dropdown dropdown-end">
                           <div tabIndex={0} role="button">
                              <RiAccountCircleFill className="w-12 h-12 text-blue-600 hover:text-blue-700" />
                           </div>
                           <ul tabIndex={0} className="dropdown-content z-[1] menu px-4 py-6 shadow bg-base-100 rounded-box w-60 flex gap-5">
                              {/* name and email  */}
                              <div className="flex gap-2 items-center">
                                 <RiAccountCircleFill className="w-10 h-10 text-blue-600" />
                                 <div className="flex flex-col gap-1">
                                    <div>
                                       <p className="text-black font-medium text-lg">{user?.user?.full_name}</p>
                                       <p className="text-slate-600 text-sm">{user?.user?.email}</p>
                                    </div>
                                 </div>
                              </div>
                              {/* menu dropdown account */}
                              <div className="flex flex-col gap-4">
                                 <div className="flex gap-2 items-center hover:text-primary group cursor-pointer">
                                    <IoSettingsSharp className="w-6 h-6 text-slate-400 group-hover:text-primary" />
                                    <p>Account Settings</p>
                                 </div>
                                 <div className="flex gap-2 items-center hover:text-primary group cursor-pointer">
                                    <MdOutlineCorporateFare className="w-6 h-6 text-slate-400 group-hover:text-primary" />
                                    <p>Company Settings</p>
                                 </div>
                                 <div className="flex gap-2 items-center hover:text-primary group cursor-pointer">
                                    < IoIosHelpCircle className="w-6 h-6 text-slate-400 group-hover:text-primary" />
                                    <p>Help</p>
                                 </div>
                                 <button
                                    onClick={onLogout}
                                    className="flex gap-2 items-center hover:text-primary group">
                                    <PiSignOutBold className="w-6 h-6 text-slate-400 group-hover:text-primary" />
                                    <p>Sign out</p>
                                 </button>
                              </div>
                           </ul>
                        </div>
                     ) : (
                        // sign in
                        <NavLink NavLink
                           type="button"
                           className="cursor-pointer text-blue-700 hover:text-blue-800 font-medium text-lg"
                           as={Link}
                           to="/login">
                           Sign In
                        </NavLink>
                     )}
                     {/* coba gratis */}
                     <div className="w-px h-8 bg-black"></div>
                     <button className="border-none px-6 py-2 bg-blue-700 hover:bg-blue-800 duration-300 rounded-2xl text-white font-medium text-lg">
                        Coba Gratis
                     </button>
                  </div>
               </>

            </div>
         </div>
      </nav >
   )
}

export default Navbar