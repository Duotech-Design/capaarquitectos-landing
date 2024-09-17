import { useFormik } from "formik";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import validationSchema from "../../helpers/validationSchema";
import CustomInput from "../ui/CustomInput";
import CustomSelect from "../ui/CustomSelect";
import CustomTabs from "../ui/CustomTabs";
import SendButton from "./SendButton";
import { submitForm } from "../../services/formService";
type State = "loading" | "success" | "start" | "error";

type Event = { type: "CLICK" };

interface StateMachine {
  initial: State;
  states: {
    [key in State]: {
      on: {
        [key in Event["type"]]: State;
      };
    };
  };
}

const machine: StateMachine = {
  initial: "start",
  states: {
    start: {
      on: {
        CLICK: "loading",
      },
    },
    loading: {
      on: {
        CLICK: "success",
      },
    },
    success: {
      on: {
        CLICK: "error",
      },
    },
    error: {
      on: {
        CLICK: "start",
      },
    },
  },
};
const transition = (state: State, event: Event): State => {
  return machine.states[state].on[event.type];
};

const formSenderMapping = {
  "name": "name",
  "email": "email",
  "phone": "phone",
  "construccion": "service",
  "consultoriaAsesoria": "service",
  "disenoArquitectonico": "service",
  "proyectosEjecutivos": "service",
  "howDidYouHearAboutUs": "contact",
  "others": "contact",
  "message": "about",
} as any

const Form = () => {
  const { t } = useTranslation("global");
  const [state, setState] = useState<State>(machine.initial);

  const simulateEmailSend = async (data: Record<string, unknown> | undefined) => {
    if (!data) {
      return;
    }

    const senderRequest = {} as any;

    Object.keys(data).forEach((key) => {
      if (data[key] === "") {
        return;
      }

      if (formSenderMapping[key]) {
        senderRequest[formSenderMapping[key]] = data[key];
      }

    });

    return submitForm(senderRequest);
  };

  const onSubmit = (data: Record<string, unknown> | undefined) => {
    setState(transition(state, { type: "CLICK" }));

    simulateEmailSend(data)
      .then((data) => {
        console.log(data);
        setState("success");
      })
      .catch((error) => {
        console.log(error);
        setState("error");
      })
      .finally(() => {
        setTimeout(() => {
          setState("start");
        }, 3000);
      });
  };

  const optionsHowDidYouHearAboutUs = [
    { value: "facebook", label: "Facebook" },
    { value: "google", label: "Google" },
    {
      value: "revista",
      label: t("form.options.optionsHowDidYouHearAboutUs.magazine"),
    },
    {
      value: "amigo o conocido",
      label: t("form.options.optionsHowDidYouHearAboutUs.recommendation"),
    },
    {
      value: "otro",
      label: t("form.options.optionsHowDidYouHearAboutUs.other"),
    },
  ];

  const optionsConstruction = [
    {
      value: "Construcción de Obra nueva",
      label: t("form.options.construction.new_construction"),
    },
    {
      value: "Supervisión de Obra",
      label: t("form.options.construction.construction_supervision"),
    },
    { value: "Obra Civil", label: t("form.options.construction.civil_works") },
    {
      value: "Remodelaciones y Ampliaciones",
      label: t("form.options.construction.renovations_and_additions"),
    },
  ];

  const optionsProjectExecution = [
    {
      value: "Desarrollo de planos constructivos",
      label: t("form.options.construction_documents.construction_drawings"),
    },
    {
      value: "Gestion de Permisos y Licencias",
      label: t("form.options.construction_documents.permit_acquisition"),
    },
    {
      value: "Memorias Descriptivas y Especificaciones",
      label: t(
        "form.options.construction_documents.specifications_and_descriptive_reports"
      ),
    },
    {
      value: "Modelado 3D y Renderizacion",
      label:
        t("form.options.construction_documents.3d_modeling_and_rendering") +
        "3" +
        t("form.options.construction_documents.3d_modeling_and_rendering_2"),
    },
  ];

  const optionsArchitecturalDesign = [
    {
      value: "Diseño Habitacional",
      label: t("form.options.architectural_design.residential_design"),
    },
    {
      value: "Diseño Comercial",
      label: t("form.options.architectural_design.commercial_design"),
    },
    {
      value: "Diseño de Interiores",
      label: t("form.options.architectural_design.interior_design"),
    },
  ];

  const optionsConsulting = [
    {
      value: "Estudios de Factibilidad",
      label: t("form.options.architectural_consulting.feasibility_analysis"),
    },
    {
      value: "Asesoria de Diseño",
      label: t("form.options.architectural_consulting.design_consultation"),
    },
  ];

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      howDidYouHearAboutUs: "",
      others: "",
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
      onSubmit(formik.values);
      setSubmitting(false);
    },
  });

  return (
    <form
      className="p-6 min-w-[280px] md:min-w-[400px] flex flex-col justify-center backdrop-blur-md bg-darkBlue/30"
      onSubmit={formik.handleSubmit}
    >
      <CustomInput
        label={t("form.name")}
        placeholder={t("form.name_placeholder")}
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
        placeholder={t("form.email_placeholder")}
        name="email"
        id="email"
        type="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={Boolean(formik.touched.email && formik.errors.email)}
        required
      />
      <div className="flex flex-col gap-x-2 justify-between xl:flex-row w-full">
        <CustomInput
          label={t("form.phone")}
          placeholder={t("form.phone_placeholder")}
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
          text={t("form.howDidYouHearAboutUs")}
          placeholder={t("form.howDidYouHearAboutUs_placeholder")}
          name="howDidYouHearAboutUs"
          options={optionsHowDidYouHearAboutUs}
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
      </div>
      {formik.values.howDidYouHearAboutUs === "otro" && (
        <CustomInput
          label={t("form.specify")}
          required={false}
          placeholder={t("form.specify_placeholder")}
          name="others"
          id="others"
          type="text"
          value={formik.values.others}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={Boolean(formik.touched.others && formik.errors.others)}
          icon={false}
        />
      )}
      <div className="relative mt-3 mb-3">
        <label className="flex  items-center mb-1 text-white text-base font-medium">
          {t("form.services")}{" "}
        </label>
        <CustomTabs
          tabs={[
            {
              title: t("form.options.construction.title"),
              content: (
                <CustomSelect
                  text=""
                  name="construccion"
                  required={false}
                  options={optionsConstruction}
                  placeholder={t("form.options.construction.placeholder")}
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
              title: t("form.options.construction_documents.title"),
              content: (
                <CustomSelect
                  text=""
                  name="proyectosEjecutivos"
                  required={false}
                  options={optionsProjectExecution}
                  placeholder={t(
                    "form.options.construction_documents.placeholder"
                  )}
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
              title: t("form.options.architectural_design.title"),
              content: (
                <CustomSelect
                  text=""
                  name="disenoArquitectonico"
                  required={false}
                  options={optionsArchitecturalDesign}
                  placeholder={t(
                    "form.options.architectural_design.placeholder"
                  )}
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
              title: t("form.options.architectural_consulting.title"),
              content: (
                <CustomSelect
                  text=""
                  name="consultoriaAsesoria"
                  required={false}
                  options={optionsConsulting}
                  placeholder={t(
                    "form.options.architectural_consulting.placeholder"
                  )}
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
        />
      </div>
      <div className="relative mb-2">
        <label className="flex  items-center mb-1 text-white text-base font-medium">
          {t("form.projects_description")}
        </label>
        <div className="relative  text-gray-500 focus-within:text-gray-900">
          <textarea
            id="message"
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="block w-full h-20 px-4 py-2.5 text-base leading-7 font-extralight font-sans shadow-xs text-gray-900 bg-white/90 border border-gray-300 placeholder-gray-400 focus:outline-none resize-none"
            placeholder={t("form.projects_description_placeholder")}
            maxLength={2000}
          ></textarea>
        </div>
      </div>
      <div className="flex justify-center">
        <SendButton text={t(`form.button.${state}`)} state={state} />



      </div>
    </form>
  );
};

export default Form;
