// src/components/footer/Footer.tsx
import CustomButton from "../ui/CustomButton";
import FooterLogo from "./FooterLogo";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const { t } = useTranslation("global");
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/contact-us");
  };
  return (
    <footer className="bg-[#303030] text-white text-center lg:text-left">
      <div className=" text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center p-4">
          
          {/* Logo del Footer (visible solo en desktop y tablet) */}
          <div className="hidden md:block">
            <FooterLogo />
          </div>

          {/* Área vacía solo visible en desktop */}
          <div className="hidden md:block p-4">
            {/* Espacio vacío solo visible en desktop */}
          </div>

          {/* Teléfonos y Correo en desktop/tablet */}
          <div className="hidden md:flex flex-col p-4">
            <div className="mb-4 flex justify-start
            ">
            <CustomButton text={t("hero.button")} onClick={handleButtonClick}/>
            </div>

            <div className="flex justify-between pt-4 ">
              <div className="flex flex-col items-start">
                <h6 className=" mb-2 text-sm md:text-base font-cocoUltralight uppercase text-[#EDEADB]">
                {t("footer.email")}
                </h6>
                <a
                  href="mailto:info@capaarquitectos.com"
                  className="text-sm md:text-base font-sans font-thin block text-white"
                >
                  info<span className="font-sans font-extralight">@</span>
                  capaarquitectos.com
                </a>
                <a
                  href="mailto:capa.arquitectos.mx@gmail.com"
                  className="text-sm md:text-base font-sans font-thin block text-white"
                >
                  capa.arquitectos.mx
                  <span className="font-sans font-extralight">@</span>gmail.com
                </a>
              </div>

              <div className="flex flex-col items-start">
                <h6 className=" mb-2 text-sm md:text-base font-cocoUltralight uppercase text-[#EDEADB]">
                {t("footer.phone")}
                </h6>
                <a
                  href="https://wa.me/524443188840?text=Quiero%20cotizar%20un%20servicio"
                  className="text-sm md:text-base font-sans font-thin block text-white"
                >
                  + 52 444318 8840
                </a>
                <a
                  href="https://wa.me/524442816256?text=Quiero%20cotizar%20un%20servicio"
                  className="text-sm md:text-base font-sans font-thin block text-white"
                >
                  + 52 444281 6256
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Diseño móvil */}
        <div className="flex flex-col md:hidden items-center p-3 ">
          
          {/* Botón de Contactanos centrado (móvil) */}
          <div className="mb-4">
            <CustomButton text={t("hero.button")} onClick={handleButtonClick}/>
          </div>

          {/* Correo y Teléfonos en dos columnas, centrados y a la misma altura */}
          <div className="flex flex-row justify-between w-full mb-4 ">
            {/* Columna de Correo */}
            <div className="flex flex-col items-start">
              <div className="text-sm font-cocoUltralight uppercase  mb-2">
              {t("footer.email")}
              </div>
              <a
                href="mailto:info@capaarquitectos.com"
                className="text-sm font-sans font-thin text-white"
              >
                info@capaarquitectos.com
              </a>
              <a
                href="mailto:capa.arquitectos.mx@gmail.com"
                className="text-sm font-sans font-thin text-white"
              >
                capa.arquitectos.mx@gmail.com
              </a>
            </div>

            {/* Columna de Teléfonos */}
            <div className="flex flex-col items-start">
              <div className="text-sm font-cocoUltralight uppercase  mb-2">
              {t("footer.phone")}
              </div>
              <a
                href="https://wa.me/524443188840?text=Quiero%20cotizar%20un%20servicio"
                className="text-sm font-sans font-thin text-white"
              >
                + 52 444318 8840
              </a>
              <a
                href="https://wa.me/524442816256?text=Quiero%20cotizar%20un%20servicio"
                className="text-sm font-sans font-thin text-white"
              >
                + 52 444281 6256
              </a>
            </div>
          </div>

          {/* Logo centrado al final (móvil) */}
          <div className="mt-4">
            <FooterLogo />
          </div>
        </div>
      </div>

      {/* Footer bottom line */}
      <div className="max-w-5xl mx-auto border-t border-white/75 py-4 text-center">
        <span className="text-xs lg:text-sm">
          © <span className="font-sans font-extralight">2022</span> Capa
          Arquitectos. All rights reserved. - SITE by{" "}
          <a href="https://duotechdesign.com/" className="font-bold">
            Duotech Design
          </a>
        </span>
      </div>
    </footer>
  );
};
