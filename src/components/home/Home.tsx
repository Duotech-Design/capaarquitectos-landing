import CustomButton from "../ui/CustomButton";
const Home = () => {
  return (
    <section className="relative mx-auto px-2 sm:px-6 lg:px-8 border-2 border-red-950 min-h-screen bg-home-bg bg-no-repeat bg-cover bg-center">
      <div className="absolute inset-0 bg-darkBlue opacity-15 z-0"></div>
      <div className="relative flex items-center justify-center border-2 border-red-500 text-3xl lg:text-7xl z-10">
        <div className="flex flex-col gap-y-4 justify-center items-center border-2 border-pink-500 h-screen text-white">
          <h1>CAPA ARQUITECTOS</h1>
          <CustomButton />
        </div>
      </div>
    </section>
  );
};

export default Home;
