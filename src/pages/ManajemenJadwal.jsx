import React from "react";
import Navbar from "../components/Navbar";
import { Datepicker } from "flowbite-react";
import { Card } from "flowbite-react";
import {Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow,} from "flowbite-react";
import { FaAngleRight } from "react-icons/fa";
import { Dropdown } from "flowbite-react";
import GambarSearch from "../assets/GambarSearch.png";

export default function ManajemenJadwal() {
  return (
    <>
      <Navbar />
      <div className="container pt-20 md:pt-28 lg:pt-36 mx-auto">
        <div className="flex flex-col justify-center bg-gray-200">
          <div className="text-2xl md:text-4xl font-semibold mb-5 text-blue-900 lg:w-2/3">
            Attendance
          </div>
        </div>
        {/* Datepciker */}
        <div className="my-10 flex justify-between">
          <Datepicker className="w-64 h-12" />
          <label className="input input-bordered flex items-center gap-2 text-sm">
            <img src={GambarSearch} alt="GambarSearch" />
            <input
              type="text"
              className="grow focus:ring-0 border-none"
              placeholder="Search..."
            />
          </label>
        </div>

        {/* Card */}
        <Card className="w-full flex">
          <div className="px-4 py-6 flex justify-between">
            <div className="flex flex-col">
              <p className="text-base font-medium tracking-tight text-gray-900 dark:text-white">
                Present
              </p>
              <p className="text-xl my-2 text-blue-700">0</p>
              <p className="text-sm text-gray-700 dark:text-gray-400">
                On time
              </p>
              <p className="text-xl my-2 text-blue-700">0</p>
              <p className="text-sm text-gray-700 dark:text-gray-400">
                Late clock in
              </p>
              <p className="text-xl my-2 text-blue-700">0</p>
              <p className="text-sm text-gray-700 dark:text-gray-400">
                Early clock in
              </p>
            </div>
            <div className="border-l border-gray-200 mx-4"></div>
            <div className="flex flex-col">
              <p className="text-base font-medium tracking-tight text-gray-900 dark:text-white">
                Not Present
              </p>
              <p className="text-xl my-2 text-blue-700">0</p>
              <p className="text-sm text-gray-700 dark:text-gray-400">Absent</p>
              <p className="text-xl my-2 text-blue-700">0</p>
              <p className="text-sm text-gray-700 dark:text-gray-400">
                No clock in
              </p>
              <p className="text-xl my-2 text-blue-700">0</p>
              <p className="text-sm text-gray-700 dark:text-gray-400">
                No clock out
              </p>
              <p className="text-xl my-2 text-blue-700">0</p>
              <p className="text-sm text-gray-700 dark:text-gray-400">
                No clock out
              </p>
            </div>
            <div className="border-l border-gray-200 mx-4"></div>
            <div className="flex flex-col">
              <p className="text-base font-medium tracking-tight text-gray-900 dark:text-white">
                Away
              </p>
              <p className="text-xl my-2 text-blue-700">0</p>
              <p className="text-sm text-gray-700 dark:text-gray-400">
                Day off
              </p>
              <p className="text-xl my-2 text-blue-700">0</p>
              <p className="text-sm text-gray-700 dark:text-gray-400">
                Timeoff
              </p>
            </div>
            <div className="border-l border-gray-200 mx-4"></div>
            <div className="flex flex-col">
              <button className="flex gap-1 items-center py-2 px-4 text-blue-700 duration-300 lg:gap-2 lg:text-sm lg:font-medium lg:py-3 lg:px-6">
                <p>See details</p>
                <FaAngleRight className="w-5 h-5 lg:w-6 lg:h-6" />
              </button>
            </div>
          </div>
        </Card>

        {/* Tabel */}
        <div className="overflow-x-auto my-10">
          <Table hoverable>
            <TableHead>
              <TableHeadCell>Employee name</TableHeadCell>
              <TableHeadCell>Employee ID</TableHeadCell>
              <TableHeadCell>Date</TableHeadCell>
              <TableHeadCell>Shift</TableHeadCell>
              <TableHeadCell>Schedule in</TableHeadCell>
              <TableHeadCell>Clock in</TableHeadCell>
              <TableHeadCell>Clock out</TableHeadCell>
              <TableHeadCell>Attendance code</TableHeadCell>
              <TableHeadCell>Time off code</TableHeadCell>
              <TableHeadCell>Overtime</TableHeadCell>
              <TableHeadCell>
                <span className="sr-only">Edit</span>
              </TableHeadCell>
            </TableHead>
            <TableBody className="divide-y">
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {'Apple MacBook Pro 17"'}
                </TableCell>
                <TableCell>Sliver</TableCell>
                <TableCell>Laptop</TableCell>
                <TableCell>$2999</TableCell>
                <TableCell>$99</TableCell>
                <TableCell>$99</TableCell>
                <TableCell>$99</TableCell>
                <TableCell>$99</TableCell>
                <TableCell>$99</TableCell>
                <TableCell>$99</TableCell>
                <TableCell>
                  <Dropdown label="Action">
                    <Dropdown.Item>Edit</Dropdown.Item>
                    <Dropdown.Item>View History Log</Dropdown.Item>
                    <Dropdown.Item className="text-red-600">
                      Delete
                    </Dropdown.Item>
                  </Dropdown>
                </TableCell>
              </TableRow>
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  Magic Mouse 2
                </TableCell>
                <TableCell>Black</TableCell>
                <TableCell>Accessories</TableCell>
                <TableCell>$99</TableCell>
                <TableCell>$99</TableCell>
                <TableCell>$99</TableCell>
                <TableCell>$99</TableCell>
                <TableCell>$99</TableCell>
                <TableCell>$99</TableCell>
                <TableCell>$99</TableCell>
                <TableCell>
                  <Dropdown label="Action">
                    <Dropdown.Item>Edit</Dropdown.Item>
                    <Dropdown.Item>View History Log</Dropdown.Item>
                    <Dropdown.Item className="text-red-600">
                      Delete
                    </Dropdown.Item>
                  </Dropdown>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}
