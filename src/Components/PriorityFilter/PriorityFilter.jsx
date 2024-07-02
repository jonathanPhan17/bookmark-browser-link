import React from 'react';
import { useTheme } from "@mui/material/styles";
import './PriorityFilter.css';
import { ButtonGroup, Button } from '@mui/material';


export default function PriorityFilter({ onFilterChange }) {

  const theme = useTheme();

   const buttonStyle = {
     backgroundColor:
       theme.palette.mode === "dark"
         ? theme.palette.grey[800]
         : theme.palette.grey[300],
     color:
       theme.palette.mode === "dark"
         ? theme.palette.grey[300]
         : theme.palette.grey[800],
   };

  return (
    <>
      <ButtonGroup className="filter-btn-container" >
        <Button style={buttonStyle} onClick={() => onFilterChange("All")}>
          All
        </Button>
        <Button style={buttonStyle} onClick={() => onFilterChange("Low")}>
          Low
        </Button>
        <Button style={buttonStyle} onClick={() => onFilterChange("Medium")}>
          Medium
        </Button>
        <Button style={buttonStyle} onClick={() => onFilterChange("High")}>
          High
        </Button>
      </ButtonGroup>
    </>
  );
}