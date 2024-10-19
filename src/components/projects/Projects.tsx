import MoreButton from "../ui/MoreButton";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  AvailableProjects,
  ProjectAsset,
  ProjectAssets,
  ProjectList,
} from "../../helpers/projectAssets";
import { useEffect, useState } from "react";

const MAX_IMAGES_PER_PROJECT = 4;

const customProjectMobile = {
  oficinas_rosmarinus: [1],
  casa_dplusd: [0],
  proyecto_el_maderable: [28],
} as const;

const customProjectDesk = {
  oficinas_rosmarinus: [14, 1, 0, 13],
  casa_dplusd: [1, 2, 14, 0],
  proyecto_el_maderable: [13, 26, 10, 27],
} as const;

const Projects = () => {
  const { t } = useTranslation("global");
  const [columns, setColumns] = useState(1);
  const navigate = useNavigate();
  const [selectedButton, setSelectedButton] = useState("button1");

  const handleClick = (id: AvailableProjects) => {
    navigate("/project/" + id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setColumns(MAX_IMAGES_PER_PROJECT);
      } else {
        setColumns(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const projectList = ProjectList;

  return (
    <section
      id="projects"
      className="mx-auto px-2 sm:px-6 lg:px-8 min-h-screen pb-8"
    >
      <header className="-mt-36 sm:-mt-28 pt-28 pb-3 flex flex-row justify-between items-end">
        <h3 className="tex-lg md:text-3xl text-gray-500 mt-16">
          {t("projects.title")}
        </h3>
      </header>

      {/* Contenedor de los botones */}
      <div className="mt-8 mb-4 flex justify-end">
        <h4 className="text-md">
          {/* Botón 1 */}

          <span
            className="group relative cursor-pointer text-gray-700"
            onClick={() => setSelectedButton("button1")}
          >
            {t("projects.button1")}
            <span
              className={`absolute -bottom-1 left-1/2 w-0 transition-all h-[1px] bg-gray-400 group-hover:w-3/6 ${
                selectedButton === "button1" ? "w-3/6" : ""
              }`}
            ></span>
            <span
              className={`absolute -bottom-1 right-1/2 w-0 transition-all h-[1px] bg-gray-400 group-hover:w-3/6 ${
                selectedButton === "button1" ? "w-3/6" : ""
              }`}
            ></span>
          </span>

          {" | "}
          {/* Botón 2 */}

          <span
            className="group relative cursor-pointer text-gray-700"
            onClick={() => setSelectedButton("button2")}
          >
            {t("projects.button2")}
            <span
              className={`absolute -bottom-1 left-1/2 w-0 transition-all h-[1px] bg-gray-400 group-hover:w-3/6 ${
                selectedButton === "button2" ? "w-3/6" : ""
              }`}
            ></span>
            <span
              className={`absolute -bottom-1 right-1/2 w-0 transition-all h-[1px] bg-gray-400 group-hover:w-3/6 ${
                selectedButton === "button2" ? "w-3/6" : ""
              }`}
            ></span>
          </span>
        </h4>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {projectList.map((project: AvailableProjects) => (
          <div
            key={project}
            className="relative group grid grid-cols-1 md:grid-cols-4 gap-4"
            onClick={() => handleClick(project)}
          >
            <div className="cursor-pointer absolute inset-0 bg-darkGray/50 text-white opacity-0 group-hover:opacity-90 z-10 flex flex-col justify-center items-center transition-opacity duration-700">
              <span className="text-2xl font-semibold text-focus-in">
                {ProjectAssets[project].name}
              </span>
              <span className="text-xl font-semibold text-focus-in">
                {ProjectAssets[project].location}
              </span>
              <div className="pt-2 font-semibold text-focus-in">
                <MoreButton text={t("projects.button3")} />
              </div>
            </div>
            {columns === 1
              ? customProjectMobile[project].map((index) => {
                  return (
                    <div key={index}>
                      <ProjectAsset
                        project={project}
                        index={index}
                        alt={`${project}_${index + 1}`}
                        className="w-full h-[220px] md:h-[280px] 2xl:h-[500px] object-cover md:object-center"
                      />
                    </div>
                  );
                })
              : customProjectDesk[project].map((index) => {
                  return (
                    <div key={index}>
                      <ProjectAsset
                        project={project}
                        index={index}
                        alt={`${project}_${index + 1}`}
                        className="w-full h-[220px] md:h-[280px] 2xl:h-[500px] object-cover md:object-center"
                      />
                    </div>
                  );
                })}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
