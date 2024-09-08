import React from "react";

export const ProjectAssets = {
  oficinas_corpoil: {
    name: "OFICINAS CORPOIL",
    images: 22,
    location: "Santa Maria del Rio",
    type: "Diseño de interiores",
    status: "En proceso",
    surface: "O metros",
  },
  oficinas_tomate: {
    name: "OFICINAS TOMATE",
    images: 17,
    location: "Santa Maria del Rio",
    type: "Diseño de interiores",
    status: "En proceso",
    surface: "O metros",
  },
  pabellon_m: {
    name: "PABELLON M",
    images: 31,
    location: "Santa Maria del Rio",
    type: "Diseño de interiores",
    status: "En proceso",
    surface: "O metros",
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
  console.log(src);
  const imgSrc = new URL(`../assets/img/${src}`, import.meta.url).href;
  return <img src={imgSrc} alt={alt} {...props} />;
};
