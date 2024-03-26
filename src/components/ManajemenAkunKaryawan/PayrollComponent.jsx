import PropTypes from "prop-types"

const PayrollComponent = ({ onPrevious, onNext }) => {
   const handleSubmit = (e) => {
      e.preventDefault();
      // Validasi dan simpan data gaji
      onNext();
   };

   return (
      <div className="mt-4 mx-4 flex flex-col justify-center items-center">
         <div className="w-full flex flex-col mt-4 gap-5 lg:w-3/4">
            {/* heading */}
            <div className="flex flex-col gap-1">
               <h1 className="font-semibold text-2xl text-black">Salary</h1>
               <p className="font-light text-base text-slate-400">Fill all employee salary information data</p>
            </div>
            {/* Form data */}
            <form action="" onSubmit={handleSubmit} className="flex flex-col gap-8 mt-2">
               {/* Basic salary */}
               <div className="flex flex-col gap-4 lg:w-1/2">
                  <span className="after:content-['*'] after:ml-1 after:text-pink-500 font-semibold">
                     Basic salary
                  </span>
                  <label className="input input-bordered flex items-center gap-2">
                     <div className="bg-gray-300 p-3 -ml-4 rounded-s-md font-medium">Rp</div>
                     <input
                        id="salary"
                        type="number"
                        className="grow placeholder:text-black"
                        placeholder="0"
                     />
                  </label>
               </div>
               {/* Salary type */}
               <label htmlFor="Salary type" className="flex flex-col gap-4 lg:gap-4 lg:w-1/2">
                  <span className="after:content-['*'] after:ml-1 after:text-pink-500 font-semibold">
                     Salary type
                  </span>
                  <div className="flex flex-row gap-7">
                     <div className="flex items-center gap-3">
                        <input id="Monthly" type="radio" name="radio-1" className="radio" checked />
                        <label htmlFor="Monthly">Monthly</label>
                     </div>
                     <div className="flex items-center gap-3">
                        <input id="Daily" type="radio" name="radio-1" className="radio" />
                        <label htmlFor="Daily">Daily</label>
                     </div>
                  </div>
               </label>

               <div className="h-px w-full bg-slate-400"></div>

               {/* Bank information heading */}
               <div className="flex flex-col gap-1">
                  <h1 className="font-semibold text-2xl text-black">Bank information</h1>
                  <p className="font-light text-base text-slate-400">Fill all employee bank information data</p>
               </div>
               {/* Bank name */}
               <label htmlFor="Bank name" className="flex flex-col gap-2 w-full lg:w-1/2">
                  <span className="font-semibold">
                     Bank name
                  </span>
                  <input
                     type="text"
                     id="Bank name"
                     required
                     placeholder="Bank name"
                     className="border-2 border-slate-300 py-2 px-4 rounded-md placeholder:text-slate-300"
                  />
               </label>
               {/* Bank account */}
               <label htmlFor="Bank account" className="flex flex-col gap-2 w-full lg:w-1/2">
                  <span className="font-semibold">
                     Bank account
                  </span>
                  <input
                     type="text"
                     id="Bank account"
                     required
                     placeholder="Bank account"
                     className="border-2 border-slate-300 py-2 px-4 rounded-md placeholder:text-slate-300"
                  />
               </label>

               {/* button cancel/next */}
               <div className="flex gap-6 justify-end items-center mt-4">
                  <button type="button" onClick={onPrevious}>Cancel</button>
                  <button type="submit" className="bg-slate-200 py-3 px-8 rounded-md">Next</button>
               </div>
            </form>
         </div>
      </div>
   )
}

export default PayrollComponent;

PayrollComponent.propTypes = {
   onNext: PropTypes.func,
   onPrevious: PropTypes.func
}