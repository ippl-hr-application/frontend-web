import React from "react";
import { Tabs } from "flowbite-react";
import { Dropdown } from "flowbite-react";

function CardTabs() {
  return (
    <>
      <div className="stats border w-[920px] h-[260px]">
        <Tabs
          aria-label="Tabs with underline"
          style="underline"
          className="sticky top-0 bg-white focus:ring-0"
        >
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
    </>
  );
}

export default CardTabs;
