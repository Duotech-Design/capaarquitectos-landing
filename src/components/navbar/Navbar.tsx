import SectionsMobile from "./SectionsMobile";
import SectionsDesktop from "./SectionsDesktop";

const Navbar = () => {
  return (
    <nav className="backdrop-blur-md bg-transparent fixed w-screen">
      <SectionsDesktop />
      <SectionsMobile />
    </nav>
  );
};

export default Navbar;
