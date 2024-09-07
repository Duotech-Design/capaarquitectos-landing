import MoreButton from "../ui/MoreButton";
import { useNavigate } from "react-router-dom";
const Projects = () => {
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate("/project/" + id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <section
      id="projects"
      className="mx-auto px-2 sm:px-6 lg:px-8 min-h-screen mb-3"
    >
      <header className="flex flex-col flex-1 gap-y-6">
        <div className="mt-32">
          <h3 className="text-xl">PROYECTOS</h3>
        </div>
        <div className="text-right">
          <h4 className="text-md">CONSTRUIDO | EN PROCESO</h4>
        </div>
      </header>
      <div className="grid grid-cols-1 gap-4">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="relative group grid grid-cols-2 md:grid-cols-4 gap-4"
            onClick={() => handleClick(item)}
          >
            <div className="cursor-pointer absolute inset-0 bg-darkGray/30 opacity-0 group-hover:opacity-90 z-10 flex flex-col justify-center items-center transition-opacity duration-700">
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
                className="h-auto max-w-full "
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full "
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
                alt=""
              />
            </div>

            <div>
              <img
                className="h-auto max-w-full "
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
                alt=""
              />
            </div>
            <div >
              <img
                className="h-auto max-w-full "
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
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
