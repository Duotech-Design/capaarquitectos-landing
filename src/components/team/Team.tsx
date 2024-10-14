import { useTranslation } from "react-i18next";
import "./Team.css";

const Team = () => {
  const { t } = useTranslation("global");

  return (
    <section className="mx-auto px-2 sm:px-6 lg:px-8 min-h-screen" style={{ backgroundColor: "#303030" }}>
      {/* Header: Nuestro Equipo */}
      <header className="flex flex-col flex-1 gap-y-6 border border-red-500"> {/* Borde rojo */}
        {/* Título y subtítulo en la misma línea */}
        <div className="mt-64 ml-12 border border-green-500 flex items-center gap-x-3"> {/* Borde verde bajado más */}
          <h3 className="text-2xl text-gray-500">{t("team.title")}</h3>
          <strong className="text-2xl font-bold text-white">{t("team.subtitle")}</strong>
        </div>
      </header>

      {/* Team members grid */}
      <div className="mt-96 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8  text-left relative" style={{ top: '50%', transform: 'translateY(-50%)' }}> {/* Borde azul centrado verticalmente */}
        {/* Líneas blancas superior e inferior extendidas completamente */}
        <div className="relative py-28  flex justify-between border-t border-b border-white"> {/* Líneas blancas superior e inferior */}
           {/* Línea inferior */}

          {/* Alfredo Cardona Section */}
          <div className="block w-1/2 pl-4"> {/* Eliminado borde púrpura */}
            <h4 className="text-xl font-semibold text-white mb-2 capitalize">
              ALFREDO CARDONA
            </h4>
            <span className="text-gray-400">Co-fundador</span>
          </div>

          {/* Línea divisoria blanca antes de "DAVID PALAU", ajustada para no sobrepasar el borde azul */}
          <div className="absolute right-1/2 transform translate-x-1/2 top-0 bottom-0 w-px bg-white" style={{ height: '100%' }} /> {/* Línea divisoria ajustada */}

          {/* David Palau Section */}
          <div className="block w-1/2 pl-4 border-pink-500"> {/* Borde rosa, texto alineado al inicio */}
            <h4 className="text-xl font-semibold text-white mb-2 capitalize">
              DAVID PALAU
            </h4>
            <span className="text-gray-400">Director de Diseño</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;

