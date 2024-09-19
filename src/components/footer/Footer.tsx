export const Footer = () => {
  return (
    <footer className="bg-[#DFDFDF] text-center text-gray-600 lg:text-left">
      <div className="py-5 text-center">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* Contact Information */}
          <div className="">
            <h6 className="mb-2  md:text-lg font-cocoUltralight uppercase">
              TELÉFONO
            </h6>
            <a
              href="https://wa.me/524443188840?text=Quiero%20cotizar%20un%20servicio"
              className=" md:text-lg font-sans font-thin block"
            >
              + 52 444318 8840
            </a>
            <a
              href="https://wa.me/524442816256?text=Quiero%20cotizar%20un%20servicio"
              className=" md:text-lg font-sans font-thin block"
            >
              + 52 444281 6256
            </a>
          </div>

          {/* Email Information */}
          <div className="">
            <h6 className="mb-2  md:text-lg font-cocoUltralight uppercase">
              CORREO
            </h6>
            <p className="mb-2  md:text-lg">
              <a href="mailto:info@capaarquitectos.com">
                info<span className="font-sans font-extralight">@</span>
                capaarquitectos.com
              </a>
            </p>
            <p className=" md:text-lg">
              <a href="mailto:capa.arquitectos.mx@gmail.com">
                capa.arquitectos.mx
                <span className="font-sans font-extralight">@</span>gmail.com
              </a>
            </p>
          </div>

          {/* Social Media Links */}
          <div className="">
            <h6 className="mb-2  md:text-lg font-cocoUltralight uppercase">
              SÍGUENOS
            </h6>
            <p className="mb-2  md:text-lg">Instagram</p>
            <p className="mb-2  md:text-lg">Facebook</p>
            <p className=" md:text-lg">TikTok</p>
          </div>
        </div>
      </div>

      {/* Footer bottom line */}
      <div className="max-w-5xl mx-auto border-t border-white/75 py-4 text-center">
  <span className="text-xs lg:text-sm">
    © <span className="font-sans font-extralight">2022</span> Capa Arquitectos. All rights reserved. - 
    {/* Aquí hacemos que el "SITE by Duotech Design" aparezca en una nueva línea solo en móvil */}
    <span className="block md:inline">SITE by 
      <a href="https://duotechdesign.com/" className="font-bold">
        {" "} Duotech Design
      </a>
    </span>
  </span>
</div>

    </footer>
  );
};
