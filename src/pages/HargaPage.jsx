import Navbar from "../components/Navbar";
import PricingCard from "../components/PricingCard"; // Mengimpor komponen PricingCard
import GambarHargaBasic from "../assets/GambarHargaBasic.svg";
import GambarHargaPro from "../assets/GambarHargaPro.svg";
import GambarHargaMeraih460 from "../assets/GambarHargaMeraih460.svg";
import Gambar3 from "../assets/Gambar3.png";
import { FaAngleRight } from "react-icons/fa";
import Footer from "../components/Footer";
import { useRef } from "react";

const HargaPage = () => {

   const linkRef = useRef(null);
   // back to MainSection when on click logo Meraih in Footer 
   const goto = (ref) => {
      window.scrollTo({
         top: ref.offsetTop,
         left: 0,
         behavior: "smooth",
      });
   };

   return (
      <>
         <Navbar />
         <div className="container pt-20 md:pt-28 lg:pt-36 mx-auto" ref={linkRef}>
            <div className="text-center flex flex-col justify-center items-center">
               <div className="text-2xl md:text-4xl font-semibold mb-5 text-blue-900 lg:w-2/3">
                  Satu Solusi HR untuk Memenuhi Kebutuhan Operasional dan Strategis
                  Bisnis Anda dengan Sempurna
               </div>
               <p className="text-lg md:text-xl font-medium text-gray-400">
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
            <div className="mx-4 flex flex-col justify-center items-center">
               {/* heading */}
               <div className="text-2xl md:text-4xl font-semibold my-8 text-blue-900 text-center lg:w-2/3">
                  Dirancang untuk Keseimbangan Fleksibilitas dan Transparansi yang
                  Optimal
               </div>
               {/* cards */}
               <div className="flex flex-col gap-14 lg:w-2/3">
                  {/* card 1 */}
                  <div className="relative">
                     <h2 className="absolute top-0 bg-cyan-400 rounded-2xl px-3 py-2 text-white text-base lg:text-xl">Kemudahan integrasi</h2>
                     <div className="border-2 border-cyan-400 bg-transparent rounded-xl px-4 pt-14 pb-4">
                        <p className="text-sm lg:text-lg">Terintegrasi langsung dengan sistem in-house, ERP, LMS, dan dilengkapi dengan API yang dapat disesuaikan</p>
                     </div>
                  </div>
                  {/* card 2 */}
                  <div className="relative">
                     <h2 className="absolute top-0 right-0 bg-blue-500 rounded-2xl px-3 py-2 text-white text-base lg:text-xl">Platform Digital yang aman</h2>
                     <div className="border-2 border-blue-500 bg-transparent rounded-xl px-4 pt-14 pb-4">
                        <p className="text-sm lg:text-lg">Tanpa memerlukan instalasi perangkat lunak di setiap perangkat, serta tidak ada biaya tambahan yang dibutuhkan untuk pemeliharaan rutin seperti pembaruan atau perbaikan teknis</p>
                     </div>
                  </div>
                  {/* card 3*/}
                  <div className="relative">
                     <h2 className="absolute top-0 bg-red-500 rounded-2xl px-3 py-2 text-white text-base lg:text-xl">Training ekstensif</h2>
                     <div className="border-2 border-red-500 bg-transparent rounded-xl px-4 pt-14 pb-4">
                        <p className="text-sm lg:text-lg">Platform yang mudah dipelajari dengan dokumentasi yang lengkap dan onboarding yang dapat disesuaikan dengan kebutuhan Anda</p>
                     </div>
                  </div>
               </div>
            </div>

            {/* Card */}
            <div className="card w-full shadow-xl rounded-xl p-5 my-20 bg-blue-100 flex flex-col md:flex-row items-center">
               <div className="card-content md:flex-1">
                  <div className="flex flex-col md:flex-row items-center">
                     <img src={Gambar3} alt="Gambar3" className="md:mr-5" />
                     <div className="mx-0 md:mx-5">
                        <div className="card-title">
                           <h2 className="text-lg md:text-5xl text-blue-900 font-bold">
                              Aplikasi Meraih merupakan satu solusi untuk semua kebutuhan
                              HR Anda
                           </h2>
                        </div>
                        <p className="text-base md:text-lg text-gray-400 mt-5">
                           Optimalkan pengelolaan operasi HR Anda dengan bantuan solusi
                           terintegrasi dari Meraih.
                        </p>
                     </div>
                  </div>
                  <button className="flex gap-1 items-center border-2 border-primary rounded-3xl py-2 px-4 bg-primary text-white hover:bg-blue-900 hover:border-blue-900 duration-300 lg:gap-2 lg:text-xl lg:font-medium lg:py-3 lg:px-6 mt-4 md:mt-0 ml-auto">
                     <p>Hubungi Sales</p>
                     <FaAngleRight className="w-5 h-5 lg:w-6 lg:h-6" />
                  </button>
               </div>
            </div>
         </div>
         <Footer 
            linkRef={linkRef}
            goto={goto}
         />
      </>
   );
};

export default HargaPage;

