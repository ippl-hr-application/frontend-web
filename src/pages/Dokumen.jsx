import React from "react";
import Navbar from "../components/Navbar";

function Dokumen() {
  return (
    <div>
      <Navbar />
      <div className="pt-[73px] container mx-auto">
        <div className="relative mb-10 md:pt-6 lg:pt-4 mt-8">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body justify-between">
              <div>
                <h2 className="mb-2 text-blue-500">Company</h2>
                <h1 className="font-semibold text-blue-800 text-[2rem] mb-10">
                  Document Template
                </h1>
                <div className="flex gap-4">
                  <button className="border-2 rounded-full py-1 px-3 border-primary bg-white hover:bg-primary group duration-300 lg:py-2 lg:px-4">
                    <a
                      href="https://wa.me/6285346901814"
                      target="_blank"
                      className="flex items-center gap-1 text-primary group-hover:text-white lg:gap-2 lg:text-lg lg:font-medium"
                    >
                      <p className="text-xs">Upload Template</p>
                    </a>
                  </button>

                  <button className="bg-primary rounded-full py-1 px-3 hover:bg-white hover:border-2 hover:border-primary group duration-300 lg:py-2 lg:px-4">
                    <a
                      href="https://wa.me/6285346901814"
                      target="_blank"
                      className="flex items-center gap-1 text-white group-hover:text-primary lg:gap-2 lg:text-lg lg:font-medium"
                    >
                      <p className="text-xs">Create Template</p>
                    </a>
                  </button>
                </div>
              </div>
              <div className="stats border w-[500px] h-[150px]">
                <div className="stat gap-2">
                  <div className="stat-title font-semibold text-black text-lg">
                    Surat Keterangan Kerja
                  </div>
                  <div className="text-sm text-gray-500">
                    Informasi bahwa benar pekerja dan sedang aktif bekerja di
                    perusahaan
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dokumen;
