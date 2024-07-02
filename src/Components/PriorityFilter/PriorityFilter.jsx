import React from 'react';
import { useTheme } from "@mui/material/styles";
import './PriorityFilter.css';
import { ButtonGroup, Button } from '@mui/material';


export default function PriorityFilter({ onFilterChange }) {

  const theme = useTheme();

  const isDarkMode = theme.palette.mode === "dark";
  const filterButtonTheme = {
    backgroundColor: isDarkMode
      ? theme.palette.grey[800]
      : theme.palette.grey[300],
    color: isDarkMode ? theme.palette.grey[300] : theme.palette.grey[800],
  };

  return (
    <>
      <ButtonGroup className="filter-btn-container" >
        <Button style={filterButtonTheme} onClick={() => onFilterChange("All")}>
          All
        </Button>
        <Button style={filterButtonTheme} onClick={() => onFilterChange("Low")}>
          Low
        </Button>
        <Button style={filterButtonTheme} onClick={() => onFilterChange("Medium")}>
          Medium
        </Button>
        <Button style={filterButtonTheme} onClick={() => onFilterChange("High")}>
          High
        </Button>
      </ButtonGroup>
    </>
  );
}