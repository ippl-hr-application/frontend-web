/* eslint-disable react/prop-types */
import { Dropdown, Button, Checkbox, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";


function ModalAddTask({ openModal, onCloseModal, employees }) {
  const [taskName, setTaskName] = useState("");
  const [assignee, setAssignee] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [description, setDescription] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const api_url = import.meta.env.VITE_REACT_API_URL;
  const { user,token } = useSelector((state) => state.auth);

  // Fungsi untuk menangani penambahan tugas baru
  async function handleSaveTask() {
    // Validasi Task Name dan Assignee
    if (!taskName || !assignee || !selectedDate) {
      setErrorMessage("Please fill in Task Name, Assignee, and Due Date.");
      return;
    }
  
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}` // Menambahkan token otorisasi ke header
        }
      };
  
      const response = await axios.post(
        `${api_url}/task-management/`,
        {
          company_branch_id: user.user.company.company_id,
          employee_id: assignee.employee_id,
          title: taskName,
          description: description,
          start_date: new Date().toISOString(),
          end_date: selectedDate + "T23:59:59.999Z" // Set end date to the end of the selected day
        },
        config // Menggunakan konfigurasi dengan token otorisasi
      );
  
      console.log("Task added successfully:", response.data);
      // Setelah tugas disimpan, reset state dan pesan kesalahan
      setTaskName("");
      setDescription("");
      setSelectedDate("");
      setRememberMe(false);
      setErrorMessage("");
  
      onCloseModal();
    } catch (error) {
      console.error("Error saving task:", error);
      setErrorMessage("Error saving task. Please try again later.");
    }
  }

  return (
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
            <Dropdown label={assignee ? `${assignee.first_name} ${assignee.last_name}` : "All assignee"} inline>
                <Dropdown.Item onClick={() => setAssignee("")}>All assignee</Dropdown.Item>
                {employees.map((employee) => (
                  <Dropdown.Item key={employee.employee_id} onClick={() => setAssignee(employee)}>
                    {`${employee.first_name} ${employee.last_name}`}
                  </Dropdown.Item>
                ))}
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
              className="bg-white border-2 text-primary">
              Cancel
            </Button>
            <Button onClick={handleSaveTask} className="bg-primary">
              Save
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ModalAddTask;
