import React from 'react';

export default function PriorityFilter({ onFilterChange }) {
  return (
    <div>
      <button onClick={() => onFilterChange("All")}>All</button>
      <button onClick={() => onFilterChange("Low")}>Low</button>
      <button onClick={() => onFilterChange("Medium")}>Medium</button>
      <button onClick={() => onFilterChange("High")}>High</button>
    </div>
  );
}