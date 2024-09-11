import HomeBg from "@/assets/img/home-bg-r.webp";
import { useEffect, useRef, useState } from "react";
import CustomButton from "../ui/CustomButton";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom"; // Importa el hook useNavigate
import "./Home.css";

const Home = () => {
  const { t } = useTranslation("global");
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isFirstAnimationDone, setIsFirstAnimationDone] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);

  const imgRef = useRef<HTMLImageElement>(null);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  // Usa el hook useNavigate para la navegación
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/contact"); // Redirige a la página de contacto
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (isImageLoaded && isIntersecting) {
      const timer = setTimeout(() => {
        setIsFirstAnimationDone(true);
      }, 2000);
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
    <section id="home" className="relative mx-auto px-2 sm:px-6 lg:px-8 min-h-screen overflow-hidden bg-gradient-to-t from-darkBlue">
      <img
        ref={imgRef}
        src={HomeBg}
        alt="image"
        onLoad={handleImageLoad}
        className={`absolute inset-0 object-cover w-full h-[100vh] object-center z-0 ${
          isFirstAnimationDone ? "kenburns-right" : "fade-in"
        }`}
      />
      {!isImageLoaded && (
        <div className="absolute inset-0 bg-transparent opacity-50 z-10 flex justify-center items-center">
          <div className="spinner"></div>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black opacity-30 z-10"></div>

      <div className="relative flex items-center justify-center text-3xl lg:text-7xl z-20">
        <div className="flex flex-col gap-y-8 justify-center items-center h-screen text-white">
          <h1 className="text-focus-in text-shadow-drop-center">
            {t("hero.title")}
          </h1>
          {/* Asignar el evento onClick al botón */}
          <CustomButton text={t("hero.button")} onClick={handleButtonClick} />
        </div>
      </div>
    </section>
  );
};

export default Home;
