import logoCapaArquitectos from "@/assets/svg/icons/logoCapaArquitectos.svg";
const Logo = () => {
  return (
    <div className="sm:flex flex-shrink-0 items-center hidden">
      <img
        className="h-16 w-auto"
        src={logoCapaArquitectos}
        alt="Capa Arquitectos"
      />
    </div>
  );
};
export default Logo;
