export const Footer = () => {
  return (
    <footer className="bg-lightGray py-8">
      <div className="container mx-auto text-center text-white">
        {/* Contenido de Email y Teléfonos para modo móvil */}
        <div className="flex flex-col md:flex-row justify-around items-start pb-8 text-left md:px-12 md:hidden">
          <div className="w-full md:w-1/2 ml-4">
            <h3 className="text-md font-semibold underline">Email</h3>
            <p className="mt-2">
              <a
                href="mailto:info@capaarquitectos.com"
                className="hover:underline"
              >
                info
                <span style={{ fontFamily: "Courier New, monospace" }}>@</span>
                capaarquitectos.com
              </a>
            </p>
            <p className="mt-2">
              <a
                href="mailto:capa.arquitectos.mx@gmail.com"
                className="hover:underline"
              >
                capa.arquitectos.mx
                <span style={{ fontFamily: "Courier New, monospace" }}>@</span>
                gmail.com
              </a>
            </p>
          </div>

          <div className="w-full md:w-1/2 mt-8 md:mt-0 ml-4">
            <h3 className="text-md font-semibold underline">Teléfonos</h3>
            <p className="mt-2">
              <a
                href="https://wa.me/524443188840?text=Quiero%20cotizar%20un%20servicio"
                className="hover:underline"
              >
                <span style={{ fontFamily: "Courier New, monospace" }}>
                  444318 8840
                </span>
              </a>
            </p>
            <p className="mt-2">
              <a
                href="https://wa.me/524442816256?text=Quiero%20cotizar%20un%20servicio"
                className="hover:underline"
              >
                <span style={{ fontFamily: "Courier New, monospace" }}>
                  444281 6256
                </span>
              </a>
            </p>
          </div>
        </div>

        {/* Texto de copyright para modo desktop y tablet */}
        <div className="hidden md:block pt-8">
          <p className="text-sm">
            &copy; 2022 Capa Arquitectos. All rights reserved.
          </p>
        </div>

        <hr className="border-gray-300 w-3/4 mx-auto my-4" />

        {/* Contenido de Email y Teléfonos para modo tablet y desktop */}
        <div className="hidden md:flex flex-col md:flex-row justify-around items-start pb-8 text-left md:px-12">
          <div className="w-full md:w-1/2">
            <h3 className="text-md font-semibold underline">Email</h3>
            <p className="mt-2">
              <a
                href="mailto:info@capaarquitectos.com"
                className="hover:underline"
              >
                info
                <span style={{ fontFamily: "Courier New, monospace" }}>@</span>
                capaarquitectos.com
              </a>
            </p>
            <p className="mt-2">
              <a
                href="mailto:capa.arquitectos.mx@gmail.com"
                className="hover:underline"
              >
                capa.arquitectos.mx
                <span style={{ fontFamily: "Courier New, monospace" }}>@</span>
                gmail.com
              </a>
            </p>
          </div>

          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <h3 className="text-md font-semibold underline">Teléfonos</h3>
            <p className="mt-2">
              <a
                href="https://wa.me/524443188840?text=Quiero%20cotizar%20un%20servicio"
                className="hover:underline"
              >
                <span style={{ fontFamily: "Courier New, monospace" }}>
                  444318 8840
                </span>
              </a>
            </p>
            <p className="mt-2">
              <a
                href="https://wa.me/524442816256?text=Quiero%20cotizar%20un%20servicio"
                className="hover:underline"
              >
                <span style={{ fontFamily: "Courier New, monospace" }}>
                  444281 6256
                </span>
              </a>
            </p>
          </div>
        </div>

        {/* Texto de copyright para modo móvil */}
        <div className="md:hidden pt-8">
          <p className="text-sm">
            &copy; 2022 Capa Arquitectos. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
