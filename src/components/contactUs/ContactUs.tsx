import Form from "./Form";
const ContactUs = () => {
  return (
    <section className="flex flex-wrap mx-auto px-2 sm:px-6 lg:px-8 min-h-screen bg-contactUs-bg bg-no-repeat bg-cover bg-center">
      <header className="flex-1 flex flex-col gap-y-6">
        <div className="mt-28 flex gap-x-3">
          <h3 className="text-4xl drop-shadow-2xl text-white">CONTACTANOS</h3>
        </div>
      </header>
      <div className="flex-1 flex justify-end pb-3">
        <div className="h-auto mt-28  backdrop-blur-md bg-darkBlue/30">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
