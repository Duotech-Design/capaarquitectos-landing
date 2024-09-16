import { FC, useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./Carousel.css";
import {
  AvailableProjects,
  ProjectAsset,
  ProjectAssets,
} from "../../helpers/projectAssets";
import FullScreenImage from "./FullScreenImage";

interface SimpleSliderProps {
  id: AvailableProjects;
}

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const CustomPrevArrow: FC<ArrowProps> = ({ className, onClick }) => {
  return (
    <div
      className={`${className} before:hidden left-[-0px] md:left-[-80px] absolute z-0 sm:z-10`}
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
      className={`${className} before:hidden right-[20px] md:right-[-60px] absolute z-[-10] sm:z-10`}
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

const SimpleSlider: FC<SimpleSliderProps> = ({ id }: SimpleSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const sliderRef = useRef<Slider>(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
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

  const totalImages: number = ProjectAssets[id].images;
  const imageArray = new Array(totalImages).fill(0);

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
    setIsFullScreen(true);
  };

  const handleCloseFullScreen = () => {
    setIsFullScreen(false);
  };

  return (
    <div className="relative">
      <Slider ref={sliderRef} key={id} {...settings} className="relative">
        {imageArray.map((_, index) => (
          <div key={index} className="overflow-hidden">
            <ProjectAsset
              project={id}
              index={index}
              alt={`${id}_${index + 1}`}
              className="w-full sm:h-[500px] 2xl:h-[600px] object-cover object-center cursor-pointer"
              onClick={() => handleImageClick(index)}
            />
          </div>
        ))}
      </Slider>
      <div className="absolute top-0 right-0 backdrop-blur-sm bg-black/30 text-white text-sm p-2 m-2 rounded font-sans font-thin">
        {currentIndex + 1} / {totalImages}
      </div>
      {isFullScreen && (
        <FullScreenImage
          project={id}
          index={currentIndex}
          onClose={handleCloseFullScreen}
          setCurrentIndex={setCurrentIndex}
        />
      )}
    </div>
  );
};

export default SimpleSlider;
