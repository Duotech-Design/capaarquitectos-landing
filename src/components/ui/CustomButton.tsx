import Arrow from "@/assets/arrow-right-solid.svg";

const CustomButton = ({text = "CONTACTANOS"}: {text?: string}) => {
  return (
    <button
      type="submit"
      className="z-50 relative group text-focus-in flex justify-start items-center py-1.5 text-base font-semibold leading-6 text-white"
    >
      <span className="flex items-center justify-center">{text}</span>
      <img src={Arrow} alt="arrow" className="w-4 h-4 ml-2 filter invert" />
      <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-[2px] bg-white group-hover:w-3/6"></span>
      <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-[2px] bg-white group-hover:w-3/6"></span>
    </button>
  );
};

export default CustomButton;
