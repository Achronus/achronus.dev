type ListItemsProps = {
  items: string[] | React.ReactNode[];
  className?: string;
};

const ListItems = ({ items, className }: ListItemsProps) => {
  return (
    <div className={className}>
      <ul className="list-disc ml-4">
        {items.map((item, idx) => (
          <li key={idx} className="mb-2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListItems;
