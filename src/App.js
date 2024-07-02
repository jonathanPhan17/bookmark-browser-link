import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import './index.css';
import './App.css';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Switch } from "@mui/material";

import ParkingLotForm from './Components/ParkingLotForm/ParkingLotForm';
import ParkingLotList from './Components/ParkingLotList/ParkingLotList';
import Timer from './Components/Timer/Timer';
import PriorityFilter from './Components/PriorityFilter/PriorityFilter';

function App() {
  const [parkingLotItems, setParkingLotItems] = useState(getInitialState());
  const [formTheme, setFormTheme] = useState("dark");
  const [toggleDarkMode, setToggleDarkMode] = useState(true);
  const [filteredParkingLotItems, setFilteredParkingLotItems] = useState([]);

  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
    setFormTheme(formTheme === "light" ? "dark" : "light");
  };

  const darkTheme = createTheme({
    palette: {
      mode: toggleDarkMode ? "dark" : "light", 
      primary: {
        main: "#90caf9",
      },
      secondary: {
        main: "#f48fb1",
      },
    },
  });

  function saveParkingLotItems() {
    localStorage.setItem("items", JSON.stringify(parkingLotItems));
  }

  function getInitialState() {
    let savedState = localStorage.getItem("items");
    if (typeof savedState === "string") {
      return JSON.parse(savedState);
    }
    return [];
  }

  function deleteItem(idToDelete) {
    setParkingLotItems((oldItems) =>
      oldItems.filter((item) => item.id !== idToDelete)
    );
  }


  function addItem(date, priority, link, description) {
    setParkingLotItems((oldItems) => [
      ...oldItems,
      {
        id: nanoid(),
        date,
        description,
        link,
        priority,
      },
    ]);
  }

  function filterItemsByPriority(priority) {
    if (priority === "All") {
      setFilteredParkingLotItems(parkingLotItems);
    } else {
      const filteredItems = parkingLotItems.filter(
        item => item.priority === priority
      );
      setFilteredParkingLotItems(filteredItems);
    }
  }

  useEffect(saveParkingLotItems, [parkingLotItems]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <header>
          <h1>
            <strong>Browser Parking Lot</strong>
          </h1>
          <h4>Send most of your browser tabs into retirement</h4>
          <Timer />
          <Switch checked={toggleDarkMode} onChange={toggleDarkTheme} />
          <label>{toggleDarkMode ? "🌙" : "🔆"}</label>
        </header>
        <main>
          <ParkingLotForm addItem={addItem} theme={formTheme} />
          <PriorityFilter onFilterChange={filterItemsByPriority} />
          <ParkingLotList
            parkingLotItems={filteredParkingLotItems}
            deleteItem={deleteItem}
            isEmpty={filteredParkingLotItems.length === 0}
          />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
