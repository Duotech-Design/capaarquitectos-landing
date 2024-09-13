import { useState } from "react";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  text: string;
  name: string;
  options: Option[];
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
  required?: boolean;
  zIndex?: number;
}

const CustomSelect = ({
  text,
  name,
  options,
  placeholder,
  value,
  onChange,
  error,
  required = true,
  zIndex = 10,
}: CustomSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: Option) => {
    onChange(option.value);
    setIsOpen(false);
  };

  const handleBlur = () => {
    setIsOpen(false);
  };

  const selectedOption = options.find((option) => option.value === value);

  return (
    <div className={`relative mb-3 scale-in-center z-${zIndex}`} onBlur={handleBlur} tabIndex={0}>
      <label className="flex items-center mb-1 text-white text-base font-medium">
        {text}
        {required && (
          <svg
            width="7"
            height="7"
            className="ml-1"
            viewBox="0 0 7 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
              fill="#EF4444"
            />
          </svg>
        )}
      </label>
      <div
        className={`relative w-full h-8 pr-5 pl-12 py-[2px] text-base font-extralight font-sans shadow-xs text-gray-900 bg-white/90 placeholder-gray-400 focus:outline-none cursor-pointer ${
          error ? "border-2 border-red-500" : "border border-gray-300"
        }`}
        onClick={toggleDropdown}
      >
        <div className="absolute text-gray-500 inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
          {name === "howDidYouHearAboutUs" ? (
            <svg
              className="stroke-current ml-1"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="10" />
              <path
                stroke=""
                stroke-width="1.5"
                d="M9 9a3 3 0 1 1 6 0c0 3-3 4-3 4"
              />
              <line x1="12" y1="17" x2="12" y2="17" />
            </svg>
          ) : (
            <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="#6B7280"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0" />

              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                <path d="M16 12h7v1h-7zM2 13h7v-1H2zm10 10h1v-7h-1zm0-14h1V2h-1zm-2 1h5v5h-5zm1 4h3v-3h-3z" />

                <path fill="none" d="M0 0h24v24H0z" />
              </g>
            </svg>
          )}
        </div>
        {selectedOption ? (
          selectedOption.label
        ) : (
          <span className="text-gray-400">{placeholder}</span>
        )}
        <svg
          className={`absolute inset-y-1.5 right-3 h-5 w-5 transition-transform duration-300 text-gray-400 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
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
      </div>
      {isOpen && (
        <div className="fade-in absolute mt-2 w-full bg-white max-h-72 overflow-y-auto text-base font-extralight font-sans">
          {options.map((option) => (
            <div
              key={option.value}
              className="py-2 px-4 cursor-pointer hover:bg-gray-300"
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
