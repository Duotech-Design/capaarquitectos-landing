import "./SendButton.css";
const SendButton = ({ text, state }: { text: string; state: string }) => {
  return (
    <button
      type="submit"
      className={`${state} w-full flex justify-center items-center py-1.5 text-sm font-semibold leading-6 text-white border-b-2 border-b-white`}
    >
      <span className="flex items-center justify-center fade-in-left">
        {text}
        {state === "start" && (
          <svg
            className="ml-1 text-current md:ml-2"
            width="35px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 12H18M18 12L13 7M18 12L13 17"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
        {state === "loading" && (
          <span
            className="animate-spin ml-2 inline-block size-5 my-[5px] border-[3px] border-current border-t-transparent text-white rounded-full"
            role="status"
            aria-label="loading"
          >
            <span className="sr-only">Loading...</span>
          </span>
        )}
        {state === "success" && (
          <svg
            className="ml-1 text-current md:ml-2"
            width="35px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 13l4 4L19 7"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
        {state === "error" && (
          <svg
            className="ml-1 text-current md:ml-2"
            width="35px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 18L18 6M6 6l12 12"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
    </button>
  );
};
export default SendButton;
