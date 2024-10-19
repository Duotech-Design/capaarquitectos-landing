import React from "react";

const supportedWidth = [1020];

export const HomeAssets = {
  oficinas_rosmarinus: {
    name: "OFICINAS ROSMARINUS",
    images: 22,
    location: "SAN LUIS POTOSÍ, SLP.",
    type: "Diseño de interiores",
    status: "Terminado",
    surface: "305m2",
  },
  casa_dplusd: {
    name: "CASA D+D",
    images: 17,
    location: "SANTA MARÍA DEL RÍO, SLP.",
    type: "Construción de obra nueva",
    status: "Construido",
    surface: "305m2",
  },
  proyecto_el_maderable: {
    name: "PROYECTO El MADERABLE",
    images: 31,
    location: "SAN LUÍS POTOSÍ",
    type: "Remodelación y ampliación",
    status: "Terminado",
    surface: "305m2",
  }
} as const;

export type AvailableHome = keyof typeof HomeAssets;

export const HomeList: AvailableHome[] = Object.keys(HomeAssets) as AvailableHome[];

type HomeAssetProps = {
  project: AvailableHome;
  index: number;
  alt: string;
} & React.ImgHTMLAttributes<HTMLImageElement>;

export const HomeAsset: React.FC<HomeAssetProps> = ({
  project,
  index,
  alt,
  ...props
}) => {
  const src = `${project}/${(index).toString().padStart(2, "0")}.webp`;
  const imgSrc = new URL(`../assets/img/${src}`, import.meta.url).href;

  const srcSet = supportedWidth.map((width) => {
    const src = `${project}/${(index).toString().padStart(2, "0")}-${width}.webp`;
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
