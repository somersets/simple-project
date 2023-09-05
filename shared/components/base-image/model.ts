import { ImageProps } from "next/image";
import { ImageAlts } from "@/@types/image-alts";

export interface BaseImageProps extends Omit<ImageProps, "alt"> {
  alt: ImageAlts;
}
