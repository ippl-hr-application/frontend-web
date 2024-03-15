import Navbar from "../components/Navbar";
import { FaAngleRight } from "react-icons/fa";
import GambarAbout from "../assets/GambarAbout.png";
import Gambar3 from "../assets/Gambar3.png";
import Footer from "../components/Footer";
import AOS from "aos";
import "../../node_modules/aos/dist/aos.css";
import { useEffect} from "react";

const TentangPage = () => {

  // AOS (Animate On Scroll)
  useEffect(() => {
    AOS.init({
      once: false,
    });

  }, []);
  return (
    <>
      <Navbar />
      <div className="container pt-20 md:pt-44 mx-auto">
        <div data-aos="fade-up" className="text-center">
          <div className="text-3xl md:text-5xl font-semibold mb-5 text-blue-900">
            Tentang Kami
          </div>
          <p className="text-lg md:text-2xl font-medium text-gray-400">
            Tingkatkan Efisien Global dengan Meraih
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:mt-28">
          <div className="flex flex-col justify-center md:mr-40">
            <div
              data-aos="fade-up"
              className="text-3xl my-5 md:text-5xl font-semibold text-blue-900"
            >
              WHO WE ARE
            </div>
            <p data-aos="fade-left" className="py-3 text-base md:text-lg">
              Selamat datang di MERAIH, Aplikasi HR yang memudahkan bisnis Anda!
            </p>
            <p data-aos="fade-right" className="py-3 text-base md:text-lg">
              Kami membuat manajemen tim global menjadi lebih mudah dan
              membebaskan bisnis dari kompleksitas. Dengan Meraih, Anda dapat
              dengan mudah mengontrak dan mempekerjakan karyawan di seluruh
              dunia tanpa harus membuka badan hukum tambahan. Kami membantu Anda
              menyederhanakan pengelolaan HR untuk tim global Anda dan
              mengonsolidasikan proses penggajian
            </p>
            <p data-aos="fade-up" className="py-3 text-base md:text-lg">
              Membuat Manajemen Tim Global Tidak Lagi Menjadi Hambatan, Tapi
              Menjadi Peluang untuk Pertumbuhan Bisnis yang Tidak Terbatas!
            </p>
          </div>
          <img
            data-aos="fade-left"
            className="mt-2 md:mt-0"
            src={GambarAbout}
            alt="GambarAbout"
          />
        </div>

        <div
          data-aos="fade-up"
          className="card w-full shadow-xl rounded-xl p-5 my-20 bg-blue-100 flex flex-col md:flex-row items-center"
        >
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

        <Footer />
      </div>
    </>
  );
};

export default TentangPage;
