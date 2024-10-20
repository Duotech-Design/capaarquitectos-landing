import Form from "./Form";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import ContactBg from "@/assets/img/contact-us-bg.webp";

const ContactUs = () => {
  const { t } = useTranslation("global");
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <section className="relative overflow-hidden flex flex-wrap justify-center md:justify-normal items-center md:items-baseline gap-0 mx-auto px-2 sm:px-6 lg:px-8 bg-darkBlue min-h-screen">
      <img
        src={ContactBg}
        alt="contact-us-bg"
        onLoad={handleImageLoad}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {!isImageLoaded && (
      
        <div className="absolute inset-0 bg-transparent opacity-50 z-10 flex justify-center items-center">
        <div className="spinner"></div>
      </div>
      )}
      <header className="relative mt-28 md:mt-32 h-fit w-full">
        <h1 className="drop-shadow-2xl text-2xl text-white text-focus-in alig font-cocoUltralight">{t("form.title")}</h1>
      </header>
      <div className="relative flex-1 flex justify-center lg:justify-end pb-3">
        <div className="w-full md:w-10/12 lg:w-12/12 max-w-[650px] h-full lg:h-auto">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;