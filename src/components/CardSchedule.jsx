import React from "react";
import { Datepicker } from "flowbite-react";

function CardSchedule() {
  return (
    <>
      <div className="overflow-y-auto rounded-xl border w-[560px] h-[450px] px-6">
        <div className="flex justify-between items-center h-[4rem] sticky top-0 bg-white">
          <h2 className="stat-title font-semibold text-black">
            Upcoming Schedule
          </h2>
          <Datepicker />
        </div>
        <p className="text-sm mt-4 mb-3">Priority</p>
        <div className="stat bg-gray-100 justify-between items-center rounded-lg">
          <h2 className="stat-title text-black mb-2">
            Review candidate applications
          </h2>
          <h3 className="text-xs">Today.11.30 AM</h3>
        </div>
        <p className="text-sm mt-4 mb-3">Other</p>
        <div className="stat bg-gray-100 justify-between items-center rounded-lg mb-3">
          <h2 className="stat-title text-black mb-2">
            Interview with candidates
          </h2>
          <h3 className="text-xs">Today.10.30 AM</h3>
        </div>
        <div className="stat bg-gray-100 justify-between items-center rounded-lg mb-3">
          <h2 className="stat-title text-black mb-2">
            Short meeting with product designer from IT Departement
          </h2>
          <h3 className="text-xs">Today.09.15 AM</h3>
        </div>
        <div className="stat bg-gray-100 justify-between items-center rounded-lg mb-3">
          <h2 className="stat-title text-black mb-2">
            Short meeting with product designer from IT Departement
          </h2>
          <h3 className="text-xs">Today.09.15 AM</h3>
        </div>
      </div>
    </>
  );
}

export default CardSchedule;
