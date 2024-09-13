import { useFormik } from "formik";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import validationSchema from "../../helpers/validationSchema";
import CustomInput from "../ui/CustomInput";
import CustomSelect from "../ui/CustomSelect";
import CustomTabs from "../ui/CustomTabs";
import SendButton from "./SendButton";
const Form = () => {
  const { t } = useTranslation("global");
  const [activeTab, setActiveTab] = useState(0);
  const optionsHowDidYouHearAboutUs = [
    { value: "facebook", label: "Facebook" },
    { value: "google", label: "Google" },
    { value: "revista", label: "Revista" },
    { value: "amigo o conocido", label: "Amigo o conocido" },
    { value: "otro", label: "Otro" },
  ];

  const optionsConstruction = [
    { value: "Obra Nueva", label: "Obra Nueva" },
    { value: "Supervicion de Obra", label: "Supervicion de Obra" },
    { value: "Obra Civil", label: "Obra Civil" },
    {
      value: "Remodelaciones y Ampliaciones",
      label: "Remodelaciones y Ampliaciones",
    },
  ];

  const optionsProjectExecution = [
    { value: "Planos Constructivos", label: "Planos Constructivos" },
    {
      value: "Gestion de Permisos y Licencias",
      label: "Gestion de Permisos y Licencias",
    },
    {
      value: "Memorias Descriptivas y Especificaciones",
      label: "Memorias Descriptivas y Especificaciones",
    },
    {
      value: "Modelado 3D y Renderizacion",
      label: "Modelado 3D y Renderizacion",
    },
  ];

  const optionsArchitecturalDesign = [
    { value: "Diseño Habitacional", label: "Diseño Habitacional" },
    { value: "Diseño Comercial", label: "Diseño Comercial" },
    { value: "Diseño de Interiores", label: "Diseño de Interiores" },
  ];

  const optionsConsulting = [
    { value: "Estudios de Factibilidad", label: "Estudios de Factibilidad" },
    { value: "Asesoria de Diseño", label: "Asesoria de Diseño" },
  ];

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      howDidYouHearAboutUs: "",
      construccion: "",
      proyectosEjecutivos: "",
      disenoArquitectonico: "",
      consultoriaAsesoria: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (_, { setSubmitting }) => {
      if (Object.keys(formik.errors).length === 0) {
        formik.resetForm();
      }
      setSubmitting(false);
    },
  });

  return (
    <form
      className="p-6 min-w-[280px] flex flex-col justify-center backdrop-blur-md bg-darkBlue/30"
      onSubmit={formik.handleSubmit}
    >
      <CustomInput
        label={t("form.name")}
        placeholder="Enter Name"
        name="name"
        id="name"
        type="text"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={Boolean(formik.touched.name && formik.errors.name)}
        required
      />
      <CustomInput
        label={t("form.email")}
        placeholder="Enter Email"
        name="email"
        id="email"
        type="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={Boolean(formik.touched.email && formik.errors.email)}
        required
      />
      <CustomInput
        label={t("form.phone")}
        placeholder="Enter Phone"
        name="phone"
        id="phone"
        type="text"
        limit={10}
        value={formik.values.phone}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={Boolean(formik.touched.phone && formik.errors.phone)}
        required
      />
      <CustomSelect
        text="¿Como te enteraste de nosotros?"
        name="howDidYouHearAboutUs"
        options={optionsHowDidYouHearAboutUs}
        placeholder="Select an option..."
        value={formik.values.howDidYouHearAboutUs}
        onChange={(value) =>
          formik.setFieldValue("howDidYouHearAboutUs", value)
        }
        error={Boolean(
          formik.touched.howDidYouHearAboutUs &&
            formik.errors.howDidYouHearAboutUs
        )}
        zIndex={50}
      />
      <div className="relative mt-3 mb-3">
        <label className="flex  items-center mb-1 text-white text-base font-medium">
          {t("form.services")}{" "}
        </label>
        <CustomTabs
          tabs={[
            {
              title: "Construcción",
              content: (
                <CustomSelect
                  text=""
                  name="construccion"
                  required={false}
                  options={optionsConstruction}
                  placeholder="Select an option..."
                  value={formik.values.construccion}
                  onChange={(value) =>
                    formik.setFieldValue("construccion", value)
                  }
                  error={Boolean(
                    formik.touched.construccion && formik.errors.construccion
                  )}
                />
              ),
            },
            {
              title: "Proyectos Ejecutivos",
              content: (
                <CustomSelect
                  text=""
                  name="proyectosEjecutivos"
                  required={false}
                  options={optionsProjectExecution}
                  placeholder="Select an option..."
                  value={formik.values.proyectosEjecutivos}
                  onChange={(value) =>
                    formik.setFieldValue("proyectosEjecutivos", value)
                  }
                  error={Boolean(
                    formik.touched.proyectosEjecutivos &&
                      formik.errors.proyectosEjecutivos
                  )}
                />
              ),
            },
            {
              title: "Diseño Arquitectónico",
              content: (
                <CustomSelect
                  text=""
                  name="disenoArquitectonico"
                  required={false}
                  options={optionsArchitecturalDesign}
                  placeholder="Select an option..."
                  value={formik.values.disenoArquitectonico}
                  onChange={(value) =>
                    formik.setFieldValue("disenoArquitectonico", value)
                  }
                  error={Boolean(
                    formik.touched.disenoArquitectonico &&
                      formik.errors.disenoArquitectonico
                  )}
                />
              ),
            },
            {
              title: "Consultoría y Asesoría",
              content: (
                <CustomSelect
                  text=""
                  name="consultoriaAsesoria"
                  required={false}
                  options={optionsConsulting}
                  placeholder="Select an option..."
                  value={formik.values.consultoriaAsesoria}
                  onChange={(value) =>
                    formik.setFieldValue("consultoriaAsesoria", value)
                  }
                  error={Boolean(
                    formik.touched.consultoriaAsesoria &&
                      formik.errors.consultoriaAsesoria
                  )}
                />
              ),
            },
          ]}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
      <div className="relative mb-2">
        <label className="flex  items-center mb-1 text-white text-base font-medium">
          Cuentanos sobre tu proyecto{" "}
        </label>
        <div className="relative  text-gray-500 focus-within:text-gray-900">
          <textarea
            id="message"
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="block w-full h-20 px-4 py-2.5 text-base leading-7 font-extralight font-sans shadow-xs text-gray-900 bg-white/90 border border-gray-300 placeholder-gray-400 focus:outline-none resize-none"
            placeholder="Write a message..."
            maxLength={2000}
          ></textarea>
        </div>
      </div>
      <div className="flex justify-center">
        <SendButton />
      </div>
    </form>
  );
};

export default Form;
