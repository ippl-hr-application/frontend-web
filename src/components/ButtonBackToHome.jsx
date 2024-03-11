import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const ButtonBackToHome = () => {
   return (
      <div>
         <Link to={"/"}>
            <div className="items-center gap-2 flex hover:scale-105 hover:text-blue-800 duration-300">
               <IoMdArrowRoundBack className="w-6 h-6 text-primary" />
               <p className="text-primary font-light text-sm">Kembali ke halaman home</p>
            </div>
         </Link>
      </div>
   )
}

export default ButtonBackToHome