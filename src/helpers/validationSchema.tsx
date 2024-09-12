import * as Yup from "yup";

const validationSchema = Yup.object({
    name: Yup.string().required().min(2),
    email: Yup.string().email().required(),
    phone: Yup.string()
      .required()
      .matches(/^[0-9]+$/)
      .min(10),
      howDidYouHearAboutUs: Yup.string().required(),
    message: Yup.string(),
  });

export default validationSchema;