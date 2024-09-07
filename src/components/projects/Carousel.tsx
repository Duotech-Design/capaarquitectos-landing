import Philosophy from "@/assets/img/philosophy.jpg";
import { FC } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./Carousel.css";

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}
const CustomPrevArrow: FC<ArrowProps> = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className}  before:hidden right-10 absolute`}
     
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 text-black"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={0.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 12H5M12 19l-7-7 7-7"
        />
      </svg>
    </div>
  );
};

// Flecha derecha (next)
const CustomNextArrow: FC<ArrowProps> = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className}  before:hidden right-0 absolute`}
     
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 text-black"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={0.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 12h14M12 5l7 7-7 7"
        />
      </svg>
    </div>
  );
};

const SimpleSlider: FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <Slider {...settings} className="border-2 border-black relative">
      <div className="border-2 border-yellow-400">
        <img src={Philosophy} alt="philosophy" className="w-full h-auto" />
      </div>
      <div>
        <img src={Philosophy} alt="philosophy" className="w-full h-auto" />
      </div>
    </Slider>
  );
};

export default SimpleSlider;
