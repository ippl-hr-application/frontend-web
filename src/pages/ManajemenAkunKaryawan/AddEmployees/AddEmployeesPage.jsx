import Navbar from "../../../components/Navbar"
import CopyRight2 from "../../../components/CopyRight2"
import "../../ManajemenAkunKaryawan/stepper.css"
import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

import PersonalDataComponent from "../../../components/ManajemenAkunKaryawan/PersonalDataComponent";
import EmploymentDataComponent from "../../../components/ManajemenAkunKaryawan/EmploymentDataComponent";

// import { useNavigate } from "react-router-dom";

const AddEmployeesPage = () => {
   // const navigate = useNavigate();
   const steps = ["Personal Data", "Employment Data", "Payroll", "Invite Employee"];
   const [currentStep, setCurrentStep] = useState(1);
   const [complete, setComplete] = useState(false);

   const handleNext = () => {
      if (currentStep === steps.length) {
         setComplete(true);
      } else {
         setCurrentStep((prev) => prev + 1);
         // navigate("/add_employees_2");
      }
   };

   return (
      <div>
         <Navbar />

         <div className="pt-24 container mx-auto">
            {/* heading */}
            <div className="flex flex-col gap-2 mx-4 lg:mt-5">
               <h1 className="text-primary font-light text-2xl">Employees</h1>
               <h2 className="text-blue-800 font-semibold text-4xl">Add Employees</h2>
            </div>
            {/* button back */}
            <Link as={Link} to={"/employees"} className="flex items-center gap-2 mx-4 mb-4 mt-4 lg:mt-4">
               <IoMdArrowRoundBack />
               <p>Back</p>
            </Link>
            {/* step progress bar */}
            <div className="flex gap-4 justify-center mt-14">
               {steps.map((step, i) => (
                  <div
                     key={i}
                     className={`step-item 
                        ${currentStep === i + 1 && "active"} 
                        ${(i + 1 < currentStep || complete) && "complete"}`
                     }
                  >
                     <div className="step ">
                        {i + 1 < currentStep || complete ? <FaCheck size={20} /> : i + 1}
                     </div>
                     <p className="text-slate-300">{step}</p>
                  </div>
               ))}
            </div>

            {/* Card form PERSONAL DATA*/}
            <div className="hidden">
               <PersonalDataComponent />
            </div>

            {/* Card from Employment Data */}
            <EmploymentDataComponent />
         </div>
         {/* {!complete && (
            <button
               className="text-white rounded-xl py-2 px-4 bg-primary"
               // onClick={() => {
               //    currentStep === steps.length
               //       ? setComplete(true)
               //       : setCurrentStep((prev) => prev + 1);
               // }}
               onClick={handleNext}
            >
               {currentStep === steps.length ? "Finish" : "Next"}
            </button>
         )} */}

         <CopyRight2 />
      </div>
   )
}

export default AddEmployeesPage;