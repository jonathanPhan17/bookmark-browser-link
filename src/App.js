import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import './index.css';
import './App.css';

import ParkingLotForm from './Components/ParkingLotForm/ParkingLotForm';
import ParkingLotList from './Components/ParkingLotList/ParkingLotList';
import Timer from './Components/Timer/Timer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Switch } from '@mui/material';


function App() {
  const [parkingLotItems, setParkingLotItems] = useState(getInitialState());
  const [formTheme, setFormTheme] = useState("dark");

  // state to manage the dark mode
  const [toggleDarkMode, setToggleDarkMode] = useState(true);

  // function to toggle the dark mode as true or false
  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
    setFormTheme(formTheme === "light" ? "dark" : "light");
  };



  // create a darkTheme function to handle dark theme using createTheme
  const darkTheme = createTheme({
    palette: {
      mode: toggleDarkMode ? "dark" : "light", // handle theme change
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

  useEffect(saveParkingLotItems, [parkingLotItems]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <header>
          <h1>Browser Parking Lot</h1>
          <p>Send most of your browser tabs into retirement</p>
          <Timer />
            <Switch checked={toggleDarkMode} onChange={toggleDarkTheme}  />
        </header>
        <main>
          <ParkingLotForm addItem={addItem} theme={formTheme} />
          <ParkingLotList
            parkingLotItems={parkingLotItems}
            deleteItem={deleteItem}
          />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
