import { FC, useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./Carousel.css";
import {
  AvailableProjects,
  ProjectAsset,
  ProjectAssets,
} from "../../helpers/projectAssets";

interface SimpleSliderProps {
  id: AvailableProjects;
}

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  isFullScreen?: boolean;
}

const CustomPrevArrow: FC<ArrowProps> = ({ className, onClick, isFullScreen }) => {
  return (
    <div
      className={`${className} before:hidden left-0 ${isFullScreen ? "" : "md:left-[-80px]"} absolute z-10`}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`w-5 h-5 md:w-10 md:h-10 ${isFullScreen ? "text-white" : "text-white md:text-black"} backdrop-blur-sm rounded-full`}
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

const CustomNextArrow: FC<ArrowProps> = ({ className, onClick, isFullScreen }) => {
  return (
    <div
      className={`${className} before:hidden right-0 ${isFullScreen ? "md:right-5" : "md:right-[-60px]"} absolute z-10`}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`w-5 h-5 md:w-10 md:h-10 ${isFullScreen ? "text-white" : "text-white md:text-black "} backdrop-blur-sm  rounded-full`}
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

const SimpleSlider: FC<SimpleSliderProps> = ({ id }: SimpleSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const sliderRef = useRef<Slider>(null);
  const fullScreenSliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: currentIndex,
    nextArrow: <CustomNextArrow isFullScreen={isFullScreen} />,
    prevArrow: <CustomPrevArrow isFullScreen={isFullScreen} />,
    afterChange: (current: number) => setCurrentIndex(current),
  };

  useEffect(() => {
    setCurrentIndex(0);
  }, [id]);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(currentIndex);
    }
  }, [currentIndex]);

  useEffect(() => {
    if (isFullScreen && fullScreenSliderRef.current) {
      fullScreenSliderRef.current.slickGoTo(currentIndex);
    }
  }, [isFullScreen, currentIndex]);

  const totalImages: number = ProjectAssets[id].images;
  const imageArray = new Array(totalImages).fill(0);

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
    setIsFullScreen(true);
  };

  const handleCloseFullScreen = () => {
    setIsFullScreen(false);
  };

  const renderSlider = (ref: React.RefObject<Slider>, classCustom: string, isFullScreen: boolean = false) => (
    <Slider ref={ref} key={id} {...settings} className="relative">
      {imageArray.map((_, index) => (
        <div key={index} className="overflow-hidden">
          <ProjectAsset
            isFullScreen={isFullScreen}
            project={id}
            index={index}
            alt={`${id}_${index + 1}`}
            className={classCustom}
            onClick={() => handleImageClick(index)}
          />
        </div>
      ))}
    </Slider>
  );

  return (
    <div className="relative">
      {renderSlider(sliderRef, "w-full sm:h-[450px] 2xl:h-[600px] object-cover object-center cursor-pointer")}
      <div className="absolute top-0 right-0 backdrop-blur-sm bg-black/30 text-white text-sm p-2 m-2 rounded font-sans font-thin">
        {currentIndex + 1} / {totalImages}
      </div>
      {isFullScreen &&
        ReactDOM.createPortal(
          <div className="fixed inset-0 bg-black backdrop-blur-lg bg-opacity-80 flex justify-center items-center z-50">
            <div className="relative max-w-4xl max-h-full">
              <button
                className={`z-50 absolute -top-10 -right-10 ${isFullScreen ? "md:top-2 md:right-1 " : "md:-top-2 md:-right-24"} text-white px-2.5`}
                onClick={handleCloseFullScreen}
              >
                <svg
                  className="h-8 w-8 hover:text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={0.8}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="w-[300px] sm:w-full">
                {renderSlider(
                    fullScreenSliderRef, 
                    "w-full sm:w-full sm:h-[600px] 2xl:h-[750px] object-scale-down object-center cursor-pointer",
                    true)}
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

export default SimpleSlider;