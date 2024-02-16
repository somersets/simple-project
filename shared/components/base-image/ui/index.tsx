import Image from "next/image";
import { BaseImageProps } from "@/shared/components/base-image/model";

export default function BaseImage({ alt, ...rest }: BaseImageProps) {
  return <Image alt={alt || "stub image"} {...rest} />;
}
