import { TagType } from "@/types/global";
import Svg from "@components/Svg";

const Tag = ({ type, name, svg }: TagType) => {
  return (
    <div className={`${type} flex items-center mb-1`}>
      <Svg
        path={svg.path}
        viewBox={svg.viewBox}
        className="mr-1"
      />
      <p>{name}</p>
    </div>
  );
};

export default Tag;
