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
    <section className="overflow-hidden flex flex-wrap justify-center md:justify-normal items-center md:items-baseline gap-0 mx-auto px-2 sm:px-6 lg:px-8  bg-darkBlue h-[900px] lg:h-[760px] 2xl:h-full ">
      <img
        src={ContactBg}
        alt="contact-us-bg"
        onLoad={handleImageLoad}
        className="absolute inset-0 w-full h-[900px] lg:h-[760px] object-cover z-0 2xl:h-full"
      />
      {!isImageLoaded && (
        <div className="absolute inset-0 bg-transparent opacity-50 z-10 flex justify-center items-center">
          <div className="spinner"></div>
        </div>
      )}
      <header className="mt-28 md:mt-32 h-fit">
        <h3 className="drop-shadow-2xl text-2xl text-white text-focus-in font-cocoUltralight mt-10">
          {t("form.title")}
        </h3>
      </header>
      <div className="flex-1 flex justify-center lg:justify-end">
        <div className="mt-0 sm:mt-28 w-full md:w-10/12 lg:w-7/12 w-max-[550px] h-[900px] lg:h-[760px]">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
