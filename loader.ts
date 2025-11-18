"use client";
import LoaderProps from "./@types/LoaderProps";

export default function Loader({ src, width, quality }: LoaderProps): string {
  if (src.startsWith("https://images.pexels.com")) return src;
  return `https://my-portfolio-sv0i.onrender.com/${src}?w=${width}&q=${
    quality || 75
  }`;
}