import Navbar from "../components/Navbar"
import GambarMainSaction from "../assets/GambarMainSaction.png"
import { BsFillCheckCircleFill } from "react-icons/bs";
import { ImWhatsapp } from "react-icons/im";
import { FaAngleRight } from "react-icons/fa";
import Wave from 'react-wavify'

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
         <div className="bg-gradient-to-r from-blue-300 shadow-2xl pb-1">
            <div className="pt-20 container mx-auto">
               {/* MainSaction */}
               <div className="mx-4 mt-4  lg:flex lg:flex-row-reverse lg:gap-4 lg:mt-2">
                  {/* gambar */}
                  <img src={GambarMainSaction} alt="GambarMainSaction" className="h-96 lg:mt-8 lg:h-auto" />
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
               </div>
            </div>
            {/* wave */}
            <div className="relative mt-36 lg:mt-0">
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
      </div>
   )
}

export default HomePage