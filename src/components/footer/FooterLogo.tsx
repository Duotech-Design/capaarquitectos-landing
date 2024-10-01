// src/components/footer/FooterLogo.tsx
import logoCapaArquitectos from "/Users/alisonrangel/Desktop/RA/proyectos /CAPA ARQUITECTOS /LOGO/logo.png";


const FooterLogo = () => {
    return (
      <div className="flex justify-center md:justify-start p-4">
        <img
          className="h-40 w-auto cursor-pointer" // Tamaño del logo aumentado a 40px de altura
          src={logoCapaArquitectos}
          alt="Capa Arquitectos"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
      </div>
    );
  };
  
  export default FooterLogo;
  