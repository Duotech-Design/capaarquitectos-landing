import { useTranslation } from "react-i18next";
import "./Team.css";

const Team = () => {
  const { t } = useTranslation("global");

  return (
    <section className="mx-auto px-2 sm:px-6 lg:px-8 min-h-screen" style={{ backgroundColor: "#303030" }}>
      {/* Header: Nuestro Equipo */}
      <header className="flex flex-col flex-1 gap-y-6 ">
        <div className="mt-64 ml-12 flex items-center gap-x-3">
          <h3 className="text-2xl text-gray-500">{t("team.title")}</h3>
          <strong className="text-2xl font-bold text-white">{t("team.subtitle")}</strong>
        </div>
      </header>

      {/* Team members grid */}
      <div className="mt-96 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-left relative team-container">
        <div className="relative py-28 flex justify-between border-t border-b border-white">
          
          {/* Alfredo Cardona Section */}
          <div className="block w-1/2 pl-4 team-member" data-member="alfredo">
            <h4 className="text-xl font-semibold text-white mb-2 capitalize">
            {t("team.person_1")}
            </h4>
            <span className="text-gray-400">{t("team.position_1")}</span>
          </div>

          {/* Línea divisoria */}
          <div className="absolute right-1/2 transform translate-x-1/2 top-0 bottom-0 w-px bg-white" />

          {/* David Palau Section */}
          <div className="block w-1/2 pl-4 team-member" data-member="david">
            <h4 className="text-xl font-semibold text-white mb-2 capitalize">
            {t("team.person_2")}
            </h4>
            <span className="text-gray-400">{t("team.position_2")}</span>
          </div>
        </div>

        {/* Imagen contenedor */}
        <div className="team-image-container">
          <img
            src="/src/assets/img/capa_user_dos.JPG"
            alt="Alfredo image"
            className="team-image"
            data-member="alfredo"
          />
          <img
            src="/src/assets/img/capa_user_uno.JPG"
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
