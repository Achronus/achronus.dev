import { cn } from "@/libs/utils";

type ProfileImgProps =
  React.ImgHTMLAttributes<HTMLImageElement> & {
    styles?: string;
  };

/**
 * @name ProfileImg
 * @description Displays an image of the author.
 *
 * @param {string} styles - An optional string argument for adding additional styles to the img container.
 * @param {React.ImgHTMLAttributes<HTMLImageElement>} props - any property available to the HTML `<img>` tag.
 **/
const ProfileImg = ({
  styles,
  ...props
}: ProfileImgProps) => {
  return (
    <div className="avatar m-auto sm:m-0">
      <div
        className={cn(
          "w-36 h-36 rounded-full lg:w-48 lg:h-48 md:ml-4",
          styles
        )}
      >
        <img {...props} />
      </div>
    </div>
  );
};

export default ProfileImg;
