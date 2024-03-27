const FiturCard = ({ imageSrc, title, text }) => {
   return (
      <div className="w-full md:w-80 bg-white rounded-xl shadow-xl p-6 mx-4 mb-8 transform transition duration-300 hover:scale-105">
         <div className="relative mb-8">
            <img src={imageSrc} alt={title} className="rounded-xl h-auto mb-5" />
            <span className="text-2xl font-bold">{title}</span>
            <div className="w-1/4 h-px bg-red-600 border-t-2 border-red-600 my-2"></div>
         </div>
         {text && ( // Memeriksa apakah ada teks yang diberikan
            <div className="mb-4">
               <div className="text-justify">
                  <span className="text-gray-400 font-normal">{text}</span>
               </div>
            </div>
         )}
      </div>
   );
};

export default FiturCard;