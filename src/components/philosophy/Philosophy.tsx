import Start from "@/assets/svg/icons/star.svg";
import { useTranslation } from "react-i18next";
import CustomButton from "../ui/CustomButton";
import { useNavigate } from "react-router-dom";
import "./Philosophy.css";

const Philosophy = () => {
  const { t } = useTranslation("global");
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/contact-us"); // Redirige a la página de contacto
  };

  return (
    <div className="bg-philosophy-bg bg-cover bg-center bg-fixed">
      {/* Contenedor principal con padding igual en ambos lados solo en móvil */}
      <div className="inset-0 bg-darkGray opacity-65 z-0 flex flex-col px-4 md:px-6 lg:px-8 text-white py-10 md:py-0 md:min-h-screen">
        {/* Título */}
        <div className="mt-20 md:mt-32 pb-1 md:pb-20 font-bold sm:font-thin text-base md:text-xl lg:text-2xl 2xl:text-3xl drop-shadow-sm text-gray-200 text-focus-in">
          <h3>{t("philosophy.title")}</h3>
        </div>

        {/* Contenido principal */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-1 md:gap-y-4 2xl:gap-y-8">
          <div className="col-span-2"></div>

          {/* Primer bloque de texto e imagen */}
          <div
            className="col-span-10 text-focus-in flex gap-1 text-wrap w-full"
            style={{ animationDelay: "0s" }}
          >
            <img
              src={Start}
              alt="Star Icon"
              className="h-3 w-3 md:h-6 md:w-6 rotate-center"
              style={{ animationDelay: "0.5s" }}
            />
            <p className="leading-relaxed subpixel-antialiased text-xs font-bold sm:font-semibold md:text-sm 2xl:text-lg 2xl:w-4/5 list-outside text-white text-justify mb-1">
              {t("philosophy.description_p1")}
            </p>
          </div>

          <div className="col-span-3"></div>

          {/* Segundo bloque de texto e imagen */}
          <div
            className="col-span-9 text-focus-in flex gap-1 text-wrap w-full"
            style={{ animationDelay: "0.5s" }}
          >
            <img
              src={Start}
              alt="Star Icon"
              className="h-3 w-3 md:h-6 md:w-6 rotate-center"
              style={{ animationDelay: "1s" }}
            />
            <p className="leading-relaxed text-xs font-bold sm:font-semibold md:text-sm 2xl:text-lg 2xl:w-4/5 list-outside text-gray-50 text-justify mb-1">
              {t("philosophy.description_p2")}
            </p>
          </div>

          <div className="col-span-4"></div>

          {/* Tercer bloque de texto e imagen */}
          <div
            className="col-span-8 text-focus-in flex gap-1 text-wrap w-full"
            style={{ animationDelay: "1s" }}
          >
            <img
              src={Start}
              alt="Star Icon"
              className="h-3 w-3 md:h-6 md:w-6 rotate-center"
              style={{ animationDelay: "1.5s" }}
            />
            <p className="leading-relaxed text-xs font-bold sm:font-semibold md:text-sm 2xl:text-lg 2xl:w-4/5 list-outside text-gray-50 text-justify mb-1">
              {t("philosophy.description_p3")}
            </p>
          </div>
        </div>

        {/* Botón personalizado ajustado en móvil */}
        <div className="flex justify-end pt-4 md:pt-24 pr-0 pl-4 md:pl-0">
          <CustomButton text={t("philosophy.button")} onClick={handleButtonClick} />
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
