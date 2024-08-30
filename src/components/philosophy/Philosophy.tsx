import CustomButton from "../ui/CustomButton";

const Philosophy = () => {
  return (
    <div className="bg-philosophy-bg bg-cover bg-center bg-fixed text-white p-20 min-h-screen">
      <div className="max-w-full mx-auto grid gap-10 mt-28 ">
        <div className="relative pl-20">
          <img src="/src/assets/svg/icons/star.svg" alt="Star Icon" className="absolute top-0 left-0 h-8 w-8"/>
          <p className="leading-relaxed text-l">
            En CAPA Arquitectos, creemos que la arquitectura va más allá de la proyección y construcción de espacios;
            es la creación de experiencias y la materialización de sueños. Nos dedicamos a diseñar y construir proyectos
            arquitectónicos contemporáneos que reflejan las tendencias actuales y la esencia única de cada cliente.
          </p>
        </div>

        <div className="relative pl-24">
          <img src="/src/assets/svg/icons/star.svg" alt="Star Icon" className="absolute top-0 left-0 h-8 w-8"/>
          <p className="leading-relaxed text-l">
            Nos especializamos en el diseño habitacional y comercial, remodelaciones y diseño de interiores, siempre 
            utilizando materiales en tendencia para asegurar la calidad y la innovación en cada proyecto. Nuestro 
            compromiso con el servicio al cliente es inquebrantable; trabajamos mano a mano con nuestros clientes, 
            escuchando sus necesidades y aspiraciones para convertir sus ideas en realidades tangibles.
          </p>
        </div>

        <div className="relative pl-28">
          <img src="/src/assets/svg/icons/star.svg" alt="Star Icon" className="absolute top-0 left-0 h-8 w-8"/>
          <p className="leading-relaxed text-l">
            En cada proyecto, nos esforzamos por crear espacios funcionales, estéticamente atractivos y sostenibles, 
            que no solo cumplan con los estándares más altos de la industria, sino que también superen las expectativas 
            de quienes los habitan. La pasión por el diseño y la construcción es lo que nos impulsa a innovar y mejorar 
            continuamente, siempre con el objetivo de aportar un valor significativo a la vida de nuestros clientes y a la comunidad.
          </p>
        </div>
        <div >
        <CustomButton />
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
