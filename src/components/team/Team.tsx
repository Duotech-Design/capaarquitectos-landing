import Instagram from "@/assets/icons/instagram.svg";
import Facebook from "@/assets/icons/facebook.svg";

const Team = () => {
  return (
    <section className="mx-auto px-2 sm:px-6 lg:px-8 min-h-screen">
      <header className="flex flex-col flex-1 gap-y-6">
        <div className="mt-32 flex gap-x-3">
          <h3 className="text-4xl text-gray-700">Nuestro</h3>
          <strong className="text-4xl font-bold">Equipo</strong>
        </div>
      </header>
      <div className="mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-xl mx-auto md:max-w-3xl lg:max-w-full">
          {/* <!-- Team Member 1 --> */}
          <div className="block group md:col-span-2 lg:col-span-1">
            <div className="relative mb-6">
              <img
                src="https://pagedone.io/asset/uploads/1696238374.png"
                alt="Antonio image"
                className="w-[500px] h-auto mx-auto transition-all duration-500 object-cover group-hover:filter group-hover:brightness-50"
              />
              <div className="absolute right-[50%] top-[50%] transform translate-x-[50%] translate-y-[-50%]">
                <div className="flex items-center my-auto justify-center gap-6 transition-all duration-500 group-hover:opacity-100 opacity-0">
                  <img
                    src={Instagram}
                    alt="Instagram"
                    className="w-11 h-11 mx-auto cursor-pointer"
                  />
                  <img
                    src={Facebook}
                    alt="Facebook"
                    className="w-10 h-10 mx-auto cursor-pointer"
                  />
                </div>
              </div>
            </div>
            <h4 className="text-xl font-semibold text-darkBlue mb-2 capitalize text-center transition-all duration-500 group-hover:scale-125">
              ALFREDO CARDONA{" "}
            </h4>
            <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
              CO-FUNDADOR
            </span>
          </div>
          {/* <!-- Team Member 2 --> */}
          <div className="block group md:col-span-2 lg:col-span-1">
            <div className="relative mb-6">
              <img
                src="https://pagedone.io/asset/uploads/1696238374.png"
                alt="Antonio image"
                className="w-[500px] h-auto mx-auto transition-all duration-500 object-cover group-hover:filter group-hover:brightness-50"
              />
              <div className="absolute right-[50%] top-[50%] transform translate-x-[50%] translate-y-[-50%]">
                <div className="flex items-center my-auto justify-center gap-6 transition-all duration-500 group-hover:opacity-100 opacity-0">
                  <img
                    src={Instagram}
                    alt="Instagram"
                    className="w-11 h-11 mx-auto cursor-pointer"
                  />
                  <img
                    src={Facebook}
                    alt="Facebook"
                    className="w-10 h-10 mx-auto cursor-pointer"
                  />
                </div>
              </div>
            </div>
            <h4 className="text-xl font-semibold text-darkBlue mb-2 capitalize text-center transition-all duration-500 group-hover:scale-125">
              DAVID PALAU{" "}
            </h4>
            <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
              DIRECTOR DE DISEÑO
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
