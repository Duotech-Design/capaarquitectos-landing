import { useTranslation } from "react-i18next";
import Instagram from "@/assets/svg/socialMedia/instagram.svg";
import Facebook from "@/assets/svg/socialMedia/facebook.svg";
import "./Team.css";

const Team = () => {
  const { t } = useTranslation("global");

  return (
    <section className="mx-auto px-2 sm:px-6 lg:px-8 min-h-screen" style={{ backgroundColor: "#303030" }}>
      {/* Header: Nuestro Equipo */}
      <header className="flex flex-col flex-1 gap-y-6">
        <div className="mt-52 ml-12 flex flex-row justify-end items-center w-full border-t border-b border-gray-300 py-4 pr-12">
          <h3 className="text-[8rem] mt-9 mb-10 font-bold text-white leading-none mr-4">
            {t("team.title")}
          </h3>
          <strong className="text-[8rem] mt-10 mb-10 mr-4 font-bold text-white leading-none">
            {t("team.subtitle")}
          </strong>
        </div>
      </header>

      {/* Team members grid */}
      <div className="mt-72 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-left relative team-container">
        <div className="relative py-28 flex justify-between border-t border-b border-white">
          
          {/* Alfredo Cardona Section */}
          <div className="block w-1/2 pl-4 team-member" data-member="alfredo">
            <h4 className="text-xl font-semibold text-white mb-2 capitalize">
              {t("team.person_1")}
            </h4>
            <span className="text-gray-400">{t("team.position_1")}</span>
            {/* Social Icons */}
            <div className="flex items-center justify-start gap-4 mt-4">
              <a
                href="https://www.instagram.com/fivo_cd/"
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
                href="https://www.facebook.com/alfredo.cardona"
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

          {/* Línea divisoria */}
          <div className="absolute right-1/2 transform translate-x-1/2 top-0 bottom-0 w-px bg-white" />

          {/* David Palau Section */}
          <div className="block w-1/2 pl-4 team-member" data-member="david">
            <h4 className="text-xl font-semibold text-white mb-2 capitalize">
              {t("team.person_2")}
            </h4>
            <span className="text-gray-400">{t("team.position_2")}</span>
            {/* Social Icons */}
            <div className="flex items-center justify-start gap-4 mt-4">
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

        {/* Imagen contenedor */}
        <div className="team-image-container">
          <img
            src="/src/assets/img/team_photos/fotos_arquis/01.webp"
            alt="Alfredo image"
            className="team-image"
            data-member="alfredo"
          />
          <img
            src="/src/assets/img/team_photos/fotos_arquis/02.webp"
            alt="David image"
            className="team-image"
            data-member="david"
          />
        </div>
      </div>
    </section>
  );
};

export default Team;
