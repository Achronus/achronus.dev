import { cn } from "@/libs/utils";
import Image from "next/image";

type ProfileImgProps = {
  styles?: string;
  src: string;
  alt: string;
};

/**
 * @name ProfileImg
 * @description Displays an image of the author.
 *
 * @param {string} styles - An optional string argument for adding additional styles to the img container.
 * @param {string} src - the source URL of the image
 * @param {string} alt - The alternative text for the image
 **/
const ProfileImg = ({ styles, src, alt }: ProfileImgProps) => {
  return (
    <div className="avatar m-auto sm:m-0">
      <div
        className={cn("w-36 h-36 rounded-full lg:w-48 lg:h-48 md:ml-4", styles)}
      >
        <Image src={src} alt={alt} width={144} height={144} />
      </div>
    </div>
  );
};

export default ProfileImg;
