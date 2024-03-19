import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
   const navigate = useNavigate();
   return (
      <div className="w-full absolute z-50 h-screen bg-black flex items-center justify-center">
         <div className="flex items-center flex-col">
            <h1 className="font-bold text-5xl text-white animate-fadeIn transition-all">
               {" "}
               <span className="text-red-500">404</span> | Not Found!
            </h1>

            <h2
               className="text-white flex items-center duration-300 hover:underline hover:scale-105 cursor-pointer mt-10"
               //   agar back ke halaman sebelumnya
               onClick={() => navigate(-1)}
            >
               {" "}
               <span className="mr-3">
                  <FaArrowLeft />
               </span>
               Back to Previous Page
            </h2>
         </div>
      </div>
   );
};

export default NotFoundPage