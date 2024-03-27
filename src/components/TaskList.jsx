/* eslint-disable react/prop-types */
import { Avatar, Tooltip, Badge } from "flowbite-react";
import { HiClock } from "react-icons/hi";

function TaskList({ employees, tasks }) {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div>
      {/* Daftar tugas */}
      {tasks.map((task, index) => {
        // Cari employee yang sesuai dengan task.employee_id
        const assignedEmployee = employees.find(
          (employee) => employee.employee_id === task.employee_id
        );
        // Buat kombinasi nama first name dan last name jika employee ditemukan
        const employeeName = assignedEmployee
          ? `${assignedEmployee.first_name} ${assignedEmployee.last_name}`
          : "Unknown Employee";

        return (
          <div
            key={index}
            className="flex justify-between items-center p-2 mb-4 hover:bg-base-200 transition ease-in-out duration-300">
            <div className="flex items-center gap-3">
              <div className="text-right">
                <Tooltip content={employeeName} style="light">
                  <Avatar rounded />
                </Tooltip>
                {/* <p className="text-md">{employeeName}</p> */}
              </div>
              <div className="flex-col">
                <h2 className="text-lg font-medium">{task.title}</h2>
                <p className="text-md text-gray-500">{task.description}</p>
              </div>
            </div>
                <Badge className="text-xs" color="indigo" icon={HiClock}>
                  {new Date(task.end_date).toLocaleDateString("id-ID", options)}
                </Badge>
          </div>
        );
      })}
    </div>
  );
}

export default TaskList;
