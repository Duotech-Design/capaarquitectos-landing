const MenuMobile = ({ showMobileMenu, onClick }: { showMobileMenu: boolean; onClick: () => void }) => {
  return (
    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
      <button
        type="button"
        className="relative inline-flex items-center justify-center p-1 text-white"
        aria-controls="mobile-menu"
        aria-expanded="false"
        onClick={onClick}
      >
        <span className="absolute -inset-0.5"></span>
        <span className="sr-only">Open main menu</span>
        <svg
          className={`h-8 w-8 ${showMobileMenu ? "hidden" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="0.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        <svg
          className={`h-8 w-8 ${showMobileMenu ? "" : "hidden"}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="0.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default MenuMobile;
