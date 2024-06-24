import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import './index.css';
import './App.css';

import ParkingLotForm from './Components/ParkingLotForm/ParkingLotForm';
import ParkingLotList from './Components/ParkingLotList/ParkingLotList';
import Timer from './Components/Timer/Timer';
import Toggle from './Components/Toggle/Toggle';


function App() {

  const [parkingLotItems, setParkingLotItems] = useState(getInitialState());
  const [isLight, setIsLight] = useState(false);

  function saveParkingLotItems() {
    localStorage.setItem('items', JSON.stringify(parkingLotItems))
  }

  function getInitialState() {
    let savedState = localStorage.getItem('items');
    if (typeof savedState === 'string') {
      return JSON.parse(savedState);
    }
      return [];
  }

  
  function deleteItem(idToDelete) {
    setParkingLotItems((oldItems) =>
      oldItems.filter((item) => item.id !== idToDelete)
    );
  }


  function handleToggle() {
    setIsLight(!isLight);
  }

  function addItem(date, priority, link, description ) {
    setParkingLotItems(oldItems => [
        ...oldItems, 
        {
          id: nanoid(),
          date,
          description,
          link,
          priority
        },
    ])
  }

  useEffect(saveParkingLotItems, [parkingLotItems]);

  return (
    <div className="App" data-theme={isLight ? "light" : "dark"}>
      <header>
        <Toggle isChecked={isLight} handleToggleChange={handleToggle}/>
        <h1>Browser Parking Lot</h1>
        <p>Send most of your browser tabs into retirement</p>
        <Timer />
      </header>
      <main>
        <ParkingLotForm addItem={addItem} />
        <ParkingLotList parkingLotItems={parkingLotItems} deleteItem={deleteItem} />
      </main>
    </div>
  );
}

export default App;
