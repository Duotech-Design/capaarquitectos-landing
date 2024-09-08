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
      className={`${className}  before:hidden left-[-0px] md:left-[-80px] absolute  z-0 sm:z-10`}
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
      className={`${className}  before:hidden right-[20px] md:right-[-60px] absolute z-[-10] sm:z-10`}
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
    dots: false,
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
              project={id}
              index={index}
              alt={`${id}_${index + 1}`}
              className="w-full h-[500px] 2xl:h-[600px] object-cover object-center"
            />
          </div>
        })
      ]}
    </Slider>
  );
};

export default SimpleSlider;
