import React from "react";
import Navbar from "../components/Navbar";
import FiturCard from "../components/FiturCard";
import { BsFillCheckCircleFill } from "react-icons/bs"; 
import GambarFitur from "../assets/GambarFitur.png";
import { ImWhatsapp } from "react-icons/im";
import { FaAngleRight } from "react-icons/fa";


const FiturPage = () => {
  const keunggulan = [
    {
      icon: (
        <BsFillCheckCircleFill className="text-green-400 bg-black w-6 h-6 border-2 border-green-900 rounded-full" />
      ),
      title:
        "Memudahkan seluruh operasional dan administrasi HR sehari-hari dengan sistem terotomasi.",
    },
    {
      icon: (
        <BsFillCheckCircleFill className="text-green-400 bg-black w-6 h-6 border-2 border-green-900 rounded-full" />
      ),
      title:
        "Mengelola payroll, absensi, kehadiran, performance, hingga benefit karyawan secara fleksibel, akurat, dan aman.",
    },
    {
      icon: (
        <BsFillCheckCircleFill className="text-green-400 bg-black w-6 h-6 border-2 border-green-900 rounded-full" />
      ),
      title:
        "Menciptakan budaya terstruktur dan mengembangkan potensi karyawan dengan dashboard analisis komprehensif.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="container pt-20 mx-auto">
        <div className="relative bg-gradient-to-r from-blue-300 shadow-2xl mb-10 md:pt-6 lg:pt-4">
          <div className="text-center mt-24">
            <div className="text-3xl md:text-5xl font-semibold mb-5 text-blue-900">
              Nikmati pengalaman terbaik mengelola HR dan Bisnis Anda
            </div>
            <p className="text-lg md:text-2xl font-medium text-gray-400">
              Dapatkan Akses ke Fitur dan Layanan Sesuai Keinginan Anda
            </p>
          </div>
          <div className="mx-2 pb-36 md:flex md:flex-col md:justify-center md:items-center lg:pb-0 lg:flex lg:flex-row-reverse lg:gap-4 lg:mt-2">
            {/* gambar */}
            <img
              src={GambarFitur}
              alt="GambarFitur"
              className="h-80 md:w-1/2 lg:mt-5 lg:h-auto"
            />
            {/* Pargraf dan tombol*/}
            <div className="flex flex-col gap-5 mt-8 lg:w-1/2">
              {/* heading */}
              <div className="flex flex-col gap-4 lg:mb-5">
                <q className="text-blue-900 text-lg font-medium text-center lg:text-2xl lg:mt-8 lg:mb-5 lg:text-start lg:leading-snug lg:font-medium">
                  Fitur dan layanan Meraih
                </q>
                {keunggulan.map((item, index) => (
                  <div key={index}>
                    <div className="flex gap-3 items-center text-sm font-light lg:text-base lg:font-medium lg:text-slate-600">
                      <div>{item.icon}</div>
                      <p>{item.title}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* dua button hub sales dan coba gratis */}
              <div className="flex gap-4 pb-5 lg:mb-36">
                <button className="border-2 rounded-3xl py-2 px-4 border-primary bg-white hover:bg-primary group duration-300 lg:py-3 lg:px-6">
                  <a
                    href="https://wa.me/6285346901814"
                    target="_blank"
                    className="flex items-center gap-1 text-primary group-hover:text-white lg:gap-2 lg:text-xl lg:font-medium"
                  >
                    <ImWhatsapp className="w-5 h-5 lg:w-6 lg:h-6" />
                    <p>Hubungi Sales</p>
                  </a>
                </button>
                <button className="flex gap-1 items-center border-2 border-primary rounded-3xl py-2 px-4 bg-primary text-white hover:bg-blue-900 hover:border-blue-900 duration-300 lg:gap-2 lg:text-xl lg:font-medium lg:py-3 lg:px-6">
                  <p>Coba Gratis</p>
                  <FaAngleRight className="w-5 h-5 lg:w-6 lg:h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Fitur */}
        <div className="flex flex-wrap justify-center mt-16">
          <FiturCard
            imageSrc={GambarHargaBasic}
            title="Sistem HR Basic"
            text="Sistem HR Praktis dengan Fitur Esensial untuk Meningkatkan Efisiensi dan Mengoptimalkan Proses SDM Anda"
            features={[
              "Get started with messaging",
              "Flexible team meetings",
              "5 TB cloud storage",
            ]}
          />
          <FiturCard
            imageSrc={GambarHargaPro}
            title="Sistem HR Pro"
            text="Sistem HR Tingkat Lanjut dengan Fitur Pendorong Produktivitas untuk Optimalisasi Operasional dan Kinerja Bisnis Anda"
            features={[
              "All features in Basic",
              "Flexible call scheduling",
              "15 TB cloud storage",
            ]}
          />
          <FiturCard
            imageSrc={GambarHargaMeraih460}
            title="Sistem HR Meraih 460"
            text="Solusi Terbaik untuk Bisnis dengan Kebutuhan Pengembangan Strategis dan Operasional yang Kompleks"
            features={[
              "All features in Startup",
              "Growth oriented",
              "Unlimited cloud storage",
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default FiturPage;
