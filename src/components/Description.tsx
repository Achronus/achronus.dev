import { cn } from "@/lib/utils";

type DescriptionProps = {
  children: React.ReactNode;
  styles?: string;
};

const Description = ({ children, styles }: DescriptionProps) => {
  return (
    <div className={cn("desc", styles)}>
      <p>{children}</p>
    </div>
  );
};

export default Description;
