import { AvailableProjects, ProjectAssets, ProjectList } from "../../helpers/projectAssets";
import SimpleSlider from "./Carousel";
import { useParams, useNavigate } from "react-router-dom";

const ProjectsDetails = () => {
  const { id } = useParams<{ id: AvailableProjects }>();

  if (!id) return null;

  const projectList = ProjectList;

  const navigate = useNavigate();
  const selectedProject = ProjectAssets[id];
  const projectName = selectedProject.name;
  let currentProjectIndex = projectList.indexOf(id);

  const nextProject = () => {
    const nextProject = projectList.indexOf(id) + 1;
    navigate(`/project/${projectList[nextProject]}`);
  };

  const prevProject = () => {
    const prevProject = projectList.indexOf(id) - 1;
    navigate(`/project/${projectList[prevProject]}`);
  };

  return (
    <section className="flex flex-col mx-auto px-2 sm:px-6 lg:px-8 min-h-screen max-w-[2000px]">
      <header className="flex">
        <h3 className="mt-32 pb-3 lg:text-2xl text-sm drop-shadow-sm text-black flex items-center gap-x-3">
          PROYECTO
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-7 h-7 rotate-180 ${currentProjectIndex < 1
              ? "disabled text-transparent"
              : "text-black hover:text-gray-500 cursor-pointer"
              }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={0.5}
            onClick={currentProjectIndex > 0 ? prevProject : undefined}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            />
          </svg>
          <span className="font-sans font-extralight text-base text-gray-500">
            {projectName}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-7 h-7 ${currentProjectIndex === projectList.length - 1
              ? "disabled text-transparent"
              : "text-black hover:text-gray-500 cursor-pointer"
              }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={0.5}
            onClick={currentProjectIndex < projectList.length - 1 ? nextProject : undefined}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            />
          </svg>
        </h3>
      </header>

      <div className="text-sm lg:text-base flex justify-center pb-6 lg:pb-0 pt-6 2xl:pt-20 gap-x-3 md:gap-x-12 w-full">
        <span>FOTOGRAFIAS</span>
        <div className="border-r-2 border-lightGray"></div>
        <span>RENDERS</span>
        <div className="border-r-2 border-lightGray"></div>
        <span>PLANOS</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-2 md:gap-y-7">
        <div className="lg:col-span-3"></div>
        <div className="lg:col-span-9 text-focus-in flex gap-3 text-wrap w-full"></div>
        <div className=" lg:col-span-3 md:col-span-2 text-sm lg:text-base text-right lg:pr-3">
          {projectName}
        </div>
        <div className="relative col-span-10 lg:col-span-6 md:col-span-8 text-focus-in">
          <SimpleSlider id={id} />
        </div>
        <div className="lg:col-span-3 md:col-span-2"></div>
        <div className="lg:col-span-3"></div>
        <div className="col-span-10 pt-3 lg:pt-0 lg:col-span-6 flex justify-center gap-x-3 w-full ">
          <div className="text-left">
            <div className="flex flex-col text-sm text-left">
              <span>Tipo:</span>
              <span>Localización:</span>
              <span>Superficie:</span>
              <span>Status:</span>
            </div>
          </div>
          <div className="text-center">
            <div className="flex flex-col text-sm text-right">
              <span>Diseño de interiores</span>
              <span>Santa María del Río, S.L.P</span>
              <span>O metros</span>
              <span>Status:</span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3"></div>
      </div>
    </section>
  );
};

export default ProjectsDetails;
