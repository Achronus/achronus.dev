import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type StaticTableProps = {
  columns: string[];
  values: Record<string, any>[];
  caption?: string;
};

const StaticTable = ({ columns, values, caption }: StaticTableProps) => {
  return (
    <Table className="my-4">
      <TableHeader>
        <TableRow>
          {columns.map((col) => (
            <TableHead key={col}>{col}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {values.map((row, idx) => (
          <TableRow key={idx}>
            {Object.keys(row).map((col, colIdx) => (
              <TableCell key={colIdx}>{row[col]}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
      {caption && <TableCaption>{caption}</TableCaption>}
    </Table>
  );
};

export default StaticTable;
