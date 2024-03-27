import Navbar from "../../../components/Navbar"
import CopyRight2 from "../../../components/CopyRight2"
import generalIcon from "../../../assets/DetailEmployes/general.svg"
import timeIcon from "../../../assets/DetailEmployes/time.svg"
import calenderIcon from "../../../assets/DetailEmployes/ic_calendar.svg"
import departementIcon from "../../../assets/DetailEmployes/ic_department.svg"
import companyIcon from "../../../assets/DetailEmployes/company.svg"

import PersonalComponent from "../../../components/ManajemenAkunKaryawan/DetailAkunKaryawan/PersonalComponent"
import EmploymentComponent from "../../../components/ManajemenAkunKaryawan/DetailAkunKaryawan/EmploymentComponent"
import PayrollComponent from "../../../components/ManajemenAkunKaryawan/DetailAkunKaryawan/PayrollComponent"
import { useState } from "react"
import { Link } from "react-router-dom"
import { MdKeyboardBackspace } from "react-icons/md";

const DetailEmployee = () => {

   const [step, setStep] = useState(1);

   // Function to handle sidebar menu click
   const handleMenuClick = (stepNumber) => {
      setStep(stepNumber);
   }

   return (
      <div>
         <Navbar />

         <div className="container mx-auto">
            <div className="flex gap-2">
               {/* sidebar in mobile */}
               <div className="flex lg:hidden pt-20 drawer">
                  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                  <div className="drawer-content">
                     <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
                  </div>
                  <div className="drawer-side">
                     <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                     <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content pt-20">
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>

                     </ul>
                  </div>
               </div>

               {/* button back to employees page and sidebar laptop */}
               <div className="flex flex-col gap-3">
                  <Link as={Link} to={"/employees"} className="mt-28 flex items-center gap-4 ml-6 hover:underline hover:scale-105 duration-300 w-1/4" >
                     <MdKeyboardBackspace className="w-6 h-6" />
                     <p className="text-base font-medium">Back</p>
                  </Link>

                  {/* sidebar in laptop */}
                  <div className="hidden lg:flex lg:drawer-open ">
                     <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                     <div className="drawer-side">
                        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 pb-56 bg-white text-base-content border-2 shadow-lg ml-4 rounded-2xl flex flex-col gap-4">
                           {/* heading */}
                           <div className="flex flex-col gap-3 items-center mt-3">
                              <img
                                 src="https://images.unsplash.com/photo-1711319551857-9108cbd44e71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5M3x8fGVufDB8fHx8fA%3D%3D"
                                 alt=""
                                 className="border-none shadow-md rounded-full w-24 h-24"
                              />
                              <h1 className="text-2xl font-semibold">Helmi S.Kom</h1>
                           </div>
                           {/* menu */}
                           <div className="flex flex-col gap-2">
                              {/* general dropdown */}
                              <div className="flex-none">
                                 <ul className="menu px-1">
                                    <li>
                                       <details>
                                          <summary className="text-lg">
                                             <img src={generalIcon} alt="" className="mr-2" />
                                             <p>
                                                General
                                             </p>
                                          </summary>
                                          <ul className="p-2 bg-base-100 rounded-t-none">
                                             <li><a onClick={() => handleMenuClick(1)}>Personal</a></li>
                                             <li><a onClick={() => handleMenuClick(2)}>Employment</a></li>
                                             <li><a onClick={() => handleMenuClick(3)}>Payroll</a></li>
                                          </ul>
                                       </details>
                                    </li>
                                 </ul>
                              </div>
                              {/* time managemnet */}
                              <li>
                                 <div className="w-full flex items-center justify-start text-base"> <img src={timeIcon} alt="" className="mr-2" /> Time Management</div>
                              </li>
                              {/* Employee Transfer */}
                              <li>
                                 <div className="w-full flex items-center justify-start text-base"> <img src={calenderIcon} alt="" className="mr-2" /> Employee Transfer</div>
                              </li>
                              {/* Company Settings */}
                              <li >
                                 <div className="w-full flex items-center justify-start text-base"> <img src={companyIcon} alt="" className="mr-2" /> Company Settings</div>
                              </li>
                              {/* Integrations */}
                              <li >
                                 <div className="w-full flex items-center justify-start text-base"> <img src={departementIcon} alt="" className="mr-2" /> Integrations</div>
                              </li>
                           </div>
                        </ul>

                     </div>
                  </div>
               </div>

               <div className="mt-5 w-full">
                  {/* konten PERSONAL*/}
                  {step === 1 && (
                     <PersonalComponent />
                  )}

                  {/* konten EMPLOYMENT */}
                  {step === 2 && (
                     <EmploymentComponent />
                  )}

                  {/* konten PAYROLL INFO */}
                  {step === 3 && (
                     < PayrollComponent />
                  )}
               </div>
            </div>
         </div>

         <CopyRight2 />
      </div>
   )
}

export default DetailEmployee