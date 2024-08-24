import CustomButton from "../ui/CustomButton";
const Projects = () => {
  return (
    <div className="mx-auto px-2 sm:px-6 lg:px-8 border-2 border-red-950 min-h-screen">
      <div className="flex items-center justify-center  border-2 border-red-500 text-3xl lg:text-7xl">
        <div className="flex flex-col gap-y-4 justify-center items-center border-2 border-pink-500 h-screen">
          <h1>CAPA ARQUITECTOS</h1>
          <CustomButton />
        </div>
      </div>
    </div>
  );
};

export default Projects;
