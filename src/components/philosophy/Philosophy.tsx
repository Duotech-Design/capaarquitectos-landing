import CustomButton from "../ui/CustomButton";
import Start from "@/assets/svg/icons/star.svg";
import "./Philosophy.css";

const Philosophy = () => {
  return (
    <div className="bg-philosophy-bg bg-cover bg-center bg-fixed">
      <div className="inset-0 bg-darkGray opacity-65 z-0 flex flex-col px-2 sm:px-6 lg:px-8 text-white min-h-screen">
        <h3 className="mt-32 2xl:mt-32 pb-3 md:pb-16 font-thin text-lg lg:text-3xl 2xl:text-5xl drop-shadow-sm text-gray-200 text-focus-in">
          NUESTRA FILOSOFÍA
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-2 md:gap-y-12 2xl:gap-y-32 h-full 2xl:mt-16">
          <div className="col-span-2"></div>
          <div
            className="col-span-10 text-focus-in flex gap-3 text-wrap w-full "
            style={{ animationDelay: "0s" }}
          >
            <img
              src={Start}
              alt="Star Icon"
              className="h-4 w-4 md:h-8 md:w-8 rotate-center"
              style={{ animationDelay: "0.5s" }}
            />
            <p className="leading-relaxed subpixel-antialiased text-xs md:text-base 2xl:text-2xl 2xl:w-4/5 list-outside text-white text-justify">
              En CAPA Arquitectos, creemos que la arquitectura va más allá de la
              proyección y construcción de espacios; es la creación de
              experiencias y la materialización de sueños. Nos dedicamos a
              diseñar y construir proyectos arquitectónicos contemporáneos que
              reflejan las tendencias actuales y la esencia única de cada
              cliente.
            </p>
          </div>
          <div className="col-span-3"></div>
          <div
            className="col-span-9 text-focus-in flex gap-3 text-wrap w-full "
            style={{ animationDelay: "0.5s" }}
          >
            <img
              src={Start}
              alt="Star Icon"
              className="h-4 w-4 md:h-8 md:w-8 rotate-center"
              style={{ animationDelay: "1s" }}
            />
            <p className="leading-relaxed text-xs md:text-base 2xl:text-2xl 2xl:w-4/5 list-outside text-gray-50 text-justify">
              Nos especializamos en el diseño habitacional y comercial,
              remodelaciones y diseño de interiores, siempre utilizando
              materiales en tendencia para asegurar la calidad y la innovación
              en cada proyecto. Nuestro compromiso con el servicio al cliente es
              inquebrantable; trabajamos mano a mano con nuestros clientes,
              escuchando sus necesidades y aspiraciones para convertir sus ideas
              en realidades tangibles.
            </p>
          </div>
          <div className="col-span-4"></div>
          <div
            className="col-span-8 text-focus-in flex gap-3 text-wrap w-full "
            style={{ animationDelay: "1s" }}
          >
            <img
              src={Start}
              alt="Star Icon"
              className="h-4 w-4 md:h-8 md:w-8 rotate-center"
              style={{ animationDelay: "1.5s" }}
            />
            <p className="leading-relaxed text-xs md:text-base 2xl:text-2xl 2xl:w-4/5 list-outside text-gray-50 text-justify">
              En cada proyecto, nos esforzamos por crear espacios funcionales,
              estéticamente atractivos y sostenibles, que no solo cumplan con
              los estándares más altos de la industria, sino que también superen
              las expectativas de quienes los habitan. La pasión por el diseño y
              la construcción es lo que nos impulsa a innovar y mejorar
              continuamente, siempre con el objetivo de aportar un valor
              significativo a la vida de nuestros clientes y a la comunidad.
            </p>
          </div>
        </div>
        <div className="pt-6 pb-6">
          <CustomButton />
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
