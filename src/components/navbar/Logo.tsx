import logoCapa from "@/assets/logoCapa.png";
const Logo = () => {
    return (
        <div className="sm:flex flex-shrink-0 items-center hidden">
            <img
              className="h-16 w-auto"
              src={logoCapa}
              alt="Capa Arquitectos"
            />
          </div>
    )
    }
export default Logo;