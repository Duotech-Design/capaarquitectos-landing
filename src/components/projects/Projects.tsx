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

const Projects = () => {
  const { t } = useTranslation("global");
  const [columns, setColumns] = useState(1);
  const navigate = useNavigate();

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
      className="mx-auto px-2 sm:px-6 lg:px-8 min-h-screen mb-12"
    >
      <header className="flex flex-col flex-1 gap-y-6">
        <div className="mt-32">
          <h3 className="text-xl">{t("projects.title")}</h3>
        </div>
        <div className="text-right py-3">
          <h4 className="text-md">{`${t("projects.button1")} | ${t(
            "projects.button2"
          )}`}</h4>
        </div>
      </header>
      <div className="grid grid-cols-1 gap-4">
        {projectList.map((project: AvailableProjects) => (
          <div
            key={project}
            className="relative group grid grid-cols-1 md:grid-cols-4 gap-4"
            onClick={() => handleClick(project)}
          >
            <div className="cursor-pointer absolute inset-0 bg-darkGray/50 text-white opacity-0 group-hover:opacity-90 z-10 flex flex-col justify-center items-center transition-opacity duration-700">
              <span className="text-2xl text-focus-in">
                {ProjectAssets[project].name}
              </span>
              <span className="text-xl text-focus-in">
                {ProjectAssets[project].location}
              </span>
              <div className="pt-2 text-focus-in">
                <MoreButton text={t("projects.button3")} />
              </div>
            </div>
            {...Array(columns)
              .fill(0)
              .map((_, index) => {
                return (
                  <div key={index}>
                    <ProjectAsset
                      project={project}
                      index={index}
                      alt={`${project}_${index + 1}`}
                      className="w-full h-[300px] 2xl:h-[500px] object-cover object-center"
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
