import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const PayrollComponent = () => {
   const [showPassword, setShowPassword] = useState(false);

   // Function to toggle password visibility
   const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
   }

   return (
      <div className="border-2 border-slate-200 rounded-2xl shadow-lg p-4 pb-10 mt-32 w-full mx-4 flex flex-col gap-4">
         {/* heading */}
         <div className="flex flex-col gap-3">
            <div className="text-primary">Employees / Helmi Kasep Pisan / General</div>
            <h1 className="text-blue-900 font-semibold text-4xl">Payroll Info</h1>
         </div>

         <div className="h-px w-full bg-slate-300"></div>

         {/* button edit salary*/}
         <div className="flex flex-row justify-between">
            <div></div>
            <button className="border-2 border-green-500 px-2 py-1 rounded-lg w-[6%] text-sm hover:text-white hover:bg-green-500 duration-300">Edit</button>
         </div>

         {/* Menu salary */}
         <div className="flex flex-row gap-8">
            {/* heading */}
            <div className="flex flex-col gap-3 w-full">
               <h1 className="text-blue-800 text-xl font-medium">Salary</h1>
               <p className="font-light text-slate-400 text-sm">Your salary information data</p>
            </div>
            {/* list label nama*/}
            <div className="flex flex-col gap-6 w-full">
               <div className="flex flex-row items-center justify-between">
                  <h1>Basic salary</h1>
               </div>
               <div className="flex flex-row items-center justify-between">
                  <h1>Salary type</h1>
               </div>
            </div>
            {/* list data label */}
            <div className="flex flex-col gap-6 w-full">
               <div className="flex flex-row items-center justify-between">
                  <h1>{showPassword ? "BangUdahBang69" : "********"}</h1>
                  <button onClick={togglePasswordVisibility}>
                     {showPassword ? (
                        <BsEye className="border-none text-slate-500 lg:w-5 lg:h-5" />
                     ) : (
                        <BsEyeSlash className="border-none text-slate-500 lg:w-5 lg:h-5" />
                     )}
                  </button>
               </div>
               <div className="flex flex-row items-center justify-between">
                  <h1>Monthly</h1>
               </div>
            </div>
         </div>

         <div className="h-px w-full bg-slate-300 mt-5"></div>

         {/* button edit bank information */}
         <div className="flex flex-row justify-between">
            <div></div>
            <button className="border-2 border-green-500 px-2 py-1 rounded-lg w-[6%] text-sm hover:text-white hover:bg-green-500 duration-300">Edit</button>
         </div>

         {/* Menu bank information */}
         <div className="flex flex-row gap-8">
            {/* heading */}
            <div className="flex flex-col gap-3 w-full">
               <h1 className="text-blue-800 text-xl font-medium">Bank Information</h1>
            </div>
            {/* list label nama*/}
            <div className="flex flex-col gap-6 w-full">
               <div className="flex flex-row items-center justify-between">
                  <h1>Bank name</h1>
               </div>
               <div className="flex flex-row items-center justify-between">
                  <h1>Bank account</h1>
               </div>
            </div>
            {/* list data label */}
            <div className="flex flex-col gap-6 w-full">
               <div className="flex flex-row items-center justify-between">
                  <h1>-</h1>
               </div>
               <div className="flex flex-row items-center justify-between">
                  <h1>-</h1>
               </div>
            </div>
         </div>
      </div>
   )
}

export default PayrollComponent