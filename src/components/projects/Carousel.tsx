import { FC } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./Carousel.css";
import { AvailableProjects, ProjectAsset, ProjectAssets } from "../../helpers/projectAssets";

interface SimpleSliderProps {
  id: AvailableProjects
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

  const totalImages: number = ProjectAssets[id].images;
  const imageArray = new Array(totalImages).fill(0);

  return (
    <Slider {...settings} className="relative">
      {[
        ...imageArray.map((_, index) => {
          return <div key={index} className="overflow-hidden">
            <ProjectAsset
              src={`${id}/${index + 1}.webp`}
              alt={`${id}_${index + 1}`}
              className="w-full h-[400px] 2xl:h-[500px] bg-gray-300"
            />
          </div>
        })
      ]}
    </Slider>
  );
};

export default SimpleSlider;