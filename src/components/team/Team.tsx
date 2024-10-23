import { useTranslation } from "react-i18next";
import Instagram from "@/assets/svg/socialMedia/instagram.svg";
import Facebook from "@/assets/svg/socialMedia/facebook.svg";
import "./Team.css";

const Team = () => {
  const { t } = useTranslation("global");

  return (
    <section
    className="mx-auto px-2 sm:px-6 lg:px-8 min-h-screen"
    style={{ backgroundColor: "#303030" }}
  >
    {/* Header: Nuestro Equipo */}
    <header className="flex flex-col items-start gap-y-6 text-left">
      <div className="mt-32 md:mt-40 lg:mt-48 w-full sm:w-5/6 flex flex-col sm:flex-row items-start sm:items-start justify-start">
        {/* Flex para mantener los textos en la misma línea */}
        <div className="flex items-center ml-4 sm:ml-0">
          <h3 className="text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-none mr-3 sm:mr-5 mt-3 -mb-4 sm:mb-3">
            {t("team.title")}
          </h3>
          <strong className="text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 -mb-4 sm:mb-3">
            {t("team.subtitle")}
          </strong>
        </div>
      </div>
    </header>
      {/* Team members */}
      <div className="mx-auto sm:ml-10 lg:ml-56 max-w-7xl text-center py-10 sm:py-20">
        <div className="flex flex-col sm:flex-row justify-around mt-5 w-full sm:w-5/6 border-t border-b border-white py-8 sm:py-12">
          
     {/* Alfredo Cardona */}
<div className="team-member">
  <div className="image-container">
    <img
      className="w-3/4 sm:w-4/5 lg:w-3/5"
      src="/src/assets/img/team_photos/fotos arquis/01.webp"
      alt="Alfredo image"
    />
    <div className="social-links">
      <a
        href="https://www.instagram.com/fivo_cd/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="w-12 sm:w-16" src={Instagram} alt="Instagram" />
      </a>
      <a
        href="https://www.facebook.com/p/CAPA-Arquitectos-61550085347217/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="w-12 sm:w-16" src={Facebook} alt="Facebook" />
      </a>
    </div>
  </div>
  <div className="team-member-details">
    <h4 className="text-lg sm:text-xl md:text-2xl">{t("team.person_1")}</h4>
    <span className="text-sm sm:text-base text-gray-300">
      {t("team.position_1")}
    </span>
  </div>
</div>

{/* David Palau */}
<div className="team-member mt-8 sm:mt-0">
  <div className="image-container">
    <img
      className="w-3/4 sm:w-4/5 lg:w-3/5"
      src="/src/assets/img/team_photos/fotos arquis/02.webp"
      alt="David image"
    />
    <div className="social-links">
      <a
        href="https://www.instagram.com/davidpalau23?igsh=MWkxOGkxcG1hdm1ocA=="
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="w-12 sm:w-16" src={Instagram} alt="Instagram" />
      </a>
      <a
        href="https://www.facebook.com/p/CAPA-Arquitectos-61550085347217/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="w-12 sm:w-16" src={Facebook} alt="Facebook" />
      </a>
    </div>
  </div>
  <div className="team-member-details">
    <h4 className="text-lg sm:text-xl md:text-2xl">{t("team.person_2")}</h4>
    <span className="text-sm sm:text-base text-gray-300">
      {t("team.position_2")}
    </span>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default Team;
