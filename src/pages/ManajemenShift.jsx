// import iconBintang from "../../assets/iconBintang.svg";
import iconBintang from "../assets/iconBintang.svg";
import { FaChevronDown } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { LuMoveRight } from "react-icons/lu";
import { AiOutlineCaretDown } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import CopyRight2 from "../components/CopyRight2";

const ManajemenShift = () => {
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
      employeName: "Helmi Kasep",
      foto: "https://plus.unsplash.com/premium_photo-1710523260461-c7c7f9ab7226?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",
      negara: "Cina",
      employeId: "11211055",
      branch: "Red",
      job: "kang Parkir",
    },
    {
      employeName: "Asep Mulyadi",
      foto: "https://plus.unsplash.com/premium_photo-1708275671991-6b8514fc53ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8",
      negara: "Malaysia",
      employeId: "11211011",
      branch: "Blue",
      job: "Maneger",
    },
    {
      employeName: "Caca Bone",
      foto: "https://images.unsplash.com/photo-1528351999989-aafadf462ad6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmlnYXxlbnwwfHwwfHx8MA%3D%3D",
      negara: "Indonesia",
      employeId: "11211018",
      branch: "Yellow",
      job: "CTO",
    },
    {
      employeName: "Mbappe",
      foto: "https://images.unsplash.com/photo-1696446701711-f1def788401b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8b3V0ZG9vcnxlbnwwfHwwfHx8MA%3D%3D",
      negara: "Portugal",
      employeId: "11211007",
      branch: "White",
      job: "Post Player",
    },
  ];
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
              <h2 className="text-blue-800 font-semibold text-5xl">
                Scheduler
              </h2>
            </div>
            {/* button add employes */}
            <div className="flex justify-between">
              <Link as={Link} to={""}>
                <button className="text-white font-medium text-lg border-none py-4 px-16 bg-primary rounded-md hover:bg-blue-800 duration-300 shadow-md mr-5">
                  Index
                </button>
              </Link>
              <Link as={Link} to={""}>
                <button className="text-white font-medium text-lg border-none py-4 px-16 bg-primary rounded-md hover:bg-blue-800 duration-300 shadow-md">
                  Schedule
                </button>
              </Link>
            </div>
          </div>

          {/* kanan */}
          <div className="flex flex-col gap-10 items-end">
            {/* search */}
            <div className="flex items-center gap-3">
              <img src={iconBintang} alt="iconBintang" className="w-10 h-10" />
              <div className="border-2 border-slate-300 pl-4 rounded-md flex gap-2 items-center">
                <label htmlFor="search">
                  <IoSearch className="w-6 h-6 text-slate-400" />
                </label>
                <input
                  type="search"
                  name="search"
                  id="search"
                  placeholder="Search ..."
                  className="py-2 px-4"
                />
              </div>
            </div>
          </div>
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
                <th className="text-base font-medium sticky left-10 bg-slate-400 z-10">
                  Employee Name
                </th>
                <th className="text-base font-medium">Employee Id</th>
                <th className="text-base font-medium">Branch</th>
                <th className="text-base font-medium">Organization</th>
                <th className="text-base font-medium">Current Schedule</th>
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
                          <img
                            src={item.foto}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{item.employeName}y</div>
                        <div className="text-sm opacity-50">{item.negara}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge badge-ghost badge-sm">
                      {item.employeId}
                    </span>
                  </td>
                  <td>{item.branch}</td>
                  <td>{item.job}</td>
                  {/* employe status */}
                  <td>-</td>
                  {/* email */}

                  {/* Assign Schedule */}
                  <th className="sticky right-0 bg-white">
                    <div className="">
                      <div
                        tabIndex={0}
                        role="button"
                        className="border-2 border-slate-300 bg-white py-3 px-6 flex items-center gap-3 rounded-md text-base" // Mengatur ukuran teks menjadi medium
                      >
                        <p className="text-primary">Assign Schedule</p>
                      </div>
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
    </div>
  );
};

export default ManajemenShift;
