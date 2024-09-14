import { ChangeEvent } from "react";

interface CustomInputProps {
  label: string;
  placeholder: string;
  name: string;
  id: string;
  type: string;
  limit?: number;
  value: string;
  onChange: (e: ChangeEvent<unknown>) => void;
  onBlur: (e: ChangeEvent<unknown>) => void;
  error?: boolean;
  required?: boolean;
  icon?: boolean;
}

const CustomInput = ({
  label,
  placeholder,
  name,
  id,
  type,
  limit,
  value,
  onChange,
  onBlur,
  error,
  required = true,
  icon = true,
}: CustomInputProps) => {
  return (
    <div className={`relative mb-3 ${icon ? "" : "fade-in"}`}>
      <label className="flex  items-center mb-1 text-white text-base font-medium">
        {label}{" "}
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
      <div className="relative  text-gray-500 focus-within:text-gray-900">
        {icon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
            {name === "email" && (
              <svg
                className="stroke-current ml-1"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.54887 6.73325L7.76737 9.36216C9.82591 10.645 10.8552 11.2864 11.9999 11.2863C13.1446 11.2861 14.1737 10.6443 16.2318 9.36081L20.4611 6.72333M11 20H13C16.7712 20 18.6569 20 19.8284 18.8284C21 17.6569 21 15.7712 21 12C21 8.22876 21 6.34315 19.8284 5.17157C18.6569 4 16.7712 4 13 4H11C7.22876 4 5.34315 4 4.17157 5.17157C3 6.34315 3 8.22876 3 12C3 15.7712 3 17.6569 4.17157 18.8284C5.34315 20 7.22876 20 11 20Z"
                  stroke=""
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            )}
            {name === "name" && (
              <svg
                className="stroke-current ml-1"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 21V20.1429C20 19.0805 20 18.5493 19.8997 18.1099C19.5578 16.6119 18.3881 15.4422 16.8901 15.1003C16.4507 15 15.9195 15 14.8571 15H10C8.13623 15 7.20435 15 6.46927 15.3045C5.48915 15.7105 4.71046 16.4892 4.30448 17.4693C4 18.2044 4 19.1362 4 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                  stroke=""
                  stroke-width="1.6"
                  stroke-linecap="round"
                />
              </svg>
            )}
            {name === "phone" && (
              <svg
                className="stroke-current ml-1"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.02623 10.2611L12.7387 17.9736C14.4091 19.6439 17.1173 19.6439 18.7877 17.9736C19.4559 17.3054 19.4559 16.2221 18.7877 15.554L16.6454 13.4116C16.1582 12.9244 15.3683 12.9244 14.8811 13.4116C14.3939 13.8988 13.604 13.8988 13.1168 13.4116L9.23534 9.53015C8.74814 9.04295 8.74814 8.25305 9.23534 7.76585C9.72253 7.27865 9.72253 6.48875 9.23534 6.00155L7.44584 4.21205C6.77768 3.5439 5.69439 3.5439 5.02623 4.21205C3.35584 5.88244 3.35584 8.59067 5.02623 10.2611Z"
                  stroke=""
                  stroke-width="1.6"
                />
              </svg>
            )}
          </div>
        )}
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={`block w-full h-8 pr-5 ${
            icon ? "pl-12" : "pl-4"
          } py-2.5 text-base font-extralight font-sans shadow-xs rounded-none text-gray-900 bg-white/90 placeholder-gray-400 focus:outline-none ${
            error ? "border-2 border-red-500" : "border border-gray-300"
          }`}
          placeholder={placeholder}
          maxLength={limit ? limit : 80}
        />
      </div>
    </div>
  );
};

export default CustomInput;
