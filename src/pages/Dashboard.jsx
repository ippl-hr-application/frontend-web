import React from "react";
import Navbar from "../components/Navbar";

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
                      href="https://wa.me/6285346901814"
                      target="_blank"
                      className="flex items-center gap-1 text-primary group-hover:text-white lg:gap-2 lg:text-lg lg:font-medium"
                    >
                      <p className="text-xs">Izin</p>
                    </a>
                  </button>

                  <button className="border-2 rounded-full py-1 px-3 border-primary bg-white hover:bg-primary group duration-300 lg:py-2 lg:px-4">
                    <a
                      href="https://wa.me/6285346901814"
                      target="_blank"
                      className="flex items-center gap-1 text-primary group-hover:text-white lg:gap-2 lg:text-lg lg:font-medium"
                    >
                      <p className="text-xs">Lembur</p>
                    </a>
                  </button>
                </div>
              </div>
              <div>
                <p className="text-sm mt-4">Rabu, 28 January 2024</p>
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
            <div className="stats border w-[560px] h-[450px]">
              <div className="stat">
                <h2 className="stat-title font-semibold text-black">
                  Upcoming Schedule
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="mb-4">
            <div className="stats border w-[320px] h-[900px] mr-[40px]">
              <div className="stat gap-16">
                <div className="stat-title text-black-500 text-sm">
                  Quick Link
                </div>
                <div className="stat-desc"></div>
              </div>
            </div>
          </div>
          <div>
            <div className="stats border w-[920px] h-[260px]">
              <div className="stat">
                <div className="flex gap-10">
                  <h2 className="stat-title font-semibold text-black">
                    Announcement
                  </h2>
                  <h2 className="stat-title font-semibold text-black">
                    Kontak & Probation
                  </h2>
                  <h2 className="stat-title font-semibold text-black">Task</h2>
                </div>
                <div className="stats border bg-gray-50 w-[870px] h-[80px]"></div>
                <div className="stats border bg-gray-50 w-[870px] h-[80px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
