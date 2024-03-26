import Navbar from "../../../components/Navbar";
import CopyRight2 from "../../../components/CopyRight2";

import "../../ManajemenAkunKaryawan/stepper.css";
import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

import PersonalDataComponent from "../../../components/ManajemenAkunKaryawan/PersonalDataComponent";
import EmploymentDataComponent from "../../../components/ManajemenAkunKaryawan/EmploymentDataComponent";
import PayrollComponent from "../../../components/ManajemenAkunKaryawan/PayrollComponent";
import InviteEmployeeComponent from "../../../components/ManajemenAkunKaryawan/InviteEmployeeComponent";

const AddEmployeesPage = () => {
   const steps = ["Personal Data", "Employment Data", "Payroll", "Invite Employee"];
   const [complete, setComplete] = useState(false);

   // fungsi untuk multistep form datanya
   const [step, setStep] = useState(1);

   const nextStep = () => {
      setStep(step + 1);
      if (step === 4) {
         setComplete(true);
      }
   };

   const previousStep = () => {
      setStep(step - 1);
      setComplete(false);
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
               {steps.map((label, index) => (
                  <div
                     key={index}
                     className={`step-item 
                        ${step === index + 1 ? "active" : ""} 
                        ${complete || index + 1 < step ? "complete" : ""}`
                     }
                  >
                     <div className="step ">
                        {complete || index + 1 < step ? <FaCheck size={20} /> : index + 1}
                     </div>
                     <p className="text-slate-300">{label}</p>
                  </div>
               ))}
            </div>

            {/* Card form PERSONAL DATA*/}
            {step === 1 && (
               <PersonalDataComponent
                  onNext={nextStep}
               />
            )}

            {/* Card from Employment Data */}
            {step === 2 && (
               <EmploymentDataComponent
                  onPrevious={previousStep}
                  onNext={nextStep}
               />
            )}

            {/* Card from Payroll */}
            {step === 3 && (
               <PayrollComponent
                  onPrevious={previousStep}
                  onNext={nextStep}
               />
            )}

            {/* finish */}
            {step === 4 && (
               <InviteEmployeeComponent
                  onPrevious={previousStep}
               />
            )}
         </div>

         <CopyRight2 />
      </div>
   );
};

export default AddEmployeesPage;
