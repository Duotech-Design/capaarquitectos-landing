import { useState } from "react";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: Option[];
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

const CustomSelect = ({
  options,
  placeholder,
  value,
  onChange,
}: CustomSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleOptionClick = (option: Option) => {
    onChange(option.value);
    setIsOpen(false);
  };

  const selectedOption = options.find((option) => option.value === value);

  return (
    <div className="relative mb-3 flex-1">
      <label className="flex items-center mb-1 text-white text-xs font-medium">
        ¿Como te enteraste de nosotros?
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
      </label>
      <div
        className="relative w-full h-8 pr-5 pl-12 py-2.5 text-xs font-extralight font-sans shadow-xs text-gray-900 bg-white/90 placeholder-gray-400 focus:outline-none cursor-pointer"
        onClick={toggleDropdown}
      >
        <div className="absolute text-gray-500 inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
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
        </div>
        {selectedOption ? (
          selectedOption.label
        ) : (
          <span className="text-gray-500">{placeholder}</span>
        )}
      </div>
      {isOpen && (
        <div className="fade-in absolute text-xs mt-2 z-50 w-full backdrop-blur-2xl bg-white/95 max-h-72 overflow-y-auto">
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
