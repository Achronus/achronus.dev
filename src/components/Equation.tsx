import "katex/dist/katex.min.css";

type EquationProps = {
  index: string;
  children: React.ReactNode;
};

const Equation = ({ index, children }: EquationProps) => {
  return (
    <p className="paragraph flex justify-between items-center">
      <span className="flex-1 text-center">{children}</span>
      <span className="mr-4">({index})</span>
    </p>
  );
};

export default Equation;
