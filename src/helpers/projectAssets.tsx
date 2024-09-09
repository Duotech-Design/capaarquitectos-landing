import React from "react";

const supportedWidth = [256, 720, 1020];

export const ProjectAssets = {
  oficinas_corpoil: {
    name: "OFICINAS ROSMARINUS",
    images: 22,
    location: "SAN LUIS POTOSÍ, SLP.",
    type: "Diseño de interiores",
    status: "Terminado",
    surface: "305m2",
  },
  oficinas_tomate: {
    name: "CASA D+D",
    images: 17,
    location: "SANTA MARÍA DEL RÍO, SLP.",
    type: "Construción de obra nueva",
    status: "Construido",
    surface: "305m2",
  },
  pabellon_m: {
    name: "PROYECTO El MADERABLE",
    images: 31,
    location: "SAN LUÍS POTOSÍ",
    type: "Remodelación y ampliación",
    status: "Terminado",
    surface: "305m2",
  }
} as const;

export type AvailableProjects = keyof typeof ProjectAssets;

export const ProjectList: AvailableProjects[] = Object.keys(ProjectAssets) as AvailableProjects[];

type ProjectAssetProps = {
  project: AvailableProjects;
  index: number;
  alt: string;
} & React.ImgHTMLAttributes<HTMLImageElement>;

export const ProjectAsset: React.FC<ProjectAssetProps> = ({
  project,
  index,
  alt,
  ...props
}) => {
  const src = `${project}/${(index + 1).toString().padStart(2, "0")}.webp`;
  const imgSrc = new URL(`../assets/img/${src}`, import.meta.url).href;

  const srcSet = supportedWidth.map((width) => {
    const src = `${project}/${(index + 1).toString().padStart(2, "0")}-${width}.webp`;
    const imgSrc = new URL(`../assets/img/${src}`, import.meta.url).href;
    return `${imgSrc} ${width}w`;
  }).join(", ")

  const sizes = supportedWidth.map((width) => {
    return `(max-width: ${width}px) ${width}px`;
  }).join(", ");

  return <img
    srcSet={srcSet}
    sizes={sizes}
    src={imgSrc}
    alt={alt}
    {...props} />;
};
