import { BsFillCheckCircleFill } from "react-icons/bs";
import { ImWhatsapp } from "react-icons/im";
import PropTypes from "prop-types"

const PricingCard = ({ imageSrc, title, text, features }) => {
  return (
    <div className="w-full md:w-80 bg-white rounded-xl shadow-xl p-6 mx-4 mb-8 transform transition duration-300 hover:scale-110 cursor-default hover:bg-primary group">
      <div className="relative mb-8">
        <img src={imageSrc} alt={title} className="rounded-xl h-auto group-hover:bg-white" />
        <span className="absolute top-0 right-0 bg-yellow-500 text-white px-2 py-1 rounded-bl-xl text-sm font-medium">
          {title}
        </span>
      </div>
      <div className="mb-4">
        <div className="text-justify">
          <span className="text-gray-400 font-regular group-hover:text-white">{text}</span>
        </div>
        <div className="mt-5">
          <button
            className="border-2 rounded-3xl py-2 px-4 border-primary bg-white duration-300 lg:py-3 lg:px-6 group"
          >
            <a
              href="https://wa.me/6285346901814"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-primary lg:gap-2 lg:text-xl lg:font-medium "
            >
              <ImWhatsapp className="w-5 h-5 lg:w-6 lg:h-6" />
              <p>Hubungi Sales</p>
            </a>
          </button>
        </div>
      </div>
      <ul className="text-gray-600 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center mb-2 gap-3 group-hover:text-white">
            <BsFillCheckCircleFill className="text-primary bg-white w-6 h-6 border-2 rounded-full" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;

PricingCard.propTypes = {
  imageSrc: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  features: PropTypes.string,
}
