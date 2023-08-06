import React from "react";
import "./Grid-Table.css"; // 👈new addition

interface Header {
  displayText: string;
  key: string;
}

export interface GridProps {
  headers: Header[];
}

const GridTable = ({ headers }: GridProps) => {
  // btn class added 👇👇
  return (
    <table className="btn">
      <thead>
        {headers.map((header) => {
          return <th key={header.key}>{header.displayText}</th>;
        })}
      </thead>
      <tbody></tbody>
    </table>
  );
};

export default GridTable;
