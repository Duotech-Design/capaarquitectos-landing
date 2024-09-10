import SectionsMobile from "./SectionsMobile";
import SectionsDesktop from "./SectionsDesktop";
import { useState } from "react";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <nav className="backdrop-blur-md fixed w-screen z-50 bg-darkBlue/30">
      <SectionsDesktop
        showMobileMenu={showMobileMenu}
        onClick={() => setShowMobileMenu(!showMobileMenu)} />
      <SectionsMobile showMobileMenu={showMobileMenu} setShowMobileMenu={setShowMobileMenu} />
    </nav>
  );
};

export default Navbar;
