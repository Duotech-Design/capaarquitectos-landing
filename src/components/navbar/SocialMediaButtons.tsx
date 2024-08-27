import FacebookIcon from "@/assets/svg/socialMedia/facebook.svg";
import InstagramIcon from "@/assets/svg/socialMedia/instagram.svg";
import TiktokIcon from "@/assets/svg/socialMedia/tiktok.svg";

const SocialMediaButtons = () => {
  return (
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-3">
      <button
        type="button"
        className="relative rounded-full p-1 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
      >
        <span className="absolute -inset-1.5"></span>
        <span className="sr-only">View notifications</span>

        <img src={FacebookIcon} alt="Facebook" className="h-7 w-7" />
      </button>
      <button
        type="button"
        className="relative rounded-full p-1 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
      >
        <span className="absolute -inset-1.5"></span>
        <span className="sr-only">View notifications</span>
        <img src={InstagramIcon} alt="Instagram" className="h-8 w-8" />
      </button>
      <button
        type="button"
        className="relative rounded-full p-1 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
      >
        <span className="absolute -inset-1.5"></span>
        <span className="sr-only">View notifications</span>
        <img src={TiktokIcon} alt="TikTok" className="h-9 w-9" />
      </button>
    </div>
  );
};

export default SocialMediaButtons;
