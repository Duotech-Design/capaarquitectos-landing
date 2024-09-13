import Form from "./Form";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import ContactBg from "@/assets/img/contact-us-bg.webp";
const ContactUs = () => {
  const { t } = useTranslation("global");
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <section className="flex flex-wrap mx-auto px-2 sm:px-6 lg:px-8  md:min-h-screen bg-darkBlue">
      <img
        src={ContactBg}
        alt="contact-us-bg"
        onLoad={handleImageLoad}
        className="absolute inset-0 w-full h-[950px] md:h-full object-cover z-0 fade-in"
      />
      {!isImageLoaded && (
        <div className="absolute inset-0 bg-transparent opacity-50 z-10 flex justify-center items-center">
          <div className="spinner"></div>
        </div>
      )}
      <header className="flex-1 lg:flex flex-col gap-y-6 border-2 border-green-300">
        <div className="mt-32 flex gap-x-3">
          <h3 className="text-2xl drop-shadow-2xl text-white text-focus-in">
            {t("form.title")}
          </h3>
        </div>
      </header>
      <div className="flex-1 flex justify-center lg:justify-end border-2 border-purple-400">
        <div className="mt-2 sm:mt-28 w-full lg:w-11/12 w-max-[500px] max-h-[900px] border-2 border-pink-500">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
