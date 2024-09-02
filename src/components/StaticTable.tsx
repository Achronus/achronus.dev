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
  figure?: string;
};

const StaticTable = ({ columns, values, figure }: StaticTableProps) => {
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
      {figure && <TableCaption>{figure}</TableCaption>}
    </Table>
  );
};

export default StaticTable;
