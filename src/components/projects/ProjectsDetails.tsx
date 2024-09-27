import {
  AvailableProjects,
  ProjectAssets,
  ProjectList,
} from "../../helpers/projectAssets";
import SimpleSlider from "./Carousel";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ProjectsDetails = () => {
  const { t } = useTranslation("global");
  const { id } = useParams<{ id: AvailableProjects }>();
  const navigate = useNavigate();

  if (!id) return null;

  const projectList = ProjectList;
  const selectedProject = ProjectAssets[id];
  const projectName = selectedProject.name;
  const currentProjectIndex = projectList.indexOf(id);

  const nextProject = () => {
    const nextProject = projectList.indexOf(id) + 1;
    navigate(`/project/${projectList[nextProject]}`);
  };

  const prevProject = () => {
    const prevProject = projectList.indexOf(id) - 1;
    navigate(`/project/${projectList[prevProject]}`);
  };
  //
  return (
    <section className="flex flex-col mx-auto px-2 sm:px-6 lg:px-8 min-h-screen max-w-[2000px]">
      <header className="flex justify-center md:justify-start">
        <h3
          className="mt-28 pb-6 md:pb-1 lg:text-2xl text-sm drop-shadow-sm text-black 
          flex justify-between items-center gap-x-3 px-4 md:px-0 w-full md:w-[400px]"
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-7 h-7 rotate-180 ${
              currentProjectIndex < 1
                ? "disabled text-transparent"
                : "text-black hover:text-gray-500 cursor-pointer animate-pulse"
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1}
            onClick={currentProjectIndex > 0 ? prevProject : undefined}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            />
          </svg>
          <span className="font-cocoUltralight text-lg lg:text-2xl text-gray-500">
            {projectName}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-7 h-7 ${
              currentProjectIndex === projectList.length - 1
                ? "disabled text-transparent"
                : "text-black hover:text-gray-500 cursor-pointer animate-pulse"
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1}
            onClick={
              currentProjectIndex < projectList.length - 1
                ? nextProject
                : undefined
            }
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            />
          </svg>
        </h3>
      </header>

      <div className="text-sm flex justify-center pb-6 lg:pb-3 2xl:pt-20 gap-x-3 md:gap-x-12 w-full mb-2 md:mb-4 lg:mb-3">
        <span>{t("projects_description.button1")}</span>
        <div className="border-r-2 border-lightGray"></div>
        <span>{t("projects_description.button2")}</span>
        <div className="border-r-2 border-lightGray"></div>
        <span>{t("projects_description.button3")}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-2 md:gap-y-1">
        <div className=" lg:col-span-3 md:col-span-2 text-sm lg:text-base text-right lg:pr-3"></div>
        <div className="col-span-10 lg:col-span-6 md:col-span-8 text-focus-in">
          <SimpleSlider id={id} />
        </div>
        <div className="lg:col-span-3 md:col-span-2"></div>

        <div className="lg:col-span-3"></div>
        <div className="col-span-10 pt-3 lg:pt-0 lg:col-span-6 flex justify-center gap-x-3 w-full mt-8 md:mt-4">
          <div className="text-left">
            <div className="flex flex-col text-sm text-left">
              <span>{t("projects_description.type")}</span>
              <span>{t("projects_description.location")}</span>
              <span>{t("projects_description.area")}</span>
              <span>{t("projects_description.estatus")}</span>
            </div>
          </div>
          <div className="text-center">
            <div className="flex flex-col text-sm text-right">
              <span>{selectedProject.type}</span>
              <span>{selectedProject.location}</span>
              <span className="font-sans font-thin">
                {selectedProject.surface}
              </span>
              <span>{selectedProject.status}</span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3"></div>
      </div>

      {/* Aumenta el espacio antes del footer en desktop y reduce el espacio en tablet */}
      <div className="mt-16 lg:mt-24 md:mt-8 flex-grow"></div>
    </section>
  );
};

export default ProjectsDetails;
