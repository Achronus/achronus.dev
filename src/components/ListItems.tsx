type ListItemsProps = {
  items: string[] | React.ReactNode[];
  className?: string;
  ordered?: boolean;
};

const ListItems = ({ items, className, ordered }: ListItemsProps) => {
  return (
    <div className={className}>
      {ordered ? (
        <ol className="list-decimal ml-4">
          {items.map((item, idx) => (
            <li key={idx} className="mb-2">
              {item}
            </li>
          ))}
        </ol>
      ) : (
        <ul className="list-disc ml-4">
          {items.map((item, idx) => (
            <li key={idx} className="mb-2">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListItems;
