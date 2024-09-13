export const Footer = () => {
  return (
    <>
      <footer className="bg-darkBlue/40 text-center text-white/75 lg:text-left">
        <div className="py-6 text-center">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {/* Contact Information */}
            <div>
              <h6 className="mb-2 text-xs font-bold uppercase">TELÉFONO</h6>
              <p className="mb-2 text-xs font-sans font-semibold">
                <a href="https://wa.me/524443188840?text=Quiero%20cotizar%20un%20servicio" className="font-sans font-semibold">
                  + 52 444318 8840
                </a>
              </p>
              <p className="text-xs font-sans font-semibold">
                <a href="https://wa.me/524442816256?text=Quiero%20cotizar%20un%20servicio" className="font-sans font-semibold">
                  + 52 444281 6256
                </a>
              </p>
            </div>

            {/* Email Information */}
            <div>
              <h6 className="mb-2 text-xs font-bold uppercase">CORREO</h6>
              <p className="mb-2 text-xs ">
                <a href="mailto:info@capaarquitectos.com" >
                  info<span className="font-sans font-bold">@</span>capaarquitectos.com
                </a>
              </p>
              <p className="text-xs ">
                <a href="mailto:capa.arquitectos.mx@gmail.com" >
                  capa.arquitectos.mx<span className="font-sans font-bold">@</span>gmail.com
                </a>
              </p>
            </div>

            {/* Social Media Links */}
            <div>
              <h6 className="mb-2 text-xs font-bold uppercase">SÍGUENOS</h6>
              <p className="mb-2 text-xs  font-semibold">Instagram</p>
              <p className="mb-2 text-xs font-semibold">Facebook</p>
              <p className="text-xs  font-semibold">TikTok</p>
            </div>
          </div>
        </div>

        {/* Footer bottom line */}
        <div className="max-w-5xl mx-auto border-t border-white/8 py-4 text-center text-xs font-sans">
          <span>
            © 2022 Capa Arquitectos. All rights reserved. - SITE by
            <a href="https://duotechdesign.com/" className="font-bold"> Duotech Design</a>
          </span>
        </div>
      </footer>
    </>
  );
};
