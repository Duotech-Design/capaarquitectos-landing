import MenuMobile from "./MenuMobile";
import Logo from "./Logo";
import Options from "./Options";
import SocialMediaButtons from "./SocialMediaButtons";
const SectionsDesktop = () => {
  return (
    <div className="mx-auto px-2 sm:px-6 lg:px-8">
      <div className="relative flex items-center justify-between h-24">
        <MenuMobile />
        <Logo />
        <Options />
        
        <SocialMediaButtons />
        
      </div>
    </div>
  );
};

export default SectionsDesktop;
