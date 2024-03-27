

const PersonalComponent = () => {
   return (
      <div className="flex flex-col w-full">
         <div className="border-2 border-slate-200 rounded-2xl shadow-lg p-4 pb-10 mt-32  w-full mx-4 flex flex-col gap-4">
            {/* heading */}
            <div className="flex flex-col gap-3">
               <div className="text-primary">Employees / Helmi Kasep Pisan / General</div>
               <h1 className="text-blue-900 font-semibold text-4xl">Personal</h1>
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
                  <h1 className="text-blue-800 text-xl font-medium">Personal data</h1>
                  <p className="font-light text-slate-400 text-sm">Your email address is your identity on Meraih is used to log in.</p>
               </div>
               {/* list label nama*/}
               <div className="flex flex-col gap-6 w-full">
                  <div className="flex flex-row items-center justify-between">
                     <h1>Full name</h1>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                     <h1>Phone</h1>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                     <h1>Email</h1>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                     <h1>Place of birth</h1>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                     <h1>Birthdate</h1>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                     <h1>Gender</h1>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                     <h1>Martial status</h1>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                     <h1>Blood type</h1>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                     <h1>Religion</h1>
                  </div>
               </div>
               {/* list data label */}
               <div className="flex flex-col gap-6 w-full">
                  <div className="flex flex-row items-center justify-between">
                     <h1>Helmi S.kom</h1>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                     <h1>-</h1>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                     <h1>helmi222gmail.com</h1>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                     <h1>-</h1>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                     <h1>-</h1>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                     <h1>-</h1>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                     <h1>-</h1>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                     <h1>-</h1>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                     <h1>-</h1>
                  </div>
               </div>
            </div>

            <div className="h-px w-full bg-slate-300 mt-8"></div>

            {/* button edit identity */}
            <div className="flex flex-row justify-between">
               <div></div>
               <button className="border-2 border-green-500 px-2 py-1 rounded-lg w-[6%] text-sm hover:text-white hover:bg-green-500 duration-300">Edit</button>
            </div>
            {/* Menu identity & addres */}
            <div className="flex flex-row gap-8">
               {/* heading */}
               <div className="flex flex-col gap-3 w-full">
                  <h1 className="text-blue-800 text-xl font-medium">Identity & Addres</h1>
               </div>
               {/* list label nama*/}
               <div className="flex flex-col gap-6 w-full">
                  <div className="flex flex-row items-center justify-between">
                     <h1>ID type</h1>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                     <h1>ID number</h1>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                     <h1>ID expiration date</h1>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                     <h1>Postal code</h1>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                     <h1>Citizen ID address</h1>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                     <h1>Residential addresss</h1>
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
                  <div className="flex flex-row items-center justify-between">
                     <h1>Permanent</h1>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                     <h1>-</h1>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                     <h1>-</h1>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                     <h1>-</h1>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default PersonalComponent