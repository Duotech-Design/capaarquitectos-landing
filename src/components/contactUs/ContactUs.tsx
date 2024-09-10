import Form from "./Form";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import ContactBg from "@/assets/img/contact-us-bg.webp";
const ContactUs = () => {
  const { t } = useTranslation("global");
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
      <header className="lg:flex-1 lg:flex flex-col gap-y-6">
        <div className="mt-32 flex gap-x-3">
          <h3 className="text-2xl drop-shadow-2xl text-white text-focus-in">{t("form.title")}</h3>
        </div>
      </header>
      <div className="flex-1 flex justify-center lg:justify-end mb-3 ">
        <div className="mt-2 sm:mt-28 backdrop-blur-md bg-darkBlue/30 pb-3 w-max-[200px] max-h-[900px]">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
