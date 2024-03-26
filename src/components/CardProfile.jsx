import React from "react";

function CardProfile({user}) {
  // console.log(user)
  return (
    <>
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
    </>
  );
}

export default CardProfile;
