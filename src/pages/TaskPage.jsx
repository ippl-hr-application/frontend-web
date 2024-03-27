import { useState, useEffect } from "react";
import { Dropdown, Button } from "flowbite-react";
import Navbar from "../components/Navbar";
import GambarTask from "../assets/GambarTask.png";
import ModalAddTask from "../components/ModalAddTask";
import TaskList from "../components/TaskList";
import axios from "axios";
import { useSelector } from "react-redux";

function TaskPage() {
  const [openModal, setOpenModal] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [tasks, setTasks] = useState([]);
  const { user, token } = useSelector((state) => state.auth);
  const api_url = import.meta.env.VITE_REACT_API_URL;

  // Fungsi untuk menutup modal dan mengatur kembali state
  function onCloseModal() {
    setOpenModal(false);
  }

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get(
          `${api_url}/account/employees/${user.user.company.company_id}`
        );
        setEmployees(response.data.data.employees);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };

    const fetchData = async () => {
      try {
        // Menyiapkan konfigurasi untuk axios dengan header Authorization
        const config = {
          headers: {
            Authorization: `Bearer ${token}`, // Menggunakan token otorisasi
          },
        };
        // Mengirimkan permintaan dengan header yang ditentukan
        const response = await axios.get(
          `${api_url}/task-management/${user.user.company.company_id}`,
          config
        );

        // console.log(response.data);
        const getTask = response?.data?.data?.tasks;
        setTasks(getTask);
      } catch (error) {
        console.error("Error saat fetching data:", error);
      }
    };

    fetchData();
    fetchEmployees();
  });

  // console.log(employees);

  return (
    <div>
      <Navbar />
      <div className="pt-[73px] container mx-auto">
        <div className="relative mb-10 md:pt-6 lg:pt-4 mt-8">
          <h2 className="text-blue-500">Nama Perusahaan</h2>
          <h1 className="text-blue-800 font-semibold text-xl mb-5">
            All tasks
          </h1>
          <div className="flex justify-between mb-12 gap-2">
            <div className="border flex rounded-lg px-5 w-full md:w-[300px] h-[50px]">
              <Dropdown label="All assignee" inline>
                <Dropdown.Item>All assignee</Dropdown.Item>
                {employees.map((employee) => (
                  <Dropdown.Item key={employee.employee_id}>
                    {`${employee.first_name} ${employee.last_name}`}
                  </Dropdown.Item>
                ))}
              </Dropdown>
            </div>
            <div className="flex gap-2">
              <label className="input input-bordered flex items-center w-full md:w-[570px] h-[50px] lg:ml-[500px]">
                <input
                  type="text"
                  className="grow focus:ring-0 border-none"
                  placeholder="Search"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70">
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
              <Button
                onClick={() => setOpenModal(true)}
                className="bg-primary w-[10rem]">
                Create new task{" "}
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-5">
            <div className="w-full h-[55vh] border-2 rounded overflow-y-auto
            ">
              {tasks.length <= 0 ? (
                <>
                  <img src={GambarTask} alt="Belum ada task" />
                  <div className="text-center">
                    <h1 className="font-semibold">No task to do</h1>
                    <h1 className="text-sm">
                      All task to do will show up here
                    </h1>
                  </div>
                </>
              ) : (
                <TaskList employees={employees} tasks={tasks} />
              )}
            </div>
            <ModalAddTask
              openModal={openModal}
              onCloseModal={onCloseModal}
              employees={employees}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
