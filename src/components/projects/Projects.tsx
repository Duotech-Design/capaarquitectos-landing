import MoreButton from "../ui/MoreButton";
import { useNavigate } from "react-router-dom";
import ProjectUnoImgUno from "@/assets/img/project_uno/1.webp";
import ProjectUnoImgDos from "@/assets/img/project_uno/2.webp";
import ProjectUnoImgTres from "@/assets/img/project_uno/3.webp";
import ProjecUnoImgCuatro from "@/assets/img/project_uno/4.webp";
import ProjectDosImgUno from "@/assets/img/project_dos/1.webp";
import ProjectDosImgDos from "@/assets/img/project_dos/2.webp";
import ProjectDosImgTres from "@/assets/img/project_dos/3.webp";
import ProjectDosImgCuatro from "@/assets/img/project_dos/4.webp";
import ProjectTresImgUno from "@/assets/img/project_tres/1.webp";
import ProjectTresImgDos from "@/assets/img/project_tres/2.webp";
import ProjectTresImgTres from "@/assets/img/project_tres/3.webp";
import ProjectTresImgCuatro from "@/assets/img/project_tres/4.webp";

const Projects = () => {
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate("/project/" + id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <section
      id="projects"
      className="mx-auto px-2 sm:px-6 lg:px-8 min-h-screen mb-12"
    >
      <header className="flex flex-col flex-1 gap-y-6">
        <div className="mt-32">
          <h3 className="text-xl">PROYECTOS</h3>
        </div>
        <div className="text-right py-3">
          <h4 className="text-md">CONSTRUIDO | EN PROCESO</h4>
        </div>
      </header>
      <div className="grid grid-cols-1 gap-4">
        {[3, 2, 1].map((item) => (
          <div
            key={item}
            className="relative group grid grid-cols-2 md:grid-cols-4 gap-4"
            onClick={() => handleClick(item)}
          >
            <div className="cursor-pointer absolute inset-0 bg-darkGray/50 text-white opacity-0 group-hover:opacity-90 z-10 flex flex-col justify-center items-center transition-opacity duration-700">
              <span className="text-4xl text-focus-in">CASA D + D</span>
              <span className="text-2xl text-focus-in">
                SANTA MARIA DEL RIO
              </span>
              <div className="pt-2 text-focus-in">
                <MoreButton text={"VER MÁS"} />
              </div>
            </div>

            <div>
              <img
                className="w-full h-full object-cover object-center"
                src={
                  item === 1 ? ProjectUnoImgUno : item === 2 ? ProjectDosImgUno : ProjectTresImgUno
                }
                alt=""
              />
            </div>

            <div>
              <img
                className="w-full h-full object-cover object-center"
                src={
                  item === 1 ? ProjectUnoImgDos : item === 2 ? ProjectDosImgDos : ProjectTresImgDos
                }
                alt=""
              />
            </div>

            <div>
              <img
                className="w-full h-full object-cover object-center"
                src={
                  item === 1 ? ProjectUnoImgTres : item === 2 ? ProjectDosImgTres : ProjectTresImgTres
                }
                alt=""
              />
            </div>
            <div>
              <img
                className="w-full h-full object-cover object-center"
                src={
                  item === 1 ? ProjecUnoImgCuatro : item === 2 ? ProjectDosImgCuatro : ProjectTresImgCuatro
                }
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
