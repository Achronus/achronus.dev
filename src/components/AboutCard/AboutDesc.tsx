const Description = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="desc">
      <p>{children}</p>
    </div>
  );
};

export default Description;
