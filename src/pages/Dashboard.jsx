import React from "react";
import Navbar from "../components/Navbar";
import { Datepicker } from "flowbite-react";
import { Tabs } from "flowbite-react";
import { Dropdown } from "flowbite-react";

function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className="pt-[73px] container mx-auto">
        <div className="relative mb-10 md:pt-6 lg:pt-4 mt-8">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body flex flex-col lg:flex-row justify-between">
              <div>
                <h2 className="card-title mb-2">Hi, Helmi Kasep Pisan</h2>
                <p className="text-xs text-gray-500 mb-36 lg:mb-20">
                  Jangan lupa absen hari ini!
                </p>
                <p className="text-xs mb-2">Shortcut</p>
                <div className="flex gap-4">
                  <button className="border-2 rounded-full py-1 px-3 border-primary bg-white hover:bg-primary group duration-300 lg:py-2 lg:px-4">
                    <a
                      href="https://wa.me/6285346901814"
                      target="_blank"
                      className="flex items-center gap-1 text-primary group-hover:text-white lg:gap-2 lg:text-lg lg:font-medium"
                    >
                      <p className="text-xs">Kehadiran</p>
                    </a>
                  </button>

                  <button className="border-2 rounded-full py-1 px-3 border-primary bg-white hover:bg-primary group duration-300 lg:py-2 lg:px-4">
                    <a
                      href=""
                      target="_blank"
                      className="flex items-center gap-1 text-primary group-hover:text-white lg:gap-2 lg:text-lg lg:font-medium"
                    >
                      <p className="text-xs">Izin</p>
                    </a>
                  </button>

                  <button className="border-2 rounded-full py-1 px-3 border-primary bg-white hover:bg-primary group duration-300 lg:py-2 lg:px-4">
                    <a
                      href=""
                      target="_blank"
                      className="flex items-center gap-1 text-primary group-hover:text-white lg:gap-2 lg:text-lg lg:font-medium"
                    >
                      <p className="text-xs">Lembur</p>
                    </a>
                  </button>
                </div>
              </div>
              <div>
                <p className="text-sm mt-4">Rabu, 13 Maret 2024</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="mr-[40px]">
            <div className="mb-8">
              <div className="stats mr-[40px] w-[200px] h-[150px]">
                <div className="stat bg-red-100">
                  <div className="stat-title font-semibold text-black mb-3">
                    Available Position
                  </div>
                  <div className="stat-value mb-3">24</div>
                  <div className="stat-desc text-red-500">
                    4 urgently needed
                  </div>
                </div>
              </div>
              <div className="stats mr-[40px] w-[200px] h-[150px]">
                <div className="stat bg-blue-100">
                  <div className="stat-title font-semibold text-black mb-3">
                    Job Level
                  </div>
                  <div className="stat-value mb-3">10</div>
                  <div className="stat-desc text-blue-500">4 active hiring</div>
                </div>
              </div>
              <div className="stats w-[200px] h-[150px]">
                <div className="stat bg-pink-100">
                  <div className="stat-title font-semibold text-black mb-3">
                    Who's Off
                  </div>
                  <div className="stat-value mb-3">0</div>
                  <div className="stat-desc text-pink-500">
                    No employee of today
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="stats border w-[320px] h-[270px] mr-[40px]">
                <div className="stat gap-16">
                  <div className="stat-title font-semibold text-black">
                    Employment Status
                  </div>
                  <div className="stat-value">216</div>
                  <div className="stat-desc">
                    <p className="mb-2">120 Men</p>
                    <p>96 Women</p>
                  </div>
                </div>
              </div>
              <div className="stats border w-[320px] h-[270px]">
                <div className="stat gap-16">
                  <div className="stat-title font-semibold text-black">
                    Length of Service
                  </div>
                  <div className="stat-value">16</div>
                  <div className="stat-desc">
                    <p className="mb-2">6 Men</p>
                    <p>10 Women</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
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
          </div>
        </div>
        <div className="flex">
          <div className="mb-4">
            <div className="stats border w-[320px] h-[890px] mr-[40px]">
              <div className="stat">
                <div className="stat-title text-black-500 text-sm mb-3">
                  <p className="font-semibold mb-7">Quick Link</p>
                  <p className="mb-7">
                    <a href="">My Info</a>
                  </p>
                  <p className="mb-7">
                    <a href="">Add Employee</a>
                  </p>
                  <p className="mb-7">
                    <a href="">Employee Transfer</a>
                  </p>
                  <p className="mb-7">
                    <a href="">Company Settings</a>
                  </p>
                  <p className="font-semibold mb-7">Applications</p>
                  <p className="mb-7">
                    <a href="">Form</a>
                  </p>
                  <p className="mb-7">
                    <a href="">Performance Review</a>
                  </p>
                  <p className="mb-7">
                    <a href="">Talent Management</a>
                  </p>
                  <p className="mb-7">
                    <a href="">Insisght</a>
                  </p>
                  <p className="mb-7">
                    <a href="">Timesheet</a>
                  </p>
                  <p className="mb-7">
                    <a href="">Document Template</a>
                  </p>
                  <p className="mb-7">
                    <a href="">Training</a>
                  </p>
                  <p className="mb-7">
                    <a href="">Recruitment</a>
                  </p>
                  <p className="font-semibold mb-7">Download Meraih Mobile</p>
                  <p className="mb-7">
                    <a href="">App Store</a>
                  </p>
                  <p>
                    <a href="">Google Play</a>
                  </p>
                </div>
                <div className="stat-desc"></div>
              </div>
            </div>
          </div>
          <div>
            <div className="stats border w-[920px] h-[260px]">
              <Tabs aria-label="Tabs with underline" style="underline" className="sticky top-0 bg-white focus:ring-0">
                <Tabs.Item active title="Announcement" className="focus:ring-0">
                  <div className="flex gap-5">
                    <div className="border flex rounded-lg ml-3 justify-center w-[300px]">
                      <Dropdown label="Filter" inline>
                        <Dropdown.Item>All Category</Dropdown.Item>
                        <Dropdown.Item>Uncategorized</Dropdown.Item>
                      </Dropdown>
                    </div>
                    <label className="input input-bordered flex items-center gap-2 w-[570px] h-[60px]">
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

                  <div className="stat bg-gray-100 justify-between items-center rounded-lg mt-3 w-[890px] h-[50px] ml-3">
                    <h2 className="stat-title text-gray-500">
                      Apa yang ingin Anda umumkan?
                    </h2>
                  </div>
                  <div className="stat bg-gray-100 justify-between items-center rounded-lg mt-3 w-[890px] h-[70px] ml-3">
                    <h2 className="stat-title text-gray-500">
                      Tidak ada pengumuman yang ditampilkan
                    </h2>
                  </div>
                </Tabs.Item>
                <Tabs.Item title="Kontak & Probation"></Tabs.Item>
                <Tabs.Item title="Task"></Tabs.Item>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
