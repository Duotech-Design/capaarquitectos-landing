import { useNavigate, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";

const SectionsMobile = ({
  showMobileMenu,
  setShowMobileMenu,
}: {
  showMobileMenu: boolean;
  setShowMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [viewSectionHome, setViewSectionHome] = useState<boolean>(false);
  const [viewSectionProjects, setViewSectionProjects] =
    useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(viewSectionHome);
  console.log(viewSectionProjects);

  const handleClick = (path: string) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(path);
    setShowMobileMenu(false);
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
    <div 
      className={`${showMobileMenu ? "fade-in backdrop-blur-none" : "hidden"}`} id="mobile-menu">
      <div className="space-y-1 px-2 pb-3 pt-2">
        <a
          onClick={() => handleClick("/")}
          className={`block rounded-md px-3 py-2 text-sm text-gray-300
            ${viewSectionHome && isActive("/") ? "bg-gray-900 text-gray-300" : "text-white"}`}
          aria-current="page"
        >
          Home
        </a>
        <a
          onClick={() => handleClick("/")}
          href="#projects"
          className={`block rounded-md px-3 py-2 text-sm text-gray-300
            ${viewSectionProjects || location.pathname.includes("/project") ? "bg-gray-900 text-gray-300" : "text-white"}`}
        >
          Proyectos
        </a>
        <a
          onClick={() => handleClick("/philosophy")}
          className={`block rounded-md px-3 py-2 text-sm text-gray-300
            ${isActive("/philosophy") ? "bg-gray-900 text-gray-300" : "text-white"}`}
        >
          Filosofía
        </a>
        <a
          onClick={() => handleClick("/team")}
          className={`block rounded-md px-3 py-2 text-sm text-gray-300
            ${isActive("/team") ? "bg-gray-900 text-gray-300" : "text-white"}`}
        >
          Equipo
        </a>
        <a
          onClick={() => handleClick("/contact-us")}
          className={`block rounded-md px-3 py-2 text-sm text-gray-300
            ${isActive("/contact-us") ? "bg-gray-900 text-gray-300" : "text-white"}`}
        >
          Contáctanos
        </a>
      </div>
    </div>
  );
};

export default SectionsMobile;
