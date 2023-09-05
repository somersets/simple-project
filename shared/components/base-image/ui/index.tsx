import Image from "next/image";
import { BaseImageProps } from "@/shared/components/base-image/model";

export default function BaseImage({ ...rest }: BaseImageProps) {
  return <Image {...rest} />;
}
