// import HomeBg from "@/assets/img/home-bg-r.webp";
// import HomeBg2 from "@/assets/img/philosophy.jpg";
import { useEffect, useRef, useState } from "react";
import CustomButton from "../ui/CustomButton";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { HomeAsset } from "../../helpers/homeAssets";

const customArrayImages = [
  {
    nameProject: "proyecto_el_maderable",
    alt: "proyecto_el_maderable_3",
    selectImagen: 3,
  },
  {
    nameProject: "proyecto_el_maderable",
    alt: "proyecto_el_maderable_4",
    selectImagen: 4,
  },
  {
    nameProject: "proyecto_el_maderable",
    alt: "proyecto_el_maderable_11",
    selectImagen: 11,
  },
  {
    nameProject: "proyecto_el_maderable",
    alt: "proyecto_el_maderable_30",
    selectImagen: 14,
  },
  {
    nameProject: "oficinas_rosmarinus",
    alt: "oficinas_rosmarinus_2",
    selectImagen: 2,
  },
  {
    nameProject: "oficinas_rosmarinus",
    alt: "oficinas_rosmarinus_8",
    selectImagen: 8,
  },
  {
    nameProject: "oficinas_rosmarinus",
    alt: "oficinas_rosmarinus_9",
    selectImagen: 9,
  },
  {
    nameProject: "oficinas_rosmarinus",
    alt: "oficinas_rosmarinus_11",
    selectImagen: 11,
  },
  {
    nameProject: "oficinas_rosmarinus",
    alt: "oficinas_rosmarinus_19",
    selectImagen: 16,
  },
  {
    nameProject: "casa_dplusd",
    alt: "casa_dplusd_2",
    selectImagen: 2,
  },
  {
    nameProject: "casa_dplusd",
    alt: "casa_dplusd_3",
    selectImagen: 3,
  },
  {
    nameProject: "casa_dplusd",
    alt: "casa_dplusd_15",
    selectImagen: 15,
  },
] as {
  nameProject: "proyecto_el_maderable" | "oficinas_rosmarinus" | "casa_dplusd";
  alt: string;
  selectImagen: number;
}[];

const Home = () => {
  const { t } = useTranslation("global");
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [previousImageIndex, setPreviousImageIndex] = useState<null | number>(
    null
  );
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();

  const totalImages: number = customArrayImages.length;

  useEffect(() => {
    if (previousImageIndex !== null) {
      setAnimate(true);
      const timer = setTimeout(() => {
        setAnimate(false);
        setPreviousImageIndex(currentImageIndex);
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      setPreviousImageIndex(currentImageIndex);
    }
  }, [currentImageIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
    }, 6000);

    return () => clearInterval(interval);
  }, [totalImages]);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  const handleImageClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const handleButtonClick = () => {
    navigate("/contact-us");
  };

  useEffect(() => {
    if (isImageLoaded && isIntersecting) {
      const timer = setTimeout(() => {}, 2000);
      return () => clearTimeout(timer);
    }
  }, [isImageLoaded, isIntersecting]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <section
      id="home"
      className="relative mx-auto px-2 sm:px-6 lg:px-8 min-h-screen overflow-hidden bg-gradient-to-t from-darkBlue"
    >
      {customArrayImages.map((custom, index) => (
        <div key={index}>
          {index === previousImageIndex && (
            <HomeAsset
              project={custom.nameProject}
              index={custom.selectImagen}
              onLoad={handleImageLoad}
              onClick={handleImageClick}
              alt={custom.alt}
              className="absolute inset-0 object-cover w-full h-[100vh] object-center z-0"
            />
          )}
          {index === currentImageIndex && (
            <HomeAsset
              project={custom.nameProject}
              index={custom.selectImagen}
              onLoad={handleImageLoad}
              onClick={handleImageClick}
              alt={custom.alt}
              className={`absolute inset-0 object-cover w-full h-[100vh] object-center z-0 transition-transform duration-3000 ${
                animate ? "animate-wipe-up" : ""
              }`}
            />
          )}
        </div>
      ))}
      {!isImageLoaded && (
        <div className="absolute inset-0 bg-transparent opacity-50 z-10 flex justify-center items-center">
          <div className="spinner"></div>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black opacity-65 z-10"></div>

      <div className="relative flex items-center justify-center text-3xl lg:text-7xl z-20">
        <div className="flex flex-col gap-y-8 justify-center items-center h-screen text-white">
          <h1 className="text-focus-in text-shadow-drop-center">
            {t("hero.title")}
          </h1>
          <CustomButton text={t("hero.button")} onClick={handleButtonClick} />
        </div>
      </div>
    </section>
  );
};

export default Home;