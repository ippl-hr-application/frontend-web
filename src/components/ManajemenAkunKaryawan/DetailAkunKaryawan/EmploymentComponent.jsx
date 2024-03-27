
const EmploymentComponent = () => {
   return (
      <div className="border-2 border-slate-200 rounded-2xl shadow-lg p-4 pb-10 mt-32 w-full mx-4 flex flex-col gap-4">
         {/* heading */}
         <div className="flex flex-col gap-3">
            <div className="text-primary">Employees / Helmi Kasep Pisan / General</div>
            <h1 className="text-blue-900 font-semibold text-4xl">Employment</h1>
         </div>

         <div className="h-px w-full bg-slate-300"></div>

         {/* button edit personal data*/}
         <div className="flex flex-row justify-between">
            <div></div>
            <button className="border-2 border-green-500 px-2 py-1 rounded-lg w-[6%] text-sm hover:text-white hover:bg-green-500 duration-300">Edit</button>
         </div>

         {/* Menu Personal data */}
         <div className="flex flex-row gap-8">
            {/* heading */}
            <div className="flex flex-col gap-3 w-full">
               <h1 className="text-blue-800 text-xl font-medium">Employment data</h1>
               <p className="font-light text-slate-400 text-sm">Your data information related to company</p>
            </div>
            {/* list label nama*/}
            <div className="flex flex-col gap-6 w-full">
               <div className="flex flex-row items-center justify-between">
                  <h1>Company name</h1>
               </div>
               <div className="flex flex-row items-center justify-between">
                  <h1>Employee ID</h1>
               </div>
               <div className="flex flex-row items-center justify-between">
                  <h1>Organization name</h1>
               </div>
               <div className="flex flex-row items-center justify-between">
                  <h1>Job Position</h1>
               </div>
               <div className="flex flex-row items-center justify-between">
                  <h1>Employment status</h1>
               </div>
               <div className="flex flex-row items-center justify-between">
                  <h1>Branch</h1>
               </div>
               <div className="flex flex-row items-center justify-between">
                  <h1>Join Date</h1>
               </div>
            </div>
            {/* list data label */}
            <div className="flex flex-col gap-6 w-full">
               <div className="flex flex-row items-center justify-between">
                  <h1>Institut Teknologi Kalimantan</h1>
               </div>
               <div className="flex flex-row items-center justify-between">
                  <h1>DEMO0000</h1>
               </div>
               <div className="flex flex-row items-center justify-between">
                  <h1>-</h1>
               </div>
               <div className="flex flex-row items-center justify-between">
                  <h1>-</h1>
               </div>
               <div className="flex flex-row items-center justify-between">
                  <h1>Permanent</h1>
               </div>
               <div className="flex flex-row items-center justify-between">
                  <h1>Pusat</h1>
               </div>
               <div className="flex flex-row items-center justify-between">
                  <h1>10 Nov 2010</h1>
               </div>
            </div>
         </div>
      </div>
   )
}

export default EmploymentComponent