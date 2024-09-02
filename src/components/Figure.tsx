import { cn } from "@/lib/utils";
import Image from "next/image";

type FigureProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
  className?: string;
};

const Figure = ({
  src,
  alt,
  width,
  height,
  caption,
  className,
}: FigureProps) => {
  return (
    <figure
      className={cn(
        "my-4 flex flex-col justify-center items-center",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="rounded-md"
      />
      <figcaption className="text-center text-sm text-gray-500 mt-2">
        {caption}
      </figcaption>
    </figure>
  );
};

export default Figure;
