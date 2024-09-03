import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
const Options = () => {
  const [viewSectionHome, setViewSectionHome] = useState<boolean>(false);
  const [viewSectionProjects, setViewSectionProjects] =
    useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const projectsSection = document.getElementById("projects");
    const homeSection = document.getElementById("home");

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.target.id === "projects") {
          if (entry.isIntersecting) {
            window.history.replaceState(null, "", "#projects");
            setViewSectionProjects(true);
          } else if (location.hash === "#projects") {
            window.history.replaceState(null, "", location.pathname);
            setViewSectionHome(true);
            setViewSectionProjects(false);
          }
        }
        if (entry.target.id === "home") {
          if (entry.isIntersecting) {
            window.history.replaceState(null, "", location.pathname);
            setViewSectionProjects(false);
            setViewSectionHome(true);
          } else if (location.pathname === "/") {
            setViewSectionHome(false);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.4,
    });

    if (projectsSection) observer.observe(projectsSection);
    if (homeSection) observer.observe(homeSection);

    return () => {
      if (projectsSection) observer.unobserve(projectsSection);
      if (homeSection) observer.unobserve(homeSection);
      setViewSectionHome(false);
      setViewSectionProjects(false);
    };
  }, [location.pathname, location.hash]);

  const isActive = (path: string) => location.pathname === path;
  //const isActiveHash = (hash: string) => location.hash === hash;

  return (
    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:h-auto">
      <div className="hidden sm:ml-6 sm:block">
        <div className="flex space-x-4">
          <a
            onClick={() => handleClick("/")}
            className="relative group rounded-md px-3 py-2 text-sm font-medium text-white cursor-pointer"
          >
            <span>Home</span>
            <span
              className={`absolute -bottom-1 left-1/2 w-0 transition-all h-[1px] bg-white group-hover:w-3/6 ${
                viewSectionHome && isActive("/")
                  ? "w-3/6"
                  : ""
              }`}
            ></span>
            <span
              className={`absolute -bottom-1 right-1/2 w-0 transition-all h-[1px] bg-white group-hover:w-3/6 ${
                viewSectionHome && isActive("/")
                  ? "w-3/6"
                  : ""
              }`}
            ></span>
          </a>
          <a
            onClick={() => handleClick("/")}
            href="#projects"
            className="relative group rounded-md px-3 py-2 text-sm font-medium text-white cursor-pointer"
          >
            <span>Proyectos</span>
            <span
              className={`absolute -bottom-1 left-1/2 w-0 transition-all h-[1px] bg-white group-hover:w-3/6 ${
                viewSectionProjects
                
                  ? "w-3/6"
                  : ""
              }`}
            ></span>
            <span
              className={`absolute -bottom-1 right-1/2 w-0 transition-all h-[1px] bg-white group-hover:w-3/6 ${
                viewSectionProjects 
                
                  ? "w-3/6"
                  : ""
              }`}
            ></span>
          </a>
          <a
            onClick={() => handleClick("/philosophy")}
            className="relative group rounded-md px-3 py-2 text-sm font-medium text-white cursor-pointer"
            aria-current="page"
          >
            <span>Filosofía</span>
            <span
              className={`absolute -bottom-1 left-1/2 w-0 transition-all h-[1px] bg-white group-hover:w-3/6 ${
                isActive("/philosophy") ? "w-3/6" : ""
              }`}
            ></span>
            <span
              className={`absolute -bottom-1 right-1/2 w-0 transition-all h-[1px] bg-white group-hover:w-3/6 ${
                isActive("/philosophy") ? "w-3/6" : ""
              }`}
            ></span>
          </a>
          <a
            onClick={() => handleClick("/team")}
            className="relative group rounded-md px-3 py-2 text-sm font-medium text-white cursor-pointer"
          >
            <span>Equipo</span>
            <span
              className={`absolute -bottom-1 left-1/2 w-0 transition-all h-[1px] bg-white group-hover:w-3/6 ${
                isActive("/team") ? "w-3/6" : ""
              }`}
            ></span>
            <span
              className={`absolute -bottom-1 right-1/2 w-0 transition-all h-[1px] bg-white group-hover:w-3/6 ${
                isActive("/team") ? "w-3/6" : ""
              }`}
            ></span>
          </a>
          <a
            onClick={() => handleClick("/contact-us")}
            className="relative group rounded-md px-3 py-2 text-sm font-medium text-white cursor-pointer"
          >
            <span>Contáctanos</span>
            <span
              className={`absolute -bottom-1 left-1/2 w-0 transition-all h-[1px] bg-white group-hover:w-3/6 ${
                isActive("/contact-us") ? "w-3/6" : ""
              }`}
            ></span>
            <span
              className={`absolute -bottom-1 right-1/2 w-0 transition-all h-[1px] bg-white group-hover:w-3/6 ${
                isActive("/contact-us") ? "w-3/6" : ""
              }`}
            ></span>
          </a>
          <div className="relative inline-block text-left">
            <button
              className="inline-flex justify-center w-full rounded-md px-3 py-2 text-sm font-medium text-white hover:text-white focus:outline-none"
              id="options-menu"
              aria-haspopup="true"
              aria-expanded="true"
            >
              EN/ES
              <svg
                className="ml-2 -mr-1 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div
              className="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-black backdrop-blur-sm ring-1 ring-black ring-opacity-5"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <div className="py-1" role="none">
                <button
                  onClick={() => console.log("English selected")}
                  className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-darkGray"
                  role="menuitem"
                >
                  English
                </button>
                <button
                  onClick={() => console.log("Español seleccionado")}
                  className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-darkGray"
                  role="menuitem"
                >
                  Español
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Options;
