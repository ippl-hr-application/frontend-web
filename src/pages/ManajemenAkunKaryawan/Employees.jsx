import Navbar from "../../components/Navbar"
import CopyRight2 from "../../components/CopyRight2";
import iconBintang from "../../assets/iconBintang.svg"
import { FaChevronDown } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { LuMoveRight } from "react-icons/lu";
import { AiOutlineCaretDown } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";

const Employees = () => {
   const [selectAll, setSelectAll] = useState(false);
   const [checkboxes, setCheckboxes] = useState(Array(4).fill(false)); // Ganti 4 dengan jumlah baris tabel Anda

   // Function untuk menangani klik pada checkbox di table head
   const handleSelectAll = () => {
      const newSelectAll = !selectAll;
      setSelectAll(newSelectAll);
      const newCheckboxes = checkboxes.map(() => newSelectAll);
      setCheckboxes(newCheckboxes);
   };

   // Function untuk menangani klik pada checkbox di setiap baris tabel
   const handleCheckboxClick = (index) => {
      const newCheckboxes = [...checkboxes];
      newCheckboxes[index] = !newCheckboxes[index];
      setCheckboxes(newCheckboxes);
      setSelectAll(newCheckboxes.every((checkbox) => checkbox));
   };

   const dummy = [
      {
         employeName: "Jono",
         foto: "https://plus.unsplash.com/premium_photo-1710523260461-c7c7f9ab7226?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",
         negara: "Cina",
         employeId: "11211055",
         branch: "Red",
         job: "kang Parkir"
      },
      {
         employeName: "Asep Mulyadi",
         foto: "https://plus.unsplash.com/premium_photo-1708275671991-6b8514fc53ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8",
         negara: "Malaysia",
         employeId: "11211011",
         branch: "Blue",
         job: "Maneger"
      },
      {
         employeName: "Caca Putri",
         foto: "https://images.unsplash.com/photo-1528351999989-aafadf462ad6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmlnYXxlbnwwfHwwfHx8MA%3D%3D",
         negara: "Indonesia",
         employeId: "11211018",
         branch: "Yellow",
         job: "CTO"
      },
      {
         employeName: "C Ronaldo",
         foto: "https://images.unsplash.com/photo-1696446701711-f1def788401b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8b3V0ZG9vcnxlbnwwfHwwfHx8MA%3D%3D",
         negara: "Portugal",
         employeId: "11211007",
         branch: "White",
         job: "Post Player"
      },
   ]
   return (
      <div>
         <Navbar />
         <div className="container mx-auto pt-32">
            {/* heading */}
            <div className="mx-4 flex justify-between">
               {/* kiri */}
               <div className="flex flex-col gap-10">
                  {/* judul */}
                  <div className="flex flex-col gap-2">
                     <h1 className="text-primary font-light text-2xl">Nama Perusahaan</h1>
                     <h2 className="text-blue-800 font-semibold text-4xl">Employees</h2>
                  </div>
                  {/* button filter by daisyui */}
                  <div className="dropdown dropdown-bottom dropdown-end">
                     <div
                        tabIndex={0}
                        role="button"
                        className="border-2 border-slate-300 rounded-md py-2 px-4 w-60 flex items-center justify-between"
                     >
                        <p>Filter</p>
                        <FaChevronDown />
                     </div>
                     <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                     </ul>
                  </div>
               </div>
               {/* kanan */}
               <div className="flex flex-col gap-10 items-end">
                  {/* button add employes */}
                  <Link as={Link} to={"/add_employees"}>
                     <button className="text-white font-medium text-lg border-none py-4 px-16 bg-primary rounded-md hover:bg-blue-800 duration-300 shadow-md">
                        Add Employee
                     </button>
                  </Link>
                  {/* search */}
                  <div className="flex items-center gap-3">
                     <img
                        src={iconBintang}
                        alt="iconBintang"
                        className="w-10 h-10"
                     />
                     <div className="border-2 border-slate-300 pl-4 rounded-md flex gap-2 items-center">
                        <label htmlFor="search">
                           <IoSearch className="w-6 h-6 text-slate-400" />
                        </label>
                        <input type="search" name="search" id="search" placeholder="Search ..." className="py-2 px-4" />
                     </div>
                  </div>
               </div>
            </div>
            {/* card detail employees */}
            <div className="mx-4 pl-10 pr-28 mt-4 flex justify-between items-center border-2 border-slate-300 rounded-md py-6">
               <div className="flex flex-col gap-2 items-center">
                  <h1 className="text-slate-400 font-medium text-lg">Overview of period</h1>
                  <p className="font-medium text-black ">March 2024</p>
               </div>
               <div className="flex flex-col gap-2 items-center">
                  <h1 className="text-slate-400 font-medium text-lg">Total Employees</h1>
                  <p className="font-medium text-black ">0</p>
               </div>
               <div className="flex flex-col gap-2 items-center">
                  <h1 className="text-slate-400 font-medium text-lg">New Hire</h1>
                  <p className="font-medium text-black ">0</p>
               </div>
               <div className="flex flex-col gap-2 items-center">
                  <h1 className="text-slate-400 font-medium text-lg">Leaving</h1>
                  <p className="font-medium text-black ">0</p>
               </div>

               <div className="w-px h-14 bg-slate-500"></div>

               <button className="flex gap-3 items-center group hover:scale-x-105 ease-in-out">
                  <p className="text-primary font-medium group-hover:text-blue-800 ">See Details</p>
                  <LuMoveRight className="w-8 h-8 text-primary" />
               </button>
            </div>
            {/* card actions */}
            <div className="overflow-x-auto mx-4 mt-4 mb-10 border-2 border-slate-300 rounded-md">
               <table className="table">
                  {/* head */}
                  <thead className="bg-slate-400 text-white tracking-widest">
                     <tr>
                        <th className="sticky left-0 z-10 bg-slate-400">
                           <label>
                              <input
                                 type="checkbox"
                                 className="checkbox border-white bg-white"
                                 checked={selectAll}
                                 onChange={handleSelectAll}
                              />
                           </label>
                        </th>
                        <th className="text-base font-medium sticky left-10 bg-slate-400 z-10">Employee Name</th>
                        <th className="text-base font-medium">Employee Id</th>
                        <th className="text-base font-medium">Branch</th>
                        <th className="text-base font-medium">Job Position</th>
                        <th className="text-base font-medium">Employment Status</th>
                        <th className="text-base font-medium">Email</th>
                        <th className="text-base font-medium">Birthdate</th>
                        <th className="text-base font-medium">Birth Place</th>
                        <th className="text-base font-medium">Adress</th>
                        <th className="text-base font-medium">Phone Number</th>
                        <th className="text-base font-medium">Religion</th>
                        <th className="text-base font-medium">Marital Status</th>
                        <th className="sticky right-0 bg-slate-400 z-10"></th>
                     </tr>
                  </thead>
                  <tbody>
                     {/* row 1 */}
                     {dummy.map((item, index) => (
                        <tr key={index}>
                           <th className="sticky left-0 bg-white z-10">
                              <label>
                                 <input
                                    type="checkbox"
                                    className="checkbox"
                                    checked={checkboxes[index]}
                                    onChange={() => handleCheckboxClick(index)}
                                 />
                              </label>
                           </th>
                           <td className="sticky left-10 bg-white z-10">
                              <div className="flex items-center gap-3 ">
                                 <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12 ">
                                       <img src={item.foto} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                 </div>
                                 <div>
                                    <div className="font-bold">{item.employeName}y</div>
                                    <div className="text-sm opacity-50">{item.negara}</div>
                                 </div>
                              </div>
                           </td>
                           <td>
                              <span className="badge badge-ghost badge-sm">{item.employeId}</span>
                           </td>
                           <td>{item.branch}</td>
                           <td>{item.job}</td>
                           {/* employe status */}
                           <td>-</td>
                           {/* email */}
                           <td>helmi220602@gmail.com</td>
                           {/* Birthdate */}
                           <td>-</td>
                           {/* birth place */}
                           <td>-</td>
                           {/* Adress */}
                           <td>-</td>
                           {/* Phone Number */}
                           <td>-</td>
                           {/* Religion */}
                           <td>-</td>
                           {/* Marital Status	 */}
                           <td>-</td>

                           {/* actions */}
                           <th className="sticky right-0 bg-white">
                              <div className="dropdown dropdown-left">
                                 <div
                                    tabIndex={0}
                                    role="button"
                                    className="border-2 border-slate-300 bg-white py-3 px-6 flex items-center gap-3 rounded-md"
                                 >
                                    <p className="text-primary">Actions</p>
                                    <AiOutlineCaretDown className="text-primary" />
                                 </div>
                                 <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 border-2 border-slate-200 mr-4">
                                    <Link as={Link} to={"/detail_employees"}>
                                       <li className=""><a>Detail</a></li>
                                    </Link>
                                    <li className=""><a>Transfer</a></li>
                                    <li className=""><a>Resign</a></li>
                                    <li className=""><a>Delete</a></li>
                                 </ul>
                              </div>
                           </th>
                        </tr>
                     ))}

                  </tbody>
               </table>
            </div>
         </div>
         {/* <Footer /> */}
         <CopyRight2 />
      </div >
   )
}

export default Employees