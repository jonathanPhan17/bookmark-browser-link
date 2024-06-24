import {  useState, useEffect } from 'react';

function getTime() {
  return new Date().toLocaleTimeString();
}

export default function Timer() {

  const [time, setTime] = useState(getTime());

  const [intervalId, setIntervalId] = useState(null);

  function didMount() {
    let id = setInterval(() => {
      setTime(getTime());
    }, 100);
    setIntervalId(id);
  }

  function willUnmount() {
    clearInterval(intervalId);
  }

  useEffect(administrateTimer, []);

  function administrateTimer() {
    didMount();
    return willUnmount();
  }



  return (
    <div>
      {time}
    </div>
  )
}
