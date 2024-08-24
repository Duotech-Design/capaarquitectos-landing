import Arrow from "../../assets/arrow-right-solid.svg";

const CustomButton = () => {
  return (
    <button
      type="submit"
      className="flex justify-start items-center py-1.5 text-sm font-semibold leading-6 text-black border-b-2 border-b-black"
    >
      <span className="flex items-center justify-center">CONTACTANOS</span>
      <img src={Arrow} alt="arrow" className="w-4 h-4 ml-2" />
    </button>
  );
};
export default CustomButton;
