import React from "react";
import Navbar from "../components/Navbar";
import PricingCard from "../components/PricingCard"; // Mengimpor komponen PricingCard
import GambarHargaBasic from "../assets/GambarHargaBasic.svg";
import GambarHargaPro from "../assets/GambarHargaPro.svg";
import GambarHargaMeraih460 from "../assets/GambarHargaMeraih460.svg";


const HargaPage = () => {
  return (
    <>
      <Navbar />
      <div className="container pt-20 md:pt-44 mx-auto">
        <div className="text-center">
          <div className="text-3xl md:text-5xl font-semibold mb-5 text-blue-900">
            Satu Solusi HR untuk Memenuhi Kebutuhan Operasional dan Strategis
            Bisnis Anda dengan Sempurna
          </div>
          <p className="text-lg md:text-2xl font-medium text-gray-400">
            Dapatkan Penawaran Terbaik yang Sesuai dengan Kebutuhan Bisnis Anda
          </p>
        </div>

        {/* Harga */}
        <div className="flex flex-wrap justify-center mt-16">
          <PricingCard
            imageSrc={GambarHargaBasic}
            title="Sistem HR Basic"
            text="Sistem HR Praktis dengan Fitur Esensial untuk Meningkatkan Efisiensi dan Mengoptimalkan Proses SDM Anda"
            features={[
              "Get started with messaging",
              "Flexible team meetings",
              "5 TB cloud storage",
            ]}
          />
          <PricingCard
            imageSrc={GambarHargaPro}
            title="Sistem HR Pro"
            text="Sistem HR Tingkat Lanjut dengan Fitur Pendorong Produktivitas untuk Optimalisasi Operasional dan Kinerja Bisnis Anda"
            features={[
              "All features in Basic",
              "Flexible call scheduling",
              "15 TB cloud storage",
            ]}
          />
          <PricingCard
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

        {/* Newpage */}
        <div className="text-center">
          <div className="text-3xl md:text-5xl font-semibold my-8 text-blue-900">
            Dirancang untuk Keseimbangan Fleksibilitas dan Transparansi yang
            Optimal
          </div>
        </div>
      </div>
    </>
  );
};

export default HargaPage;
