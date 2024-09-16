import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";
const Options = () => {
  const { t } = useTranslation("global");
  const [viewSectionHome, setViewSectionHome] = useState<boolean>(false);
  const [viewSectionProjects, setViewSectionProjects] =
    useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (path: string) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(path);
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
                viewSectionHome && isActive("/") ? "w-3/6" : ""
              }`}
            ></span>
            <span
              className={`absolute -bottom-1 right-1/2 w-0 transition-all h-[1px] bg-white group-hover:w-3/6 ${
                viewSectionHome && isActive("/") ? "w-3/6" : ""
              }`}
            ></span>
          </a>
          <a
            onClick={() => handleClick("/")}
            href="#projects"
            className="relative group rounded-md px-3 py-2 text-sm font-medium text-white cursor-pointer"
          >
            <span>{t("navbar.projects")}</span>
            <span
              className={`absolute -bottom-1 left-1/2 w-0 transition-all h-[1px] bg-white group-hover:w-3/6 ${
                viewSectionProjects || location.pathname.includes("/project")
                  ? "w-3/6"
                  : ""
              }`}
            ></span>
            <span
              className={`absolute -bottom-1 right-1/2 w-0 transition-all h-[1px] bg-white group-hover:w-3/6 ${
                viewSectionProjects || location.pathname.includes("/project")
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
            <span>{t("navbar.philosophy")}</span>
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
            <span>{t("navbar.team")}</span>
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
            <span>{t("navbar.contact_us")}</span>
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
         
        </div>
      </div>
    </div>
  );
};

export default Options;
