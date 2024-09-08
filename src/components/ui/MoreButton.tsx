import Arrow from "@/assets/arrow-right-solid.svg";

const MoreButton = ({text = "CONTACTANOS"}: {text?: string}) => {
  return (
    <button
      type="submit"
      className="border-b-2 border-current group flex justify-start items-center py-1.5 text-base font-semibold leading-6 text-current"
    >
      <span className="flex items-center justify-center">{text}</span>
      <img src={Arrow} alt="arrow" className="w-4 h-4 ml-2" />
    </button>
  );
};

export default MoreButton;
