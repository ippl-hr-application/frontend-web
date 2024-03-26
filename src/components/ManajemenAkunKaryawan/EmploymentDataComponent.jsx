import { Datepicker } from "flowbite-react";

const EmploymentDataComponent = () => {
   return (
      <div className="mt-4 mx-4 flex flex-col justify-center items-center">
         <div className="w-full lg:flex flex-col mt-4 gap-5 lg:w-3/4">
            {/* heading */}
            <div className="flex flex-col gap-1">
               <h1 className="font-semibold text-2xl text-black">Employment Data</h1>
               <p className="font-light text-base text-slate-400">Fill all employee data information related to company</p>
            </div>
            {/* form data */}
            <form action="" className="flex flex-col gap-4">
               {/* Employee ID */}
               <label htmlFor="Employee ID" className="flex flex-col gap-2 w-full lg:w-1/2">
                  <span className="after:content-['*'] after:ml-1 after:text-pink-500 font-semibold">
                     Employee ID
                  </span>
                  <input
                     type="text"
                     id="Employee ID"
                     required
                     placeholder="Employee ID"
                     className="border-2 border-slate-300 py-2 px-4 rounded-md placeholder:text-slate-300"
                  />
               </label>
               {/* Employment status */}
               <div className="flex flex-col gap-2 lg:w-1/2">
                  <span className="after:content-['*'] after:ml-1 after:text-pink-500 font-semibold">Employment status</span>
                  <select className="select select-bordered w-full max-w-xs lg:max-w-xl">
                     <option disabled selected>Select employment status</option>
                     <option>Full Time</option>
                     <option>Part Time</option>
                     <option>On Contract</option>
                     <option>Temporary</option>
                     <option>Trainee</option>
                  </select>
               </div>
               {/* Join date */}
               <div className="flex flex-col gap-2 lg:w-1/2">
                  <span className="font-semibold">Join date</span>
                  <Datepicker />
               </div>
               {/* Branch and Organization*/}
               <div className="flex flex-col gap-4 lg:felx lg:flex-row lg:gap-4 lg:w-full lg:mt-4">
                  {/* Branch */}
                  <div className="flex flex-col gap-2 lg:w-full">
                     <span className="font-semibold">Branch</span>
                     <select className="select select-bordered w-full max-w-xs lg:max-w-xl">
                        <option disabled selected>Select branch</option>
                        <option>Pusat</option>
                        <option>Cabang</option>
                     </select>
                  </div>
                  {/* Organization */}
                  <div className="flex flex-col gap-2 lg:w-full">
                     <span className="after:content-['*'] after:ml-1 after:text-pink-500 font-semibold">Organization</span>
                     <select className="select select-bordered w-full max-w-xs lg:max-w-xl">
                        <option disabled selected>Select Organization</option>
                        <option>Personal</option>
                        <option>Team</option>
                     </select>
                  </div>
               </div>
               {/* Job position */}
               <div className="flex flex-col gap-2 lg:w-1/2">
                  <span className="after:content-['*'] after:ml-1 after:text-pink-500 font-semibold">Job Position</span>
                  <select className="select select-bordered w-full max-w-xs lg:max-w-xl">
                     <option disabled selected>Select job position</option>
                     <option>Employee</option>
                     <option>CEO</option>
                     <option>Manager</option>
                     <option>Marketing</option>
                  </select>
               </div>

               {/* button cancel/next */}
               <div className="flex gap-6 justify-end items-center mt-4">
                  <button>Cancel</button>
                  <button className="bg-slate-200 py-3 px-8 rounded-md">Next</button>
               </div>
            </form>
         </div>
      </div>
   )
}

export default EmploymentDataComponent