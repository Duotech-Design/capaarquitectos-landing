import { FC } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./Carousel.css";
import ProjectUnoImgUno from "@/assets/img/project_uno/1.jpg";
import ProjectUnoImgDos from "@/assets/img/project_uno/2.jpg";
import ProjectUnoImgTres from "@/assets/img/project_uno/3.jpg";
import ProjecUnoImgCuatro from "@/assets/img/project_uno/4.jpg";
import ProjectDosImgUno from "@/assets/img/project_dos/1.jpg";
import ProjectDosImgDos from "@/assets/img/project_dos/2.jpg";
import ProjectDosImgTres from "@/assets/img/project_dos/3.jpg";
import ProjectDosImgCuatro from "@/assets/img/project_dos/4.jpg";
import ProjectTresImgUno from "@/assets/img/project_tres/1.jpg";
import ProjectTresImgDos from "@/assets/img/project_tres/2.jpg";
import ProjectTresImgTres from "@/assets/img/project_tres/3.jpg";
import ProjectTresImgCuatro from "@/assets/img/project_tres/4.jpg";

interface SimpleSliderProps {
  id: number;
}

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}
const CustomPrevArrow: FC<ArrowProps> = ({ className, onClick }) => {
  return (
    <div
      className={`${className}  before:hidden left-[-0px] md:left-[-80px] absolute z-10`}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 text-black backdrop-blur-sm bg-white/30 rounded-full"
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

const CustomNextArrow: FC<ArrowProps> = ({ className, onClick }) => {
  return (
    <div
      className={`${className}  before:hidden right-[20px] md:right-[-60px] absolute`}
     
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 text-black backdrop-blur-sm bg-white/30 rounded-full"
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

const SimpleSlider: FC<SimpleSliderProps> = (
  { id }: SimpleSliderProps
) => {
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
    <Slider {...settings} className="relative">
      <div className="overflow-hidden">
        <img src={
          id === 1 ? ProjectUnoImgUno : id === 2 ? ProjectDosImgUno : ProjectTresImgUno
        } alt="project" className="w-full h-[400px] 2xl:h-[500px] object-cover object-center" />
      </div>
      <div className="overflow-hidden">
        <img src={
          id === 1 ? ProjectUnoImgDos : id === 2 ? ProjectDosImgDos : ProjectTresImgDos
        } alt="project" className="w-full h-[400px] 2xl:h-[500px] object-cover object-center" />
      </div>
      <div className="overflow-hidden">
        <img src={
          id === 1 ? ProjectUnoImgTres : id === 2 ? ProjectDosImgTres : ProjectTresImgTres
        } alt="project" className="w-full h-[400px] 2xl:h-[500px] object-cover object-center" />
      </div>
      <div className="overflow-hidden">
        <img src={
          id === 1 ? ProjecUnoImgCuatro : id === 2 ? ProjectDosImgCuatro : ProjectTresImgCuatro
        } alt="project" className="w-full h-[400px] 2xl:h-[500px] object-cover object-center" />
      </div>
    </Slider>
  );
};

export default SimpleSlider;
