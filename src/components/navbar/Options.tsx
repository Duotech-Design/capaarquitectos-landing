const Options = () => {
  return (
    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:h-auto">
      <div className="hidden sm:ml-6 sm:block">
        <div className="flex space-x-4 ">
          <a
            href="philosophy"
            className="rounded-md px-3 py-2 text-sm font-medium text-white hover:underline hover:decoration-white hover:underline-offset-8"
            aria-current="page"
          >
            Filosofía
          </a>
          <a
            href="#projects"
            className="rounded-md px-3 py-2 text-sm font-medium text-white hover:underline hover:decoration-white hover:underline-offset-8"
          >
            Proyectos
          </a>
          <a
            href="team"
            className="rounded-md px-3 py-2 text-sm font-medium text-white hover:underline hover:decoration-white hover:underline-offset-8"
          >
            Equipo
          </a>
          <a
            href="contact-us"
            className="rounded-md px-3 py-2 text-sm font-medium text-white hover:underline hover:decoration-white hover:underline-offset-8"
          >
            Contactanos
          </a>
          <div className="relative inline-block text-left">
            <button
              className="inline-flex justify-center w-full rounded-md px-3 py-2 text-sm font-medium text-white hover:text-white focus:outline-none"
              id="options-menu"
              aria-haspopup="true"
              aria-expanded="true"
            >
              EN/ES
              <svg
                className="ml-2 -mr-1 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div
              className="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-black backdrop-blur-sm ring-1 ring-black ring-opacity-5"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <div className="py-1" role="none">
                <button
                  onClick={() => console.log("English selected")}
                  className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-darkGray"
                  role="menuitem"
                >
                  English
                </button>
                <button
                  onClick={() => console.log("Español seleccionado")}
                  className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-darkGray"
                  role="menuitem"
                >
                  Español
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Options;
