import { IconType } from "@/types/core";
import { Icon } from "./Icon";

type IconArrayProps = {
  icons: IconType[];
};

const IconArray = ({ icons }: IconArrayProps) => {
  return icons.map((icon) => <Icon key={icon.name} {...icon} />);
};

export default IconArray;
