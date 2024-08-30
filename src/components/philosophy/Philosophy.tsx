

const Philosophy = () => {
  return (
    <div className="bg-philosophy-bg bg-cover bg-center bg-fixed text-white p-10">
      <div className="max-w-6xl mx-auto grid gap-8">
        <div className="relative pl-10">
          <img src="/src/svg/star.png" alt="Star Icon" className="absolute top-0 left-0 h-6 w-6"/>
          <p className="leading-relaxed text-lg">
            En CAPA Arquitectos, creemos que la arquitectura va más allá de la proyección y construcción de espacios;
            es la creación de experiencias y la materialización de sueños. Nos dedicamos a diseñar y construir proyectos
            arquitectónicos contemporáneos que reflejan las tendencias actuales y la esencia única de cada cliente.
          </p>
        </div>

        <div className="relative pl-14">
          <img src="/src/svg/star.png" alt="Star Icon" className="absolute top-0 left-0 h-6 w-6"/>
          <p className="leading-relaxed text-lg">
            Nos especializamos en el diseño habitacional y comercial, remodelaciones y diseño de interiores, siempre 
            utilizando materiales en tendencia para asegurar la calidad y la innovación en cada proyecto. Nuestro 
            compromiso con el servicio al cliente es inquebrantable; trabajamos mano a mano con nuestros clientes, 
            escuchando sus necesidades y aspiraciones para convertir sus ideas en realidades tangibles.
          </p>
        </div>

        <div className="relative pl-20">
          <img src="/src/svg/star.png" alt="Star Icon" className="absolute top-0 left-0 h-6 w-6"/>
          <p className="leading-relaxed text-lg">
            En cada proyecto, nos esforzamos por crear espacios funcionales, estéticamente atractivos y sostenibles, 
            que no solo cumplan con los estándares más altos de la industria, sino que también superen las expectativas 
            de quienes los habitan. La pasión por el diseño y la construcción es lo que nos impulsa a innovar y mejorar 
            continuamente, siempre con el objetivo de aportar un valor significativo a la vida de nuestros clientes y a la comunidad.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
