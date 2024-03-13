import Navbar from "../components/Navbar";

import FiturCard from "../components/FiturCard";
import { BsFillCheckCircleFill } from "react-icons/bs"; 
import GambarFitur from "../assets/GambarFitur.png";
import { ImWhatsapp } from "react-icons/im";
import { FaAngleRight } from "react-icons/fa";
import GambarPayroll from "../assets/GambarPayroll.png"
import GambarKehadiran from "../assets/GambarKehadiran.png"
import GambarHRIS from "../assets/GambarHRIS.png"
import GambarExpenseManagement from "../assets/GambarExpenseManagement.png";
import GambarEmployee from "../assets/GambarEmployee.png";
import GambarEmployeeBenefits from "../assets/GambarEmployeeBenefits.png";
import GambarHRHelpDesk from "../assets/GambarHRHelpDesk.png";
import GambarForms from "../assets/GambarForms.png";
import GambarPerformanceManagement from "../assets/GambarPerformanceManagement.png";
import GambarHRAnalytics from "../assets/GambarHRAnalytics.png";
import Gambar3 from "../assets/Gambar3.png";
import AOS from "aos";
import "../../node_modules/aos/dist/aos.css";
import Footer from "../components/Footer";
import { useEffect} from "react";

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

  // AOS (Animate On Scroll)
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="pt-[26px] container mx-auto">
        <div className="relative bg-gradient-to-r from-blue-300 shadow-2xl mb-10 md:pt-10 lg:pt-4">
          <div className="text-center mt-12 md:mt-44">
            <div className="text-3xl md:text-5xl font-semibold mb-3 md:mb-5 text-blue-900">
              Nikmati pengalaman terbaik mengelola HR dan Bisnis Anda
            </div>
            <p className="text-lg mb-4 md:text-2xl font-medium text-gray-400">
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
        <div className="text-center mt-28">
          <div
            data-aos="fade-up"
            className="text-3xl md:text-5xl font-semibold mb-5 text-blue-900"
          >
            Pelajari dan Coba Fitur Terbaik dari HRIS Meraih
          </div>
        </div>
        <div data-aos="fade-up" className="flex flex-wrap justify-center mt-16">
          {/* Fitur 1 */}
          <FiturCard
            imageSrc={GambarPayroll}
            title="Payroll"
            text="Kelola payroll lebih mudah"
          />
          {/* Fitur 2 */}
          <FiturCard
            imageSrc={GambarKehadiran}
            title="Attendance"
            text="Atur absensi, lembur, dan shift"
          />
          {/* Fitur 3 */}
          <FiturCard
            imageSrc={GambarHRIS}
            title="HRIS"
            text="Database dan administrasi lebih efisien"
          />
          {/* Fitur 4 */}
          <FiturCard
            imageSrc={GambarExpenseManagement}
            title="Expense Management"
            text="Reimbursement dan peminjaman"
          />
          {/* Fitur 5 */}
          <FiturCard
            imageSrc={GambarEmployee}
            title="Employee Self Service"
            text="Akses mandiri kebutuhan HR"
          />
          {/* Fitur 6 */}
          <FiturCard
            imageSrc={GambarEmployeeBenefits}
            title="Employee Benefits"
            text="Benefit dan asuransi karyawan"
          />
          {/* Fitur 7 */}
          <FiturCard
            imageSrc={GambarHRHelpDesk}
            title="HR Helpdesk"
            text="Kelola pertanyaan karyawan"
          />
          {/* Fitur 8 */}
          <FiturCard
            imageSrc={GambarForms}
            title="Forms"
            text="Form online terintegrasi HRIS"
          />
          {/* Fitur 9 */}
          <FiturCard
            imageSrc={GambarPerformanceManagement}
            title="Performance Management"
            text="Penilaian kinerja karyawan"
          />
          {/* Fitur 10 */}
          <FiturCard
            imageSrc={GambarHRAnalytics}
            title="HR Analytics"
            text="Visualisasi insight HR"
          />
        </div>

        {/* Card2 */}
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

export default FiturPage;
