import React from "react";
import Navbar from "../components/Navbar";
import GambarAbout from "../assets/GambarAbout.png";
import Gambar3 from "../assets/Gambar3.png";
import Footer from "../components/Footer";

const TentangPage = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <div className="text-center">
          <div className="text-5xl font-semibold mb-5 text-blue-900">
            Tentang Kami
          </div>
          <p className="text-2xl font-medium text-gray-400">
            Tingkatkan Efisien Global dengan Meraih
          </p>
        </div>

        <div className="flex mt-10">
          <div className="flex flex-col justify-center mr-10">
            <div className="text-5xl font-semibold text-blue-900">
              WHO WE ARE
            </div>
            <p className="py-3 text-lg">
              Selamat datang di MERAIH, Aplikasi HR yang memudahkan bisnis Anda!
            </p>
            <p className="py-3 text-lg">
              Kami membuat manajemen tim global menjadi lebih mudah dan
              membebaskan bisnis dari kompleksitas. Dengan Meraih, Anda dapat
              dengan mudah mengontrak dan mempekerjakan karyawan di seluruh
              dunia tanpa harus membuka badan hukum tambahan. Kami membantu Anda
              menyederhanakan pengelolaan HR untuk tim global Anda dan
              mengonsolidasikan proses penggajian
            </p>
            <p className="py-3 text-lg">
              Membuat Manajemen Tim Global Tidak Lagi Menjadi Hambatan, Tapi
              Menjadi Peluang untuk Pertumbuhan Bisnis yang Tidak Terbatas!
            </p>
          </div>
          <img className="mt-2" src={GambarAbout} alt="GambarAbout" />
        </div>
        <div className="card w-full shadow-xl rounded-xl p-5 mt-10 bg-blue-100 flex items-center">
          <div className="flex-none mr-5">
            <img src={Gambar3} alt="Gambar3" />
          </div>
          <div className="card-content flex-1">
            <div className="card-title">
              <h2 className="text-5xl text-blue-900 font-bold">
                Aplikasi Meraih merupakan satu solusi untuk semua kebutuhan HR
                Anda
              </h2>
            </div>
            <p className="text-base text-gray-400 mt-5">
              Optimalkan pengelolaan operasi HR Anda dengan bantuan solusi
              terintegrasi dari Meraih.
            </p>
          </div>
          <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Tombol
          </button>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default TentangPage;
