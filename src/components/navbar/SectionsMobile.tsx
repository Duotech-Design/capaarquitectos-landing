import { useNavigate, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const SectionsMobile = ({
  showMobileMenu,
  setShowMobileMenu,
}: {
  showMobileMenu: boolean;
  setShowMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [viewSectionHome, setViewSectionHome] = useState<boolean>(false);
  const [viewSectionProjects, setViewSectionProjects] = useState<boolean>(false);
  const { t } = useTranslation("global"); // Importando las traducciones

  const navigate = useNavigate();
  const location = useLocation();

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
      className={`${showMobileMenu ? "fade-in backdrop-blur-none" : "hidden"}`}
      id="mobile-menu"
    >
      <div className="space-y-1 px-2 pb-3 pt-2">
        <a
          onClick={() => handleClick("/")}
          className={`block rounded-md px-3 py-2 text-sm font-semibold
            ${viewSectionHome && isActive("/") ? "bg-gray-900 text-gray-300" : "text-white"}`}
          aria-current="page"
        >
          {t("navbar.home")} {/* Traducción de 'Home' */}
        </a>
        <a
          onClick={() => handleClick("/")}
          href="#projects"
          className={`block rounded-md px-3 py-2 text-sm font-semibold
            ${viewSectionProjects || location.pathname.includes("/project") ? "bg-gray-900 text-gray-300" : "text-white"}`}
        >
          {t("navbar.projects")} {/* Traducción de 'Proyectos' */}
        </a>
        <a
          onClick={() => handleClick("/philosophy")}
          className={`block rounded-md px-3 py-2 text-sm font-semibold
            ${isActive("/philosophy") ? "bg-gray-900 text-gray-300" : "text-white"}`}
        >
          {t("navbar.philosophy")} {/* Traducción de 'Filosofía' */}
        </a>
        <a
          onClick={() => handleClick("/team")}
          className={`block rounded-md px-3 py-2 text-sm font-semibold 
            ${isActive("/team") ? "bg-gray-900 text-gray-300" : "text-white"}`}
        >
          {t("navbar.team")} {/* Traducción de 'Equipo' */}
        </a>
        <a
          onClick={() => handleClick("/contact-us")}
          className={`block rounded-md px-3 py-2 text-sm font-semibold 
            ${isActive("/contact-us") ? "bg-gray-900 text-gray-300" : "text-white"}`}
        >
          {t("navbar.contact_us")} {/* Traducción de 'Contáctanos' */}
        </a>
      </div>
    </div>
  );
};

export default SectionsMobile;
