import SectionsMobile from "./SectionsMobile";
import SectionsDesktop from "./SectionsDesktop";

const Navbar = () => {
  return (
    <nav className="backdrop-blur-3xl fixed w-screen z-50 bg-darkBlue opacity-85">
      <SectionsDesktop />
      <SectionsMobile />
    </nav>
  );
};

export default Navbar;
