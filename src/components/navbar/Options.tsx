const Options = () => {
  return (
    <div className="flex flex-1 items-center justify-center sm:items-stretch border-2 border-purple-400 h-16 sm:h-auto">
      <div className="hidden sm:ml-6 sm:block border-2 border-orange-500">
        <div className="flex space-x-4 ">
          <a
            href="#"
            className="rounded-md px-3 py-2 text-lg font-medium text-gray-500 hover:text-black"
            aria-current="page"
          >
            Filosofía
          </a>
          <a
            href="#"
            className="rounded-md px-3 py-2 text-lg font-medium text-gray-500 hover:text-black"
          >
            Proyectos
          </a>
          <a
            href="#"
            className="rounded-md px-3 py-2 text-lg font-medium text-gray-500 hover:text-black"
          >
            Equipo
          </a>
          <a
            href="#"
            className="rounded-md px-3 py-2 text-lg font-medium text-gray-500 hover:text-black"
          >
            Contactanos
          </a>
          <a
            href="#"
            className="rounded-md px-3 py-2 text-lg font-medium text-gray-500 hover:text-black"
          >
            EN/ES
          </a>
        </div>
      </div>
    </div>
  );
};

export default Options;
