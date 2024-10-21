import React from "react";

export const ProjectAssets = {
  oficinas_rosmarinus: {
    name: "OFICINAS ROSMARINUS",
    images: 16,
    renders: 0,
    planos: 0,
    location: "SAN LUIS POTOSÍ, SLP.",
    type: "Diseño de interiores",
    status: "Terminado",
    surface: "305m2",
    fotografiasBoolean: true,
    rendersBoolea: false,
    planosBoolea: false,
  },
  casa_dplusd: {
    name: "CASA D+D",
    images: 15,
    renders: 0,
    planos: 0,
    location: "SANTA MARÍA DEL RÍO, SLP.",
    type: "Construción de obra nueva",
    status: "Construido",
    surface: "305m2",
    fotografiasBoolean: true,
    rendersBoolea: false,
    planosBoolea: false,
  },
  proyecto_el_maderable: {
    name: "PROYECTO El MADERABLE",
    images: 27,
    renders: 3,
    planos: 8,
    location: "SAN LUÍS POTOSÍ",
    type: "Remodelación y ampliación",
    status: "Terminado",
    surface: "305m2",
    fotografiasBoolean: true,
    rendersBoolea: true,
    planosBoolea: true,
  },
  casa_latania: {
    name: "CASA LATANIA",
    images: 0,
    renders: 5,
    planos: 3,
    location: "",
    type: "",
    status: "Construido",
    surface: "",
    fotografiasBoolean: false,
    rendersBoolea: true,
    planosBoolea: true,
  },
  clinica_axolotl: {
    name: "CLÍNICA AXOLOTL",
    images: 0,
    renders: 2,
    planos: 2,
    location: "",
    type: "",
    status: "Construido",
    surface: "",
    fotografiasBoolean: false,
    rendersBoolea: true,
    planosBoolea: true,
  },
  codapsa: {
    name: "CODAPSA",
    images: 0,
    renders: 2,
    planos: 0,
    location: "",
    type: "",
    status: "Construido",
    surface: "",
    fotografiasBoolean: false,
    rendersBoolea: true,
    planosBoolea: false,
  },
  hangar_corpoil: {
    name: "HANGAR CORPOIL",
    images: 0,
    renders: 0,
    planos: 3,
    location: "",
    type: "",
    status: "Construido",
    surface: "",
    fotografiasBoolean: false,
    rendersBoolea: false,
    planosBoolea: true,
  },
  oficinas_av_tecnica: {
    name: "OFICINAS AV. TÉCNICA",
    images: 0,
    renders: 0,
    planos: 4,
    location: "",
    type: "",
    status: "Construido",
    surface: "",
    fotografiasBoolean: false,
    rendersBoolea: false,
    planosBoolea: true,
  },
  propysol: {
    name: "PROPYSOL",
    images: 0,
    renders: 2,
    planos: 1,
    location: "",
    type: "",
    status: "Construido",
    surface: "",
    fotografiasBoolean: false,
    rendersBoolea: true,
    planosBoolea: true,
  },
  terraza_fc: {
    name: "TERRAZA FC",
    images: 0,
    renders: 1,
    planos: 2,
    location: "",
    type: "",
    status: "Construido",
    surface: "",
    fotografiasBoolean: false,
    rendersBoolea: true,
    planosBoolea: true,
  },
  terraza_mr: {
    name: "TERRAZA MR",
    images: 0,
    renders: 2,
    planos: 3,
    location: "",
    type: "",
    status: "Construido",
    surface: "",
    fotografiasBoolean: false,
    rendersBoolea: true,
    planosBoolea: true,
  },
} as const;

export type AvailableProjects = keyof typeof ProjectAssets;

export const ProjectList: AvailableProjects[] = Object.keys(
  ProjectAssets
) as AvailableProjects[];

type ProjectAssetProps = {
  contentTypes: string | null;
  isFullScreen?: boolean;
  project: AvailableProjects;
  index: number;
  alt: string;
} & React.ImgHTMLAttributes<HTMLImageElement>;

export const ProjectAsset: React.FC<ProjectAssetProps> = ({
  contentTypes,
  isFullScreen = false,
  project,
  index,
  alt,
  ...props
}) => {
  const supportedWidth = isFullScreen ? [1020] : [320, 640, 1020];

  let src = "";
  if (contentTypes === "images") {
    src = `${project}/${(index + 1).toString().padStart(2, "0")}.webp`;
  } else if(project === "proyecto_el_maderable"  && contentTypes === "renders") {
    src = `${project}/temporal/${(index + 1)
      .toString()
      .padStart(2, "0")}.webp`;
  }else {
    src = `${project}/${contentTypes}/${(index + 1)
      .toString()
      .padStart(2, "0")}.webp`;
  }

  const imgSrc = new URL(`../assets/img/${src}`, import.meta.url).href;

  const srcSet = supportedWidth
    .map((width) => {
      let src = "";
      if (contentTypes === "images") {
        src = `${project}/${(index + 1)
          .toString()
          .padStart(2, "0")}-${width}.webp`;
      } else if(project === "proyecto_el_maderable" && contentTypes === "renders") {
        src = `${project}/temporal/${(index + 1)
          .toString()
          .padStart(2, "0")}-${width}.webp`;
      } else {
        src = `${project}/${contentTypes}/${(index + 1)
          .toString()
          .padStart(2, "0")}-${width}.webp`;
      }
      const imgSrc = new URL(`../assets/img/${src}`, import.meta.url).href;
      return `${imgSrc} ${width}w`;
    })
    .join(", ");

  const sizes = supportedWidth
    .map((width) => {
      return `(max-width: ${width}px) ${width}px`;
    })
    .join(", ");
  console.log(imgSrc)
  return (
    <img
      srcSet={contentTypes !== "images" ? "" : srcSet}
      sizes={sizes}
      src={imgSrc}
      alt={alt}
      {...props}
    />
  );
};
