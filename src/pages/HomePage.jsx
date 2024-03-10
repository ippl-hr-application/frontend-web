import Navbar from "../components/Navbar"
import GambarMainSaction from "../assets/GambarMainSaction.png"
import { BsFillCheckCircleFill } from "react-icons/bs";
import { ImWhatsapp } from "react-icons/im";
import { FaAngleRight } from "react-icons/fa";
import Wave from 'react-wavify';
import iconKunci from "../assets/iconKunci.svg";
import iconWa from "../assets/iconWA.svg";
import iconBangunan from "../assets/iconBangunan.svg";
import kontenSatu from "../assets/kontenSatu.png"
import kontenDua from "../assets/KontenDua.png";

const HomePage = () => {
   const keunggulan = [
      {
         icon: <BsFillCheckCircleFill className="text-green-400 bg-black w-6 h-6 border-2 border-green-900 rounded-full" />,
         title: "Optimalkan lebih dari 80% kapasitas HR untuk administrasi dan operasional."
      },
      {
         icon: <BsFillCheckCircleFill className="text-green-400 bg-black w-6 h-6 border-2 border-green-900 rounded-full" />,
         title: "Monitoring progress onboarding dengan Lebih Teliti dan Efektif."
      },
      {
         icon: <BsFillCheckCircleFill className="text-green-400 bg-black w-6 h-6 border-2 border-green-900 rounded-full" />,
         title: "Rancang alur kerja yang transparan dan terstruktur."
      },
      {
         icon: <BsFillCheckCircleFill className="text-green-400 bg-black w-6 h-6 border-2 border-green-900 rounded-full" />,
         title: "Dokumentasikan komponen iffboarding dalam satu dashboard."
      },
   ]

   return (
      <div>
         <Navbar />
         <div className="pt-[73px] container mx-auto">
            {/* Mainsaction */}
            <div className="relative pt-4 bg-gradient-to-r from-blue-300 shadow-2xl mb-10 md:pt-6 lg:pt-4">
               {/* konten mainsaction */}
               <div className="mx-4 pb-36 md:flex md:flex-col md:justify-center md:items-center lg:pb-0 lg:flex lg:flex-row-reverse lg:gap-4 lg:mt-2">
                  {/* gambar */}
                  <img src={GambarMainSaction} alt="GambarMainSaction" className="h-96 md:w-1/2 lg:mt-8 lg:h-auto" />
                  {/* Pargraf dan tombol*/}
                  <div className="flex flex-col gap-5 mt-6 lg:w-1/2">
                     {/* heading */}
                     <div className="flex flex-col gap-4 lg:mb-5">
                        <q className="text-blue-900 text-xl font-bold text-center lg:text-5xl lg:mt-8 lg:mb-5 lg:text-start lg:leading-snug lg:font-semibold">
                           Automasi payroll dan HRIS untuk pertumbuhan bisnis yang lebih cepat.
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
               {/* wave */}
               <div>
                  <Wave mask="url(#mask)" fill="#86CEFF" className="absolute bottom-0" options={{
                     height: 10,
                     amplitude: 30,
                     speed: 0.40,
                     points: 3
                  }}>
                     <defs>
                        <linearGradient id="gradient" gradientTransform="rotate(180)">
                           <stop offset="0" stopColor="white" />
                           <stop offset="0.9" stopColor="black" />
                        </linearGradient>
                        <mask id="mask">
                           <rect x="0" y="0" className="w-full" height="200" fill="url(#gradient)" />
                        </mask>
                     </defs>
                  </Wave>
                  <Wave
                     mask="url(#mask)"
                     fill="#0099ff"
                     className="absolute bottom-0"
                     options={{
                        height: 50,
                        amplitude: 30,
                        speed: 0.40,
                        points: 3
                     }}
                  >
                     <defs>
                        <linearGradient id="gradient" gradientTransform="rotate(180)">
                           <stop offset="0" stopColor="white" />
                           <stop offset="0.9" stopColor="black" />
                        </linearGradient>
                        <mask id="mask">
                           <rect x="0" y="0" className="w-full" height="200" fill="url(#gradient)" />
                        </mask>
                     </defs>
                  </Wave>
                  <Wave
                     mask="url(#mask)"
                     fill="#2051E5"
                     className="absolute bottom-0"
                     options={{
                        height: 80,
                        amplitude: 30,
                        speed: 0.40,
                        points: 4
                     }}
                  >
                     <defs>
                        <linearGradient id="gradient" gradientTransform="rotate(180)">
                           <stop offset="0" stopColor="white" />
                           <stop offset="0.9" stopColor="black" />
                        </linearGradient>
                        <mask id="mask">
                           <rect x="0" y="0" className="w-full" height="200" fill="url(#gradient)" />
                        </mask>
                     </defs>
                  </Wave>
               </div>
            </div>
            {/* Jasa Perusahaan */}
            <div className="mx-4">
               {/* section satu */}
               <div className="mb-8">
                  {/* heading */}
                  <div className="flex flex-col gap-3 text-center">
                     <h1 className="text-blue-900 font-bold text-2xl lg:text-4xl">Jasa Perusahaan</h1>
                     <p className="text-base font-light text-slate-700 lg:text-lg">Manajemen data terintegrasi dengan aplikasi HRIS online</p>
                  </div>
                  {/* konten */}
                  <div className="flex flex-col lg:flex lg:flex-row lg:items-center">
                     <img
                        src={kontenSatu}
                        alt="Gambar Konten Jasa perusahaan satu"
                        className="lg:max-xl:w-1/2"
                     />
                     <div className="flex flex-col gap-4 xl:mr-20">
                        {/* kunci */}
                        <div className="flex gap-4 lg:gap-6">
                           <img
                              src={iconKunci}
                              alt="icon kunci"
                              className="border-2 rounded-full p-2 shadow-md bg-white w-16 h-16"
                           />
                           <div className="flex flex-col gap-2 ">
                              <h1 className="text-lg font-semibold text-blue-950 lg:text-xl lg:font-bold">Akses data secara online</h1>
                              <p className="text-sm font-light lg:font-normal lg:text-base">Data tersimpan dalam server yang memenuhi standar keamanan internasional dan dapat diakses secara daring kapan saja diperlukan.</p>
                           </div>
                        </div>
                        {/* wa */}
                        <div className="flex gap-4 lg:gap-6">
                           <img
                              src={iconWa}
                              alt="icon kunci"
                              className="border-2 rounded-full p-2 shadow-md bg-white w-16 h-16"
                           />
                           <div className="flex flex-col gap-2 ">
                              <h1 className="text-lg font-semibold text-blue-950 lg:text-xl lg:font-bold">Mengurangi Miskomunikasi</h1>
                              <p className="text-sm font-light lg:font-normal lg:text-base">Mengelola alur informasi, persetujuan, dan tugas secara komprehensif di seluruh perusahaan.</p>
                           </div>
                        </div>
                        {/* bangunan */}
                        <div className="flex gap-4 lg:gap-6">
                           <img
                              src={iconBangunan}
                              alt="icon kunci"
                              className="border-2 rounded-full p-2 shadow-md bg-white w-16 h-16"
                           />
                           <div className="flex flex-col gap-2 ">
                              <h1 className="text-lg font-semibold text-blue-950 lg:text-xl lg:font-bold">Automasikan Rekrutmen</h1>
                              <p className="text-sm font-light lg:font-normal lg:text-base">Pastikan tidak ada yang terlewat dalam seluruh proses dari perekrutan hingga offboarding dengan mengurangi penggunaan dokumen fisik.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               {/* section dua */}
               <div className="mt-10 md:mt-14 lg:mt-0 lg:flex lg:items-center lg:justify-evenly">
                  {/* konten */}
                  <div className="flex flex-col gap-5 items-center lg:gap-8 lg:items-start lg:w-2/3 xl:w-1/2">
                     <div className="flex flex-col md:text-center md:items-center gap-6 lg:text-start">
                        <h1 className="text-center font-bold text-blue-900 text-2xl lg:text-start lg:text-4xl lg:leading-relaxed">Meraih Platform HR dengan semua yang Anda butuhkan, untuk semua orang</h1>
                        {/* gambar */}
                        <img
                           src={kontenDua}
                           alt="Gambar Konten Jasa perusahaan dua"
                           className="md:w-2/3 lg:hidden"
                        />
                        <p className="text-sm font-light leading-6 lg:font-normal lg:text-base">
                           Kami membuat manajemen tim global menjadi sangat mudah, membebaskan bisnis dari kompleksitas. Dengan Meraih, Anda dapat dengan mudah mempekerjakan kontraktor dan karyawan di seluruh dunia tanpa perlu membuka badan hukum tambahan. Kami membantu Anda merampingkan pengelolaan HR untuk tim global Anda dan mengonsolidasikan proses penggajian.
                        </p>
                     </div>
                     {/* tombol  hub sales dan coba gratis */}
                     <div className="flex gap-4 pb-5">
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
                  {/* gambar mode web atau lg */}
                  <div>
                     <img
                        src={kontenDua}
                        alt="Konten Jasa perusahaan dua"
                        className="hidden lg:flex"
                     />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default HomePage