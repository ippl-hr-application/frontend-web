import { Datepicker } from "flowbite-react";
import { Checkbox, Label } from "flowbite-react";

const PersonalDataComponent = () => {
   return (
      <div className="mx-4 mt-4 flex justify-center items-center">
         {/* form data */}
         <div className="mt-4 flex gap-5 flex-col w-3/4">
            {/* judul */}
            <div className="">
               <h1 className="text-black font-semibold text-2xl">Personal Data</h1>
               <p className="font-light text-base text-slate-400">Fill all employee personal basic information data</p>
            </div>

            <form action="" className="flex flex-col gap-4">
               {/* name */}
               <div className="flex gap-4 flex-row justify-between">
                  {/* first name */}
                  <label htmlFor="first-name" className="flex flex-col gap-2 w-full">
                     <span className="after:content-['*'] after:ml-1 after:text-pink-500 font-semibold">
                        Name
                     </span>
                     <input
                        type="text"
                        id="first-name"
                        required
                        placeholder="First name"
                        className="border-2 border-slate-300 py-2 px-4 rounded-md placeholder:text-slate-300"
                     />
                  </label>
                  {/* last name */}
                  <label htmlFor="last-name" className="flex flex-col gap-2 w-full">
                     <br />
                     <input
                        type="text"
                        id="last-name"
                        placeholder="Last name"
                        className="border-2 border-slate-300 py-2 px-4 rounded-md placeholder:text-slate-300"
                     />
                  </label>
               </div>
               {/* email */}
               <label htmlFor="email" className="flex flex-col gap-2 lg:w-1/2 lg:pr-2">
                  <span className="after:content-['*'] after:ml-1 after:text-pink-500 font-semibold">
                     email
                  </span>
                  <input
                     type="email"
                     id="email"
                     required
                     className="border-2 border-slate-300 py-2 px-4 rounded-md placeholder:text-slate-300"
                  />
                  <span className="text-sm font-light">This email is use for login</span>
               </label>
               {/* phone */}
               <label htmlFor="phone" className="flex flex-col gap-2 lg:w-1/2 lg:pr-2">
                  <span className="font-semibold">
                     Phone
                  </span>
                  <input
                     type="telepon"
                     id="phone"
                     required
                     placeholder="+62"
                     className="border-2 border-slate-300 py-2 px-4 rounded-md placeholder:text-slate-300"
                  />
               </label>

               {/* detail lainnya */}
               <div className="flex flex-col gap-4 lg:flex lg:flex-row lg:items-start">
                  {/* konten kiri */}
                  <div className="flex flex-col gap-4 lg:w-full">
                     {/* place of birth */}
                     <label htmlFor="place of birth" className="flex flex-col gap-2">
                        <span className="font-semibold">
                           Place of birth
                        </span>
                        <input
                           type="text"
                           id="place of birth"
                           required
                           className="border-2 border-slate-300 py-2 px-4 rounded-md placeholder:text-slate-300"
                        />
                     </label>
                     {/* gender */}
                     <label htmlFor="place of birth" className="flex flex-col gap-2 lg:gap-4">
                        <span className="font-semibold">
                           Gender
                        </span>
                        <div className="lg:flex lg:flex-row lg:gap-7">
                           <div className="flex items-center gap-3">
                              <input id="male" type="radio" name="radio-1" className="radio" checked />
                              <label htmlFor="male">Male</label>
                           </div>
                           <div className="flex items-center gap-3">
                              <input id="female" type="radio" name="radio-1" className="radio" />
                              <label htmlFor="female">Female</label>
                           </div>
                        </div>
                     </label>
                     {/* blood type */}
                     <div className="flex flex-col gap-2 lg:mt-3">
                        <span className="font-semibold">Blood type</span>
                        <select className="select select-bordered w-full max-w-xs lg:max-w-xl">
                           <option disabled selected>Select blood type</option>
                           <option>A</option>
                           <option>B</option>
                           <option>AB</option>
                           <option>O</option>
                        </select>
                     </div>
                  </div>
                  {/* konten kanan */}
                  <div className="flex flex-col gap-4 lg:w-full">
                     {/* birthdate */}
                     <div className="flex flex-col gap-2">
                        <span className="after:content-['*'] after:ml-1 after:text-pink-500 font-semibold">Birthdate</span>
                        <Datepicker />
                     </div>
                     {/* marital status */}
                     <div className="flex flex-col gap-2">
                        <span className="after:content-['*'] after:ml-1 after:text-pink-500 font-semibold">Marital Status</span>
                        <select className="select select-bordered w-full max-w-xs lg:max-w-xl">
                           <option disabled selected>Select status</option>
                           <option>Single</option>
                           <option>Married</option>
                           <option>Widowed</option>
                           <option>Divorced</option>
                        </select>
                     </div>
                     {/* religion */}
                     <div className="flex flex-col gap-2">
                        <span className="after:content-['*'] after:ml-1 after:text-pink-500 font-semibold">Religion</span>
                        <select className="select select-bordered w-full max-w-xs lg:max-w-xl">
                           <option disabled selected>Select religion</option>
                           <option>Islam</option>
                           <option>Katolik</option>
                           <option>Protestan</option>
                           <option>Hindu</option>
                           <option>Budha</option>
                           <option>Konghucu</option>
                        </select>
                     </div>
                  </div>
               </div>

               <div className="h-px w-full bg-slate-400 mt-4"></div>

               {/* Identity & addressv */}
               <div className="mt-4 flex flex-col gap-4">
                  {/* judul */}
                  <div>
                     <h1 className="text-black font-semibold text-2xl">Identity & address</h1>
                     <p className="font-light text-base text-slate-400">Employee identity address information</p>
                  </div>
                  {/* detail identitas */}
                  <div className="flex flex-col gap-4 lg:flex lg:flex-row lg:items-start">
                     {/* konten kiri */}
                     <div className="flex flex-col gap-4 lg:w-full">
                        {/* Identity type */}
                        <div className="flex flex-col gap-2">
                           <span className="after:content-['*'] after:ml-1 after:text-pink-500 font-semibold">Identity type</span>
                           <select className="select select-bordered w-full max-w-xs lg:max-w-xl">
                              <option disabled selected>Select type Identity</option>
                              <option>SIM</option>
                              <option>KTP</option>
                              <option>Name Card</option>
                           </select>
                        </div>
                        {/* Identity expiry date */}
                        <div className="flex flex-col gap-2">
                           <span className="font-semibold">Identity expiry date </span>
                           <Datepicker />
                           <div className="flex max-w-md flex-col gap-4" id="checkbox">
                              <div className="flex items-center gap-2">
                                 <Checkbox id="permanent" />
                                 <Label htmlFor="permanent">
                                    <p className="text-black font-light text-sm">Permanent</p>
                                 </Label>
                              </div>
                           </div>
                        </div>
                     </div>
                     {/* konten kanan */}
                     <div className="flex flex-col gap-4 lg:w-full lg:mt-1">
                        {/* Identity number */}
                        <label htmlFor="Identity number" className="flex flex-col gap-2">
                           <span className="font-semibold">Identity number</span>
                           <input
                              type="number"
                              id="Identity number"
                              required
                              placeholder="0"
                              className="border-2 border-slate-300 py-2 px-4 rounded-md placeholder:text-slate-300"
                           />
                        </label>
                        {/* Postal Code */}
                        <label htmlFor="Postal Code" className="flex flex-col gap-2">
                           <span className="font-semibold">Postal Code</span>
                           <input
                              type="number"
                              id="Postal Code"
                              required
                              placeholder="0"
                              className="border-2 border-slate-300 py-2 px-4 rounded-md placeholder:text-slate-300"
                           />
                        </label>
                     </div>
                  </div>
                  {/* Citizen ID address */}
                  <label htmlFor="address" className="flex flex-col gap-2">
                     <span className="font-semibold">Citizen ID address</span>
                     <textarea id="address" className="textarea textarea-bordered textarea-sm w-full lg:h-52" ></textarea>
                     <div className="flex max-w-md flex-col gap-4" id="checkbox">
                        <div className="flex items-center gap-2">
                           <Checkbox id="addressCheck" />
                           <Label htmlFor="addressCheck">
                              <p className="text-black font-light text-sm">Use as residential address</p>
                           </Label>
                        </div>
                     </div>
                  </label>
                  {/* Residential address */}
                  <label htmlFor="resident" className="flex flex-col gap-2">
                     <span className="font-semibold">Residential address</span>
                     <textarea id="resident" className="textarea textarea-bordered textarea-sm w-full lg:h-52" ></textarea>
                  </label>
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

export default PersonalDataComponent