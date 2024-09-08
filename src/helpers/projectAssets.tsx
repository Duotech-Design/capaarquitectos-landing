import React from "react";

export const ProjectAssets = {
  oficinas_corpoil: {
    name: "OFICINAS CORPOIL",
    images: 4,
    location: "Santa Maria del Rio",
  },
  oficinas_tomate: {
    name: "OFICINAS TOMATE",
    images: 4,
    location: "Santa Maria del Rio",
  },
  pabellon_m: {
    name: "PABELLON M",
    images: 4,
    location: "Santa Maria del Rio",
  }
} as const;

export type AvailableProjects = keyof typeof ProjectAssets;

export const ProjectList: AvailableProjects[] = Object.keys(ProjectAssets) as AvailableProjects[];

type ProjectAssetProps = {
  src: string;
  alt: string;
} & React.ImgHTMLAttributes<HTMLImageElement>;

export const ProjectAsset: React.FC<ProjectAssetProps> = ({
  src,
  alt,
  ...props
}) => {
  const imgSrc = new URL(`../assets/img/${src}`, import.meta.url).href;
  return <img src={imgSrc} alt={alt} {...props} />;
};
