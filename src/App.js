import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import './index.css';
import './App.css';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import ParkingLotForm from './Components/ParkingLotForm/ParkingLotForm';
import ParkingLotList from './Components/ParkingLotList/ParkingLotList';
import Timer from './Components/Timer/Timer';
import PriorityFilter from './Components/PriorityFilter/PriorityFilter';
import ToggleThemeButton from './Components/ToggleThemeButton/ToggleThemeButton';

function App() {
  const [parkingLotItems, setParkingLotItems] = useState(getInitialState());
  const [formTheme, setFormTheme] = useState("dark");
  const [toggleDarkMode, setToggleDarkMode] = useState(true);
  const [filteredParkingLotItems, setFilteredParkingLotItems] = useState([]);
  const [currentFilter, setCurrentFilter] = useState("All")

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
    setCurrentFilter(priority);
  }

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

  useEffect(() => {
    if (currentFilter === "All") {
      setFilteredParkingLotItems(parkingLotItems);
    } else {
      const filteredItems = parkingLotItems.filter(
        item => item.priority === currentFilter
      );
      setFilteredParkingLotItems(filteredItems);
    }
  }, [parkingLotItems, currentFilter])

  useEffect(saveParkingLotItems, [parkingLotItems]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <header>
          <h1>
            <strong>Bookmark Browser Tab</strong>
          </h1>
          <h4>Send most of your browser tabs into retirement</h4>
          <Timer />
          <ToggleThemeButton
            toggleDarkMode={toggleDarkMode}
            setToggleDarkMode={setToggleDarkMode}
            setFormTheme={setFormTheme}
          />
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
