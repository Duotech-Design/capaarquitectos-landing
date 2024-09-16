import FacebookIcon from "@/assets/svg/socialMedia/facebook.svg";
import InstagramIcon from "@/assets/svg/socialMedia/instagram.svg";
import TiktokIcon from "@/assets/svg/socialMedia/tiktok.svg";
import LanguageToggle from "./LanguageToggle";
const SocialMediaButtons = () => {
  return (
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-3">
<LanguageToggle />
      <a
        href="https://www.facebook.com/p/CAPA-Arquitectos-61550085347217/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button type="button" className="relative z-10">
          <span className="absolute -inset-1.5"></span>
          <span className="sr-only">View Facebook</span>
          <img
            src={FacebookIcon}
            alt="Facebook"
            className="subpixel-antialiased h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8"
          />
        </button>
      </a>
      <a
        href="https://www.instagram.com/capa.arquitectos/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button type="button" className="relative z-10">
          <span className="absolute -inset-1.5"></span>
          <span className="sr-only">View Instagram</span>
          <img
            src={InstagramIcon}
            alt="Instagram"
            className="subpixel-antialiased h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8"
          />
        </button>
      </a>
      <a
        href="https://www.tiktok.com/@capa.arquitectos"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button type="button" className="relative z-10">
          <span className="absolute -inset-1.5"></span>
          <span className="sr-only">View TikTok</span>
          <img
            src={TiktokIcon}
            alt="TikTok"
            className="h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 ml-[-2px]"
          />
        </button>
      </a>
    </div>
  );
};

export default SocialMediaButtons;
