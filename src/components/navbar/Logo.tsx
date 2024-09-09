import logoCapaArquitectos from "@/assets/svg/icons/logoCapaArquitectos.svg";
import { useNavigate } from "react-router-dom";
const Logo = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/");
  };
  return (
    <div
      className="sm:flex flex-shrink-0 items-center hidden cursor-pointer"
      onClick={handleClick}
    >
      <img
        className="h-16 w-auto"
        src={logoCapaArquitectos}
        alt="Capa Arquitectos"
      />
    </div>
  );
};
export default Logo;
