import PropTypes from "prop-types"

const InviteEmployeeComponent = ({ onPrevious }) => {
   return (
      <div className="mt-4 mx-4 flex flex-col justify-center items-center">
         <div className="w-full flex flex-col mt-4 gap-5 lg:w-3/4">
            {/* heading */}
            <div className="flex flex-col gap-1">
               <h1 className="font-semibold text-2xl text-black">
                  Invite employee
               </h1>
               <p className="font-light text-base text-slate-400">
                  Fill all employee salary information data
               </p>
            </div>

            {/* button cancel/next */}
            <div className="flex gap-6 justify-end items-center mt-36">
               <button onClick={onPrevious}>Cancel</button>
            </div>
         </div>
      </div>
   )
}

export default InviteEmployeeComponent;

InviteEmployeeComponent.propTypes = {
   onPrevious: PropTypes.func
}