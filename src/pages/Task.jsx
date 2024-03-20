import React, { useState } from "react";
import Navbar from "../components/Navbar";
import {
  Dropdown,
  Button,
  Checkbox,
  Label,
  Modal,
  TextInput,
} from "flowbite-react";
import GambarTask from "../assets/GambarTask.png";

function Task() {
  const [openModal, setOpenModal] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [assignee, setAssignee] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [description, setDescription] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Fungsi untuk menutup modal dan mengatur kembali state
  function onCloseModal() {
    setOpenModal(false);
    // Mengatur kembali nilai state ke nilai default
    setTaskName("");
    setAssignee("");
    setSelectedDate("");
    setSelectedTime("");
    setDescription("");
    setRememberMe(false);
  }

  // Fungsi untuk menangani penambahan tugas baru
  function handleSaveTask() {
    // Validasi Task Name dan Assignee
    if (!taskName || !assignee) {
      setErrorMessage("Please fill in Task Name and Assignee.");
      return;
    }
    // Lakukan logik penyimpanan tugas di sini
    // Anda dapat menggunakan nilai state untuk mengakses data yang diinputkan
    console.log("Task Name:", taskName);
    console.log("Assignee:", assignee);
    console.log("Date:", selectedDate);
    console.log("Time:", selectedTime);
    console.log("Description:", description);
    console.log("Remember Me:", rememberMe);
    // Setelah tugas disimpan, tutup modal
    // Setelah tugas disimpan, reset state dan pesan kesalahan
    setTaskName("");
    setAssignee("");
    setDescription("");
    setErrorMessage("");

    onCloseModal();
  }

  return (
    <div>
      <Navbar />
      <div className="pt-[73px] container mx-auto">
        <div className="relative mb-10 md:pt-6 lg:pt-4 mt-8">
          <h2 className="text-blue-500">Nama Perusahaan</h2>
          <h1 className="text-blue-800 font-semibold text-xl mb-5">
            All tasks
          </h1>
          <div className="flex mb-12">
            <div className="border flex rounded-lg px-5 w-full md:w-[300px] h-[50px]">
              <Dropdown label="All assignee" inline>
                <Dropdown.Item>All assignee</Dropdown.Item>
                <Dropdown.Item>Dimas Pramudya</Dropdown.Item>
              </Dropdown>
            </div>
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
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
          <div className="flex flex-col items-center justify-center gap-5">
            <img src={GambarTask} alt="Belum ada task" />
            <div className="text-center">
              <h1 className="font-semibold">No task to do</h1>
              <h1 className="text-sm">All task to do will show up here</h1>
            </div>
            <Button onClick={() => setOpenModal(true)} className="bg-primary">
              Create new task{" "}
            </Button>
            <Modal show={openModal} size="md" onClose={onCloseModal} popup>
              <Modal.Header>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  Create new task
                </h3>
              </Modal.Header>
              <Modal.Body>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="taskName" className="mb-2 block">
                      Task Name*
                    </label>
                    <TextInput
                      id="taskName"
                      type="text"
                      value={taskName}
                      onChange={(e) => setTaskName(e.target.value)}
                      required
                      placeholder="New Task"
                    />
                  </div>
                  <div>
                    <label htmlFor="assignee" className="mb-2 block">
                      Assignee*
                    </label>
                    <div className="border flex rounded-lg px-3 w-full md:w-[350px] h-[50px]">
                      <Dropdown label="All assignee" inline>
                        <Dropdown.Item>All assignee</Dropdown.Item>
                        <Dropdown.Item>Dimas Pramudya</Dropdown.Item>
                      </Dropdown>
                    </div>
                  </div>
                  {/* Tambahkan komponen untuk input select date dan time */}
                  <div>
                    <label htmlFor="date" className="mb-2 block">
                      Due Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="mb-2 block">
                      Due Time
                    </label>
                    <input
                      type="time"
                      id="time"
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="description" className="mb-2 block">
                      Description
                    </label>
                    <textarea
                      id="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="border border-gray-300 rounded-md p-2 w-full"
                    />
                  </div>
                  <div>
                    <Checkbox
                      id="remember"
                      checked={rememberMe}
                      onChange={() => setRememberMe(!rememberMe)}
                      className="mr-2"
                    />
                    <label htmlFor="remember">Email to assigned employee</label>
                  </div>
                  {errorMessage && (
                    <p className="text-sm text-red-500">{errorMessage}</p>
                  )}
                  <div className="flex justify-end space-x-4">
                    <Button
                      onClick={onCloseModal}
                      className="bg-white border-2 text-primary"
                    >
                      Cancel
                    </Button>
                    <Button onClick={handleSaveTask} className="bg-primary">
                      Save
                    </Button>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task;
