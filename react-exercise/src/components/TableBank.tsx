// src/Table.tsx
import React from "react";

interface TableProps {
  columns: any[];
  datas: any[];
  onDelete: (id: number) => void;
}

const Table: React.FC<TableProps> = ({ columns, datas, onDelete }) => {
  return (
    <table style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.Header}>{column.Header}</th>
          ))}
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {datas.map((row) => (
          <tr key={row.id}>
            {columns.map((column) => (
              <td key={column.Header}>{row[column.accessor]}</td>
            ))}
            <td>
              <button onClick={() => onDelete(row.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
