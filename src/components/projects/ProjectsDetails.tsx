import CustomButton from "../ui/CustomButton";
import Philosophy from "@/assets/img/philosophy.jpg";

const ProjectsDetails = () => {
  return (
    <div className="flex flex-col mx-auto px-2 sm:px-6 lg:px-8 min-h-screen">
      <h3 className="mt-32 pb-3 text-2xl drop-shadow-sm text-black">
        PROYECTO
      </h3>
      <div className="flex justify-center gap-x-12 w-full">
        <span>FOTOGRAFIAS</span>
        <div className="border-r-2 border-lightGray"></div>
        <span>RENDERS</span>
        <div className="border-r-2 border-lightGray"></div>
        <span>PLANOS</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-y-12 px-32 border-2 border-green-400">
      <div className="col-span-3 border-2 border-pink-400"></div>
      <div className="col-span-9 text-focus-in flex gap-3 text-wrap w-full border-2 border-pink-400"></div>
        <div className="col-span-3 border-2 border-pink-400 text-base text-right pr-3">OFICINAS <strong className="font-extrabold">CORPOL</strong></div>
        <div className="col-span-6 text-focus-in flex gap-3 text-wrap w-full border-2 border-orange-300">
            <img src={Philosophy} className="h-96" />
        </div>
        <div className="col-span-3 border-2 border-pink-400"></div>
        <div className="col-span-4 border-2 border-pink-400"></div>
        <div className="col-span-8 text-focus-in flex gap-3 text-wrap w-full border-2 border-pink-400"></div>
      </div>
      <div className="pt-6 pb-6">
        <CustomButton />
      </div>
    </div>
  );
};

export default ProjectsDetails;
