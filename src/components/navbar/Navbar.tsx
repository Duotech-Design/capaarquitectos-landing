import SectionsMobile from "./SectionsMobile";
import SectionsDesktop from "./SectionsDesktop";

const Navbar = () => {
  return (
    <nav className="backdrop-blur-sm fixed w-screen z-50 bg-darkBlue/30">
      <SectionsDesktop />
      <SectionsMobile />
    </nav>
  );
};

export default Navbar;
