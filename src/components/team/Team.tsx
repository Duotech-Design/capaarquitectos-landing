import Instagram from "@/assets/svg/socialMedia/instagram.svg";
import Facebook from "@/assets/svg/socialMedia/facebook.svg";
import { useTranslation } from "react-i18next";

import "./Team.css";

const Team = () => {
  const { t } = useTranslation("global");

  return (
    <section className="mx-auto px-2 sm:px-6 lg:px-8 min-h-screen">
      <header className="flex flex-col flex-1 gap-y-6 ">
        <div className="mt-44 flex gap-x-3"> {/* Margen superior general */}
          <h3 className="text-2xl text-gray-500">{t("team.title")}</h3>
          <strong className="text-2xl font-bold">{t("team.subtitle")}</strong>
        </div>
      </header>
      <div className="mt-6 mx-auto my-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-xl mx-auto my-auto md:max-w-3xl lg:max-w-full pb-3 mt-14 md:mt-8"> {/* Ajustar mt-14 solo para md */}
          {/* Team Member 1 */}
          <div className="block group md:col-span-2 lg:col-span-1 slide-in-left">
            <div className="relative mb-6">
              <img
                src="https://pagedone.io/asset/uploads/1696238374.png"
                alt="Antonio image"
                className="w-[500px] h-auto mx-auto transition-all duration-500 object-cover group-hover:filter group-hover:brightness-50"
              />
              <div className="absolute right-[50%] top-[50%] transform translate-x-[50%] translate-y-[-50%]">
                <div className="flex items-center my-auto justify-center gap-6 transition-all duration-500 group-hover:opacity-100 opacity-0">
                  <a
                    href="https://www.instagram.com/fivo_cd?igsh=MXM1cW00ZzA2ZWpkYQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={Instagram}
                      alt="Instagram"
                      className="w-11 h-11 mx-auto cursor-pointer"
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/fredy.cade"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={Facebook}
                      alt="Facebook"
                      className="w-10 h-10 mx-auto cursor-pointer"
                    />
                  </a>
                </div>
              </div>
            </div>
            <h4 className="text-xl font-semibold text-darkBlue mb-2 capitalize text-center transition-all duration-500 group-hover:scale-125">
              ALFREDO CARDONA
            </h4>
            <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
              {t("team.position_1")}
            </span>
          </div>
          {/* Team Member 2 */}
          <div className="block group md:col-span-2 lg:col-span-1 slide-in-right">
            <div className="relative mb-6">
              <img
                src="https://pagedone.io/asset/uploads/1696238374.png"
                alt="Antonio image"
                className="w-[500px] h-auto mx-auto transition-all duration-500 object-cover group-hover:filter group-hover:brightness-50"
              />
              <div className="absolute right-[50%] top-[50%] transform translate-x-[50%] translate-y-[-50%]">
                <div className="flex items-center my-auto justify-center gap-6 transition-all duration-500 group-hover:opacity-100 opacity-0">
                  <a
                    href="https://www.instagram.com/davidpalau23?igsh=MWkxOGkxcG1hdm1ocA=="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={Instagram}
                      alt="Instagram"
                      className="w-11 h-11 mx-auto cursor-pointer"
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/david.palau.792"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={Facebook}
                      alt="Facebook"
                      className="w-10 h-10 mx-auto cursor-pointer"
                    />
                  </a>
                </div>
              </div>
            </div>
            <h4 className="text-xl font-semibold text-darkBlue mb-2 capitalize text-center transition-all duration-500 group-hover:scale-125">
              DAVID PALAU
            </h4>
            <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
              {t("team.position_2")}
            </span>
          </div>
        </div>
      </div>
      <div className="mt-8 mb-4"> {/* Ajustar el margen inferior */}
        {/* Aquí puedes agregar contenido adicional si lo necesitas */}
      </div>
    </section>
  );
};

export default Team;
